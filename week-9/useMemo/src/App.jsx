import { useState ,useEffect} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const [sum, setSum] = useState(0)

    function sumOfNum(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
    useEffect(() => {
        setSum(sumOfNum(num))
    })
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen w-screen gap-5">
                <input
                    type="number"
                    value={num}
                    className="py-2 rounded-2xl pl-3"
                    onChange={(e) => setNum(e.target.value)}
                />

                <div>
                    the sum of the number from 1 to inputed value is :{sum}
                    
                </div>
                <button onClick={() => setCount(count + 1)}>
                    Increment {count}
                </button>
            </div>
        </>
    );
}

export default App;
