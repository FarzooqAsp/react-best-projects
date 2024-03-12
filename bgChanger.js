import React, { useState } from "react";
function BgChanger(){
    let [color,setcolor] = useState('olive')    
    // let click = (color)=>{
    //     document.body.style.backgroundColor = color
    // }
    
    return(
        <div style={{backgroundColor:color}}>
            <div  className="justify-center bg-slate-500 mt-2 max-w-xl mx-auto px-4 py-1 rounded-full text-center">
                <button className="px-4 bg-red-700 py-1 rounded-full m-1 font-bold text-lg"
                style={{backgroundColor:"red"}} onClick={()=>(setcolor("red"))}>red</button>
                <button style={{backgroundColor:"green"}} onClick={()=>(setcolor("green"))} className="px-4 bg-green-700 py-1 rounded-full m-1 font-bold text-lg">green</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>(setcolor("blue"))} className="px-4 bg-blue-700 py-1 rounded-full m-1 font-bold text-lg">blue</button>
                <button style={{backgroundColor:"purple"}} onClick={()=>(setcolor("purple"))} className="px-4 bg-purple-700 py-1 rounded-full m-1 font-bold text-lg outline-none">purple</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>(setcolor("orange"))} className="px-4 bg-orange-700 py-1 rounded-full m-1 font-bold text-lg">orange</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>(setcolor("pink"))} className="px-4 bg-pink-700 py-1 rounded-full m-1 font-bold text-lg">pink</button>
            </div>
        </div>
    )
}
export default BgChanger