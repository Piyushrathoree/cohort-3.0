import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import Create from "./components/CreateTodo.jsx";
import Card from "./components/Card.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:8000/todos");
            console.log("Fetched todos:", response.data); // Debug log
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    useEffect(() => {
        console.log("Updated todos state:", todos); // Debug log
    }, [todos]);

    return (
        <div className="    min-h-screen flex flex-col bg-gray-900">
            <Navbar />
            <Create refreshTodos={fetchTodos} />
            <div
                className="ml-2 flex flex-wrap gap-5 justify-start p-10"
                style={{ minHeight: "61vh", overflowY: "auto" }}
            >
                {todos.map((todo) => (
                    <Card
                        refreshTodos={fetchTodos}
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        id={todo.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
