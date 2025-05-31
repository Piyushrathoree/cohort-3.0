import { useEffect, useRef, useState, type FormEvent } from "react";
function App() {
    const [socket, setSocket] = useState(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!socket) {
            return;
        }
        //@ts-ignore
        socket.send(inputRef.current?.value || "");
        inputRef.current!.value = "";
    };

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (e) => {
            if (e.data === "pong") {
                alert("pong received");
            }
        };
    }, []);

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} />
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
}

export default App;
