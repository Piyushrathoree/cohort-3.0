    import { useState ,useEffect, useMemo} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [num, setNum] = useState(0);
    // const [sum, setSum] = useState(0)

    // function sumOfNum(num) {
    //     let sum = 0;
    //     for (let i = 1; i <= num; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }
    // useEffect(() => {
    //     setSum(sumOfNum(num))
    // })
    //here i can also use useMemo hook for performance optimization and remove the extra re render 
    // all i need is to save a loop in the usemem hook with a variable and the i can use the variable it self instead of the function and the third usestate variable
    // memo is also used to save the value of the variable and only re render when the value of the variable/dependency  is changed
    let count =useMemo(()=>{
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    },[num])

    
   
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
                    the sum of the number from 1 to inputed value is :{count}
                    
                </div>
                <button onClick={() => setCounter(counter + 1)}>
                    Increment {counter}
                </button>
            </div>
        </>
    );
}

export default App;
