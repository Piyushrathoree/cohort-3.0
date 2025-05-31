"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    console.log('user connected');
    ws.on('message', (e) => {
        console.log(e.toString());
        if (e.toString() === "ping") {
            ws.send('pong');
        }
    });
});
