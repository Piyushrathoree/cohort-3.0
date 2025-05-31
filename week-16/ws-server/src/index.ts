import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    console.log('user connected');
    ws.on('message', (e) => {
        console.log(e.toString());
        if (e.toString() === "ping") {
            ws.send('pong')
        }
    });
});