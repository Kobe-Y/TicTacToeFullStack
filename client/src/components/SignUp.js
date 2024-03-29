"use client"; //this is a client component
import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp({setIsAuth}) {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const signUp = () => {
        Axios.post("http://localhost:3001/signup", user).then(res => {
            const {token, username, hashedPass, userId} = res.data;
            cookies.set("token", token);
            cookies.set("username", username);
            cookies.set("hashedPass", hashedPass);
            cookies.set("userId", userId);
            setIsAuth(true);
        });
    }
    return (
        <div className="signup">
            <label>SignUp</label>
            <input 
                placeholder="Username" 
                onChange={(event)=> {
                    setUser({...user,  username: event.target.value});
                }}
            />
            <input 
                placeholder="Password" 
                type="password"
                onChange={(event)=> {
                    setUser({...user, password: event.target.value});
                }}
            />
            <button onClick={signUp}> Sign Up </button>
        </div>
    );
}

export default SignUp;
