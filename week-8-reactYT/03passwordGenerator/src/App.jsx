import { useState, useCallback, useEffect ,useRef } from "react";


function App() {
    const [range, setRange] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null)


    //useCallback is used to store this function in cache memory so , whenever i wanted to use this function i can use the function only that much i needed and leaves the rest
    const generatePassword = useCallback(() => {
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let pass = "";
        if (numberAllowed) {
            letters += "0123456789";
        }
        if (characterAllowed) {
            letters += "!@#$%^&*()_+=-{}[]|:;<>,.?/~";
        }
        for (let i = 1; i <= range; i++) {
            let char = Math.floor(Math.random() * letters.length + 1);
            pass += letters.charAt(char);
        }
        setPassword(pass);
    }, [range, numberAllowed, characterAllowed, setPassword]);

    //use effect is use for calling fuction in react
    useEffect(() => {
        generatePassword();
    }, [range, numberAllowed, characterAllowed, generatePassword]);

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    },[password]);

    return (
        <>
            <div className="h-screen w-screen bg-black flex justify-center items-center ">
                <div className="h-[30%] w-[45%] bg-gray-700 rounded-3xl flex justify-evenly items-center flex-col">
                    <h2 className="text-3xl text-white">Password Generator</h2>
                    <div className="w-[70%] h-16 flex justify-center ">
                        <input
                            type="text"
                            className="w-[65%] h-16 rounded-l-lg outline-none pl-5 text-xl text-red-400 font-medium"
                            readOnly
                            value={password}
                            ref={passwordRef}
                        />
                        <button
                            className="w-[20%] bg-blue-500 rounded-r-lg text-xl hover:bg-blue-600 font-medium"
                            onClick={copyPassword}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-12 w-full h-16 -mt-5 ">
                        <div className="flex gap-3 text-white ">
                            <input
                                type="range"
                                value={range}
                                onChange={(e) => {
                                    setRange(e.target.value);
                                }}
                                min={6}
                                max={25}
                            />
                            <p>length : {range}</p>
                        </div>
                        <div className="flex gap-3 text-white">
                            <input
                                type="checkbox"
                                value={numberAllowed}
                                onChange={() => {
                                    setNumberAllowed((prev) => !prev);
                                }}
                            />
                            <p>Numbers</p>
                        </div>
                        <div className="flex gap-3 text-white">
                            <input
                                type="checkbox"
                                value={characterAllowed}
                                onChange={() => {
                                    setCharacterAllowed((prev) => !prev);
                                }}
                            />
                            <p>Special characters</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
