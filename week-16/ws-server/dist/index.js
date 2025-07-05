"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    console.log("user connected");
    ws.on("message", (e) => {
        const msg = e.toString();
        console.log(msg);
        // Broadcast to all clients
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws.OPEN) {
                client.send(msg);
            }
        });
    });
});
