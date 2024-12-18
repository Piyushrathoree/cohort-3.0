import { useEffect, useState } from "react";
import axios from "axios"; // Make sure axios is imported

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get("http://localhost:8000/todos");
                setTodos(response.data); // Use response.data for axios
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        }

        fetchTodos();
    }, [todos]);

    return (
        <>
            <div className="flex flex-col gap-5 w-screen h-screen items-center justify-center  bg-[#242424] text-white">
                <div className="w-1/6 h-2/4  bg-gray-700 flex flex-col  gap-5  items-center">
                    <h1 className="text-3xl ">Todos</h1>
                    <ul>
                        {todos.map((todo) => (
                            <div>
                                <li className="text-2xl" key={todo.id}>{todo.title}</li>
                                <li>{todo.description}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
