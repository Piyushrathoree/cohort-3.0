import { useEffect, useState } from "react";
import axios from "axios"; // Make sure axios is imported
import Navbar from "./components/Navbar.jsx";


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
            <div className="h-screen w-screen flex  bg-[#242424] ">
                <Navbar></Navbar>
            </div>
        </>
    );
}


export default App;
