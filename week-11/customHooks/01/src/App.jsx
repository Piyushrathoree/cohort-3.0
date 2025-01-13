import "./App.css";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import React from "react";

const Counter = React.memo(({ count, increment }) => {
    console.log("Counter re-rendered");
    return <button onClick={increment}>count : {count}</button>;
});

const GithubData = React.memo(({ url }) => {
    console.log("GithubData re-rendered");
    const value = useFetch(url);
    return (
        <div>
            <h1>Github Name</h1>
            <h3>{value.name}</h3>
        </div>
    );
});

function App() {
    const { count, increment } = useCounter();
    return (
        <>
            <Counter count={count} increment={increment} />
            <GithubData url="https://api.github.com/users/Piyushrathoree" />
        </>
    );
}

export default App;
