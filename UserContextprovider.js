import React, { useState } from 'react'
import Usercontext from './UserContext'
const UsercontextProvider = ({children})=>{
    const [User,setUser] = useState(null)
    return(
        <Usercontext.Provider value={{User,setUser}}>
            {children}
        </Usercontext.Provider>
    )
}
export default UsercontextProvider

