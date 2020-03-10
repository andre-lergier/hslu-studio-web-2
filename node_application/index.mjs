import express from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import fs from 'fs';
import socketIo from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { isIos, getRandomColor } from './static/modules/utils.mjs';

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
 * socket ist "user"
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
  let order = connectedUsers.size + 1; // add at end
  order = userNumberIdCounter;

  console.log(`user ${socket.id} got order ${order}`)

  let newConnectedUser = {
    socketId: socket.id,
    numberId: userNumberIdCounter,
    color,
    order,
  }

  // inform client about himself
  io.to(`${socket.id}`).emit('clientData', newConnectedUser);

  connectedUsers.set(newConnectedUser.numberId, newConnectedUser);
  userOrder.push(newConnectedUser.numberId);

  // transform map for emit
  let connectedUsersArray = JSON.stringify(Array.from(connectedUsers));

  io.emit('userConnectUpdate', {
    newConnectedUser,
    connectedUsersArray,
    userOrder,
  });

  socket.on('disconnect', () => {
    let deletedNumberId;

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of connectedUsers) {
      if (value.socketId === socket.id) {
        connectedUsers.delete(key);
        deletedNumberId = key;
        console.log(`user with key ${key} (${socket.id}) deleted`);
        break;
      }
    }

    console.log(`now connected: ${connectedUsers.size}`);

    let deletedUser = {
      socketId: socket.id,
      deletedNumberId: deletedNumberId,
    };

    io.emit('userDisconnectUpdate', deletedUser);
  });

  socket.on('orderUpdate', (newOrder) => {
    userOrder = newOrder;

    io.emit('orderUpdate', userOrder);
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
