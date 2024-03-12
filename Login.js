import React, { useState, useContext } from 'react'
import Usercontext from '../Context/UserContext'
function Login(){
    const [Username,setUsername] = useState('')
    const [Password,setPassword] = useState('')
    const {setUser} = useContext(Usercontext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({Username, Password})  
    }
    return(
        <div>
            <h1>Login</h1>
            <input type='text' placeholder='User Name'
            value={Username} 
            onChange={(e)=>(setUsername(e.target.value))}/>
            <input type='text' placeholder='Password'
            value={Password}
            onChange={(e)=>(setPassword(e.target.value))} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login