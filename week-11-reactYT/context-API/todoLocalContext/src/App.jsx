import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { ChevronDown } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { PencilRuler } from "lucide-react";
import { motion } from "framer-motion";
function handleSubmit(e) {
    e.preventDefault();
}

function TodoCard({ title, description }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleOnClick(e) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    return (
        <Card
            className={`w-[23vw] px-3 rounded-md bg-transparent transition-all duration-500 min-h-[18vh] flex flex-col gap-3 text-white justify-between ${
                isExpanded ? "h-auto" : ""
            }`}
        >
            <CardHeader className={"flex gap-3 justify-between items-center"}>
                <h2 className="text-xl">{title}</h2>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className={"bg-transparent"}
                                    onClick={handleOnClick}
                                >
                                    <ChevronDown
                                        className={`size-5 transition-transform ${
                                            isExpanded ? "rotate-180" : ""
                                        }`}
                                    />
                                </Button>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className={"bg-white text-black"}>
                            <p>Expand</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardHeader>

            <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: isExpanded ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <motion.div
                    className="text-md text-gray-300 mx-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{
                        duration: 0.3,
                        delay: isExpanded ? 0.2 : 0,
                        ease: isExpanded ? "easeIn" : "easeOut",
                    }}
                >
                    <div>{description}</div>
                </motion.div>
            </motion.div>

            <CardFooter className={"flex gap-3"}>
                <Button variant="secondary">Edit</Button>
                <Button variant="destructive">Delete</Button>
            </CardFooter>
        </Card>
    );
}

function App() {
    const [todos, setTodos] = React.useState([
        {
            id: 1,
            title: "Project Setup",
            description:
                "Initialize React project with Vite",
            status: "pending",
        },
        {
            id: 2,
            title: "Context API",
            description: "Implement Context API for state management",
            status: "in-progress",
        },
        {
            id: 3,
            title: "UI Components",
            description: "Create reusable UI components",
            status: "pending",
        },
        {
            id: 4,
            title: "API Integration",
            description: "Connect with backend API endpoints",
            status: "pending",
        },
        {
            id: 5,
            title: "Testing",
            description: "Write unit and integration tests",
            status: "pending",
        },
        {
            id: 6,
            title: "Styling",
            description: "Implement Tailwind CSS for styling",
            status: "completed",
        },
        {
            id: 7,
            title: "Deployment",
            description: "Set up production deployment pipeline",
            status: "pending",
        },
        {
            id: 8,
            title: "Documentation",
            description: "Write project documentation",
            status: "pending",
        },
        {
            id: 9,
            title: "Code Review",
            description: "Conduct peer code reviews",
            status: "pending",
        },
        {
            id: 10,
            title: "Sprint Planning",
            description: "Plan tasks for next sprint",
            status: "pending",
        },
    ]);

    return (
        <>
            <div className="bg-primary  min-h-screen  flex  gap-3 flex-col w-screen overflow-hidden">
                <div className="border h-52 max-w-[30vw] rounded-md p-12  flex flex-col gap-5 m-10">
                    <h1 className="text-3xl text-white relative">
                        Create Todo{" "}
                        <PencilRuler className="absolute top-2 left-44" />
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex gap-3 justify-center items-center"
                    >
                        <Input
                            className={
                                "w-96 text-white  border border-gray-500 focus:shadow-md focus:shadow-gray-500"
                            }
                            placeholder={"Enter the todo"}
                        />
                        <Button
                            className={
                                "bg-[#ffffffbe]   hover:bg-transparent hover:border-gray-500 hover:shadow-md hover:shadow-gray-500  hover:border text-black  hover:text-white w-20"
                            }
                        >
                            {" "}
                            Add{" "}
                        </Button>
                    </form>
                </div>
                <div className="flex gap-3 w-screen ml-10 flex-wrap items-start ">
                    {todos.map((todo) => (
                        <TodoCard
                            key={todo.id}
                            title={todo.title}
                            description={todo.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
