import { useState } from "react";
function App() {
    const [count, setCount] = useState(10);

    const addCount = () => {
      if(count < 20)
        setCount(count + 1);
    };
    const removeCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <h1>React Counter </h1>
            <button onClick={addCount}>increase counter</button>
            <button onClick={removeCount}>decrease counter</button>
            <p>Current count: {count}</p>
        </>
    );
}

export default App;
