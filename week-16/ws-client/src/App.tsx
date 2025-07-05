import { useEffect, useState, type FormEvent } from "react";
function App() {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        socket?.send(message);
        setMessage("");
    };
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");
        setSocket(socket);
        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };
        return () => {
            socket.close();
        };
    }, []);
    return (
            
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <button type="submit">Send</button>
                </form>
                <div>
                    <h3>Messages:</h3>
                    <ul>
                        {messages.map((msg, idx) => (
                            <li key={idx}>{msg}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
