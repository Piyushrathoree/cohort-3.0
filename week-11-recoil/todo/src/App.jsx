import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";

import { createTodoAtom } from "./recoil/todo";
function App() {
    function Form() {
        const [todo , setTodo] = useRecoilState(createTodoAtom);
        let id = 0
        return (
            <>
                {/* form for getting todo details */}
                <form className="flex flex-col gap-5 border-4 ml-2 border-[#121212] p-20 rounded-2xl absolute top-20">
                    <input
                        type="text"
                        placeholder="Title"
                        className="py-2 px-4 w-56  rounded-xl  "
                        onChange={(e)=>{
                          setTodo({
                            ...todo,
                            id_todo : id,
                            title:e.target.value
                          })  
                        }}

                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="py-2 px-4 w-96  rounded-xl  "
                    />
                    <button className="py-2 px-4 w-44 border rounded-xl">
                        Add todo
                    </button>
                </form>
            </>
        );
    }

    function Card() {
        return (
            <>
                <div className="w-80 h-72 border-4 ml-2 border-[#121212] p-5 rounded-2xl flex flex-col gap-10 mb-3">
                    <h2 className="text-[#fafafa] text-2xl ">Title</h2>
                    <p className="text-[#fafafa] text-md ">Description</p>
                </div>
            </>
        );
    }
    function TodoList() {
        return (
            <>
                <div className="flex flex-col gap-10 pt-20">
                    <input
                        type="text"
                        className="py-2 px-2 w-64 rounded-xl ml-2.5 "
                        placeholder="🔍 Search for todos ... "
                    />
                    <div className="w-[60vw] flex flex-wrap gap-5 ">
                        <Card />
                    </div>
                </div>
            </>
        );
    }

    function MainLayout() {
        return (
            <>
                <div className="flex gap-20 relative">
                    <div className="w-[30vw] min-h-[50vh] flex justify-start items-center">
                        <Form />
                    </div>
                    <div>
                        <TodoList />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <RecoilRoot>
                <MainLayout />
            </RecoilRoot>
        </>
    );
}
export default App;
