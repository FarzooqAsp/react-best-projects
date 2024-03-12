import React, { useState,useCallback,useEffect,useRef } from "react";
function PassGen(){
    let passref = useRef(null)
    let [length,setlength] = useState(8)
    let [ischar,setischar] = useState(false)
    let [isnum,setisnum] = useState(false)
    let [password,setpassword] = useState("")
    let awais = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz";
        if(ischar){
            str+="!~#$_@%,.?|-?"
        }
        if(isnum){
            str+="023455134"
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random()*str.length +1)
            pass += str.charAt(char);
        }
        setpassword(pass)
    },[length,ischar,isnum,setpassword])
    useEffect(()=>{
        awais()
    }, [length,ischar,isnum,awais])
    let clipboardcopy = ()=>{
        passref.current?.select();
        // passref.current?.setSelectionRange(0,3);
        window.navigator.clipboard.writeText(password)
    }
    return(
        <>
        <div className="bg-slate-500 mt-4 w-full max-w-lg mx-auto rounded-lg px-4 py-1 text-lg font-bold text-white text-center">
            <div>Password Generator</div>
            <div className="flex ">
                <input ref={passref} type="text" placeholder="Password" value={password} readOnly className="rounded-l-full w-full px-8 outline-none text-black" />
                <button onClick={clipboardcopy} className="bg-blue-800 text-sm font-samibold px-2 py-2 rounded-r-full">Copy</button>
            </div>
            <div className="flex text-sm gap-x-2 py-4 w-full outline-none">
                <input type="range" min={8} max={20} onChange={(e)=>{setlength(e.target.value)}}></input>
                <label >length:{length}</label>
                <input type="checkbox" onChange={()=>{setisnum((prev)=>!prev)}}></input>
                <label htmlFor="numberInput">Number</label>
                <input type="checkbox" onChange={()=>{setischar((prev)=>!prev)}}></input>
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
        </>
    )
}
export default PassGen