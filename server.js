const WebSocket = require("ws");
const ws = new WebSocket.Server({ port: 8080 });
const { sendMessageToSockets } = require("./utils/socket");

const sockets = {};

ws.on("connection", (conn) => {
  conn.on("message", (message) => {
    const messageObj = JSON.parse(message);

    switch (messageObj.command) {
      case "NEW_USER":
        sockets[messageObj.userName] = sockets[messageObj.userName]
          ? [...sockets[messageObj.userName], conn]
          : [conn];

        const activeUsers = Object.keys(sockets);

        //tell all the EXISTING users about the new user

        sendMessageToSockets(
          sockets,
          { command: "USER_LIST", activeUsers },
          activeUsers
        );
        break;

      case "NEW MESSAGE":
        sendMessageToSockets(
          sockets,
          {
            command: "USER_TO_USER_MESSAGE",
            message: messageObj.message,
          },
          [messageObj.user]
        );

        break;

      default:
        console.log("Message without known command");
        break;
    }
  });
});
