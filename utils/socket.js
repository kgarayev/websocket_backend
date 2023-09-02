const sendMessageToSockets = (sockets, message, receipts) => {
  for (const socketArray in sockets) {
    sockets[socketArray].forEach((socket) => {
      if (receipts.includes(socketArray)) {
        socket.send(
          JSON.stringify({
            ...message,
          })
        );
      }
    });
  }
};

module.exports = { sendMessageToSockets };
