import { useState } from "react";
import axios from "axios";

function Create({ refreshTodos }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting new todo..."); // Debug log
        try {
            await axios.post("http://localhost:8000/todos", {
                title,
                description,
            });

            console.log("Todo created successfully."); // Debug log

            setTitle("");
            setDescription("");

            if (refreshTodos) {
                console.log("Calling refreshTodos..."); // Debug log
                refreshTodos(); // Refresh todos after successful creation
            }
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-screen min-h-1/4 flex flex-col gap-5 text-md"
        >
            <input
                placeholder="Enter your title"
                type="text"
                className="w-3/5 h-14 rounded-3xl bg-gray-900 text-white border-2 border-white  outline-none px-4 mx-14 mt-10 font-mono"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Enter the description"
                className="w-3/5 h-14 rounded-3xl bg-gray-900 text-white  border-2 border-white outline-none px-4 mx-14 py-3 font-mono"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
                type="submit"
                className="mx-14 px-6 w-40 text-xl py-[10px] rounded-3xl text-white border hover:bg-white hover:text-black transition ease-in-out delay-150  shadow-md shadow-gray-700 hover:shadow-stone-600 font-medium"
            >
                Create Todo
            </button>
        </form>
    );
}

export default Create;
