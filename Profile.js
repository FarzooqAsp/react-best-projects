import React, { useContext } from 'react'
import Usercontext from '../Context/UserContext'
function Profile(){
    const {User} = useContext(Usercontext)
    if(!User){
        return <div>Please Login</div>
    }
    return <div>Welcome {User.Username}</div>
}
export default Profile