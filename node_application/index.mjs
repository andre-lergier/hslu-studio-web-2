import express from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import fs from 'fs';
import socketIo from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { isIos, getRandomColor, removeElementFromArray } from './static/modules/utils.mjs';

const app = express();
const httpServer = http.createServer(app);
const __filename = fileURLToPath(import.meta.url); // variable mit absolutem pfad zu aktueller datei, inkl. filename
const __dirname = dirname(__filename); // __dirname ist bei neuer Node-Version nicht mehr definiert! daher muss diese neu "kreiert" werden

// ssl
// const privateKey = fs.readFileSync('/Users/andrelergier/.localhost-ssl/localhost.key', 'utf8');
// const certificate = fs.readFileSync('/Users/andrelergier/.localhost-ssl/localhost.crt', 'utf8');
// const credentials = { key: privateKey, cert: certificate };
// const httpsServer = https.createServer(credentials, app);

const io = socketIo(httpServer);
app.use(express.static(`static`)); // ${__dirname}/

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

const connectedUsers = new Map();
let userOrder = [];

// generates unique number id per user - won't be decremented
let userNumberIdCounter = 0;


/**
 * socket ist "user", der etwas auslöst
 * io ist server
 *
 * @events
 * - 'clientData': send info to logged in user
 * - 'userConnectUpdate': send informations to all users
 * - 'userDisconnectUpdate'
 */
io.on('connection', (socket) => {
  userNumberIdCounter++;

  let color = getRandomColor();

  console.log(`user ${socket.id} got numberId ${userNumberIdCounter}`)

  let newConnectedUser = {
    socketId: socket.id,
    numberId: userNumberIdCounter,
    color,
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

    console.log(`now connected: ${connectedUsers.size}`);

    let deletedUser = {
      socketId: socket.id,
      deletedNumberId: deletedNumberId,
    };

    io.emit('userDisconnectUpdate', {
      deletedUser,
      userOrder,
    });
  });

  socket.on('orderUpdate', (newOrder) => {
    userOrder = newOrder;

    // send update to all other users
    socket.broadcast.emit('orderUpdate', userOrder);
  });

  // falls server 'chat message' empfängt
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});
