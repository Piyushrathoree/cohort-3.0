import { useState } from "react";

function App() {
    const [color, setColor] = useState("white");

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    return (
        <div
            className="h-screen w-screen flex items-center justify-between py-20 flex-col "
            style={{ backgroundColor: color }}
        >
            <div className="text-[4rem] font-medium text-[#242424] ">
                Color Changing Board
            </div>
            <div className="w-[80%] bg-[#242424] h-28 rounded-3xl flex items-center gap-4 ">
                <div className="w-[10%] h-16 bg-white rounded-2xl ml-3" onClick={()=>setColor("white")}></div>
                <div className="w-[10%] h-16 bg-purple-400 rounded-2xl" onClick={()=>setColor("purple")}></div>
                <div className="w-[10%] h-16 bg-red-700 rounded-2xl " onClick={()=>setColor("red")}></div>
                <div className="w-[10%] h-16 bg-orange-600 rounded-2xl " onClick={()=>setColor("orange")}></div>
                <div className="w-[10%] h-16 bg-blue-800 rounded-2xl " onClick={()=>setColor("blue")}></div>
                <div className="w-[10%] h-16 bg-green-400 rounded-2xl " onClick={()=>setColor("green")}></div>
                <div className="w-[10%] h-16 bg-yellow-400 rounded-2xl " onClick={()=>setColor("yellow")}></div>
                <div className="w-[10%] h-16 bg-sky-400 rounded-2xl " onClick={()=>setColor("skyblue")}></div>
                <div className="w-[10%] h-16 bg-white rounded-2xl flex items-center justify-center text-2xl font-medium hover:text-gray-600" onClick={()=>setColor(getRandomColor())} >
                    Random
                </div>
            </div>
        </div>
    );
}

export default App;
