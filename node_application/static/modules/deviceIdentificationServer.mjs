export const identifyClient = (io, socket, socketIdReceiver, userPosition) => {
  console.log(`socket.id: ${socket.id}`);
  console.log(`socketIdReceiver: ${socketIdReceiver}`);

  io.to(socketIdReceiver).emit('identifyDevice', {
    triggerSocketId: socket.id,
    userPosition,
  });
}
 
 /**
  * Versuch, "Ping Pong" mit Promise zu machen
  * 
  * Problem:
  * socket.on kann nur auf Event von "seinem Client" hören
  * Bsp: User 1 triggered Event: Er erhält die Antwort von Client 1 und kann Event an Client 2 senden
  * Bsp -: User 2 triggered Event: Er sendet Event an User 1, dieser erhält ihn. User 2 kann jedoch nicht die Antwort von User 1 empfangen.
  * 
  * check: https://lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795/
  * 
  * @param socket: socket of triggering client
  */
 export const identifyClientOld = (io, socket, socketIdReceiver, userPosition) => {

  console.log(`socket.id: ${socket.id}`);
  console.log(`socketIdReceiver: ${socketIdReceiver}`);

  return new Promise((resolve, reject) => {
    io.to(socketIdReceiver).emit('identifyDevice', {
      triggerSocketId: socket.id,
      userPosition,
    });

    socket.on('identifyDeviceReply', (socketIdReply) => {
      console.log(`socketIdReply ${socketIdReply}`);

      if(socketIdReply === socketIdReceiver) {
        console.log('RESOLVE');
        resolve('Animation auf Client beendet.');
      } else {
        console.log('REJECT');
        reject('Event stammt nicht vom erwarteten User.');
      }
    });
  });
}
