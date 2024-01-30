"use client"; //this is a client component
import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const cookies = new Cookies();
    const login = () => {
        Axios.post("http://localhost:3001/login", 
        {username, 
        password}
        ).then(res => {
            const {token, username, hashedPass, userId} = res.data;
            cookies.set("token", token);
            cookies.set("username", username);
            cookies.set("hashedPass", hashedPass);
            cookies.set("userId", userId);
        });
    }
    return (
        <div className="login">
            <label>Login</label>
            <input 
                placeHolder="Username" 
                onChange={(event)=> {
                    setUsername(event.target.value);
                }}
            />
            <input 
                placeHolder="Password" 
                type="password"
                onChange={(event)=> {
                    setPassword(event.target.value);
                }}
            />
            <button onClick={login}> Login </button>
        </div>
    );
}


export default Login;
