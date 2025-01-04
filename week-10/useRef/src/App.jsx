import { useRef } from "react";

import "./App.css";

function App() {
    const nameRef = useRef();
    const passRef = useRef();
    function handleClick() {
        if (nameRef.current.value === "") {
            alert("Please Enter your Name");
            nameRef.current.focus();
        } else if (passRef.current.value === "") {
            alert("Please Enter the Password");
            passRef.current.focus();
        } else {
            alert("You have successfully signed up");
            nameRef.current.value = "";
        }
    }
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="text-2xl">Sign up</div>
                <input type="text" ref={nameRef} className="py-2 px-2 rounded-lg" />
                <input
                    type="password"
                    ref={passRef}
                    className="py-2  rounded-lg"
                />
                <button className="outline-none " onClick={handleClick}>
                    Submit
                </button>
            </div>
        </>
    );
}

export default App;
