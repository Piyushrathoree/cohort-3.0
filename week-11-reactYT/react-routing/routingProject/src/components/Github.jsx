import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData(); // Load data from the loader
    return (
        <div className="h-[50vh] w-screen bg-gray-200 flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center">Welcome to Github!</h1>
            <div className="flex justify-center items-center gap-40 w-1/2">
                <img
                    className="h-48 w-48 rounded-full"
                    src={data.avatar_url}
                    alt="Profile Pic"
                />
                <div className="w-[40vw]">
                    <h2 className="text-2xl  font-bold">{data.name}</h2>
                    <p> {data.bio} </p>
                    <a className="underline text-blue-500" href="https://github.com/Piyushrathoree">visit</a>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const GithubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Piyushrathoree");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};
