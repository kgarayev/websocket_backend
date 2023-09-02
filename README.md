# WebSocket Backend :speech_balloon: 

This repository hosts a WebSocket backend server built using Node.js. The server enables real-time communication between clients by utilising the WebSocket protocol.

## Technologies Used

- **Node.js**: Node.js is a runtime environment that allows server-side JavaScript execution, making it ideal for building network applications like this WebSocket server.

- **WebSocket (ws package)**: The server uses the `ws` package, which is a simple and efficient WebSocket library for Node.js, to handle WebSocket connections and communication.

- **JSON**: JSON (JavaScript Object Notation) is used for message serialisation and deserialisation, allowing easy data exchange between clients and the server.

- **JavaScript**: The server is written in JavaScript, a versatile and widely used programming language, making it accessible for developers to understand and modify.

## How it Works
The server listens on port 8080 and establishes WebSocket connections with clients. It handles incoming messages from clients and supports two commands:

1. **NEW_USER**: When a client joins, the server keeps track of their connection and notifies all existing users about the new user's presence.

2. **NEW MESSAGE**: Clients can send messages to each other, and the server relays these messages to the intended recipients.

This WebSocket backend is a fundamental building block for real-time applications that require instant data transfer between clients and can be extended and integrated into various projects.
