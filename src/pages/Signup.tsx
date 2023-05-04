import React, { useState,useEffect } from 'react'

const Signup = () =>{
    const [stored,setStored]=useState("");
    const [username,setUsername]=useState("");

    useEffect(() => {
       setUsername(localStorage.getItem("username") || "");
    }, []);

    const login=()=>{
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("username",username);
        window.location.href="/";
    }

return (<>
{stored}
    <div>
        <label htmlFor="">Username</label>
        <input id='' type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div>
        <label htmlFor="">Password</label>
        <input id='' type="password" />
    </div>
    <div>
        <label htmlFor="">Confirm Password</label>
        <input id='' type="password" />
    </div>
    <button onClick={()=>login()}>Sign up</button>
</>)}

export default Signup