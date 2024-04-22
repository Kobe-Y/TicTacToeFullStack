"use client"; //this is a client component
import "./globals.css"
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import JoinGame from "../components/JoinGame.js";
import {StreamChat} from "stream-chat";
import Cookies from "universal-cookie";
import { useState } from 'react';
import TicTacToe from "./game.tsx";
import {Chat} from "stream-chat-react";
import dotenv from "dotenv";
// dotenv.config({path: "../.env"});
// const test = process.env.REACT_APP_API_KEY;
// const api_key = process.env.REACT_APP_API_KEY;

function App() {
    const api_key = process.env.REACT_APP_API_KEY;
    //console.log(process.env);
    //const api_key = process.env.REACT_APP_API_KEY;
    // console.log("API KEY:", api_key);
    // console.log("TEST:", test);
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
                <Chat client={client}>
                    <div className="logOut">
                        <button onClick={logOut}>Logout</button>
                    </div>
                    <JoinGame/>
                </Chat>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="bg-white p-8 rounded shadow-md">
                    <div className="mb-4 bg-red-500">
                        <SignUp setIsAuth={setIsAuth} />
                    </div>
                    <div>
                        <Login setIsAuth={setIsAuth} />
                    </div>
                    </div>
              </div>
            )}   
        </div>
    );
}

export default App;
