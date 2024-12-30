import axios from "axios";
import { useState } from "react";

function Card({ title, description, id, refreshTodos }) {
    
    async function handleClick() {
        try {
            await axios.delete(`http://localhost:8000/todos/${id}`);
            refreshTodos();
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    }
    
    async function handleCheck(){
        try {
            await axios.put(`http://localhost:8000/todos/${id}`, {
                title,description,
                done: true
            });
            
            refreshTodos();
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    }
    return (
        <div className="w-[18vw] h-[32vh] flex flex-col justify-start relative items-start p-4 border shadow-zinc-600 rounded-lg shadow-md font-montserrat">
            <h3 className="text-2xl text-white  font-bold ">{title}</h3>
            <p className="text-white mt-3">{description}</p>
            <div className="flex gap-8 absolute bottom-4 items-center">
                <div class="inline-flex items-center">
                    <label class="flex items-center cursor-pointer relative">
                        <input
                            defaultValue={false}
                            onChange={handleCheck}
                            type="checkbox"
                            class="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                            id="check-custom-style"

                        />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </label>
                    <span className="text-white text-lg ml-2">
                        Mark as Done
                    </span>
                </div>
                <button
                    className="px-7 py-2 bg-red-500 text-white rounded-3xl hover:bg-red-600 "
                    onClick={handleClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Card;
