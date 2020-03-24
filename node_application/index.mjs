import express from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import fs from 'fs';
import socketIo from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { isIos, getRandomColor, removeElementFromArray } from './src/js/modules/utils.mjs';
import { identifyClient } from './src/js/modules/deviceIdentificationServer.mjs';
import { resolve } from 'dns';
import { rejects } from 'assert';

const app = express();
const httpServer = http.createServer(app);
const __filename = fileURLToPath(import.meta.url); // variable mit absolutem pfad zu aktueller datei, inkl. filename
const __dirname = dirname(__filename); // __dirname ist bei neuer Node-Version nicht mehr definiert! daher muss diese neu "kreiert" werden

const io = socketIo(httpServer);
app.use(express.static(`dist`)); // ${__dirname}/

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

const connectedUsers = new Map();
let userOrder = [];

// generates unique number id per user - won't be decremented
let userNumberIdCounter = 0;


/**
 * socket ist "user", der etwas auslöst
 * io ist server
 */
io.on('connection', (socket) => {
  userNumberIdCounter++;
  console.log(`user ${socket.id} got numberId ${userNumberIdCounter}`)

  const color = getRandomColor();
  const deviceType = socket.handshake.headers.devicetype;
  const newConnectedUser = {
    socketId: socket.id,
    numberId: userNumberIdCounter,
    color,
    deviceType,
  }

  // inform client about himself
  io.to(`${socket.id}`).emit('clientData', newConnectedUser);

  connectedUsers.set(newConnectedUser.socketId, newConnectedUser);
  userOrder.push(newConnectedUser.socketId);

  // transform map for emit
  let connectedUsersArray = JSON.stringify(Array.from(connectedUsers));

  io.emit('userConnectUpdate', {
    newConnectedUser,
    connectedUsersArray,
    userOrder,
  });


  /**
   * Order Update
   */
  socket.on('orderUpdate', (newOrder) => {
    userOrder = newOrder;

    // send update to all other users
    socket.broadcast.emit('orderUpdate', userOrder); // io.emit('orderUpdate', userOrder)
  });


  /**
   * Identify Devices
   */
  socket.on('identifyDevicesStartTrigger', async () => {
    // notify clients that identify was triggered -> enable darkmode
    io.emit('identifyDevicesTriggered', socket.id);

    // trigger first device (socket: client who sent trigger)
    console.log(`identify started from ${socket.id}`);
    identifyClient(io, socket, userOrder[0], 1);
  });

  socket.on('identifyDeviceReply', () => {
    const indexOrderOfRepliedId = userOrder.indexOf(socket.id);

    if(indexOrderOfRepliedId < userOrder.length - 1) {
      identifyClient(io, socket, userOrder[indexOrderOfRepliedId + 1], indexOrderOfRepliedId + 2);
    } else {
      io.emit('identifyDevicesFinished');
    }
  });


  /**
   * Ball
   */
  socket.on('ballLeave', (data) => {
    const justLeftClient = socket.id;
    const userOrderIndex = userOrder.indexOf(justLeftClient);
    const direction = data.side;
    let nextClientIndex;

    if(direction === 'right') {
      // if last element, return first
      if(userOrderIndex >= userOrder.length - 1) {
        nextClientIndex = 0;
      } else {
        nextClientIndex = userOrderIndex + 1;
      }
    } else if (direction === 'left'){
      if(userOrderIndex === 0) {
        nextClientIndex = userOrder.length - 1;
      } else {
        nextClientIndex = userOrderIndex - 1;
      }
    }

    const nextClientId = userOrder[nextClientIndex];
    io.to(nextClientId).emit('ballEnter', data);

    // console.log('ballLeaveEvent! next client =' + nextClientId);
  });


  /**
   * Disconnect
   */
  socket.on('disconnect', () => {
    let deletedNumberId;

    for (const [key, value] of connectedUsers) {
      if (value.socketId === socket.id) {
        connectedUsers.delete(value.socketId);
        removeElementFromArray(userOrder, value.socketId)
        deletedNumberId = value.numberId;
        console.log(`user with numberId ${deletedNumberId} (${socket.id}) deleted`);
        break;
      }
    }
    
    let deletedUser = {
      socketId: socket.id,
      deletedNumberId: deletedNumberId,
    };
    
    io.emit('userDisconnectUpdate', {
      deletedUser,
      userOrder,
    });

    if (connectedUsers.size === 0) {
      userNumberIdCounter = 0;
    }
  });
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log(`listening on *:${httpServer.address().port}`);
});
