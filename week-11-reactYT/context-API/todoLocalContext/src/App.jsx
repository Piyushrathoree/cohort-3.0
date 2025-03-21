import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import React from "react";

function App() {
  const [value, setValue] = React.useState("todo");
    return (
        <>
            <div className="bg-primary  min-h-screen  flex justify-center items-center gap-3">
                <Input className={'w-96 text-white border-transparent border border-gray-500 focus:shadow-md focus:shadow-gray-500'} placeholder={"Enter the todo"}/>  <Button className={"bg-[#ffffffbe]   hover:bg-transparent hover:border-gray-500 hover:shadow-md hover:shadow-gray-500  hover:border text-black  hover:text-white"} > Add  </Button>
            </div>
        </>
    );
}

export default App;
