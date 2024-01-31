//import "./globals.css";
"use client"; //this is a client component

import Login from "../components/Login";
import SignUp from "../components/SignUp";
import {StreamChat} from "stream-chat";
import Cookies from "universal-cookie";
import { useState } from 'react';
import TicTacToe from "./game.tsx";

function App() {
    console.log("HERE");
    const api_key = "zs4xxgfzmt7p";
    const cookies = new Cookies();
    const token = cookies.get("token");
    const client = StreamChat.getInstance(api_key);
    const [isAuth, setIsAuth] = useState(false);
    if(token) {
        client.connectUser({
            id: cookies.get("userId"),
            name: cookies.get("username"),
            hashedPass: cookies.get("hashedPass"),
        },
        token
        ).then((user) => {
            setIsAuth(true);
            console.log(user);
        });
    }
    const logOut = () => {
        cookies.remove("token");
        cookies.remove("userId");
        cookies.remove("hashedPass");
        cookies.remove("username");
        client.disconnectUser();
        setIsAuth(false);
    };
    return (
        <div className="App">
            {isAuth ? (
                <div>
            <button onClick={logOut}>Logout</button>
            <TicTacToe/>
            </div>
            ) : (
                <div className="signup/login">
                    <SignUp setIsAuth={setIsAuth}/>
                    <Login setIsAuth={setIsAuth}/>
                </div>
            )}   
        </div>
    );
}

export default App;