import React, { useState } from "react";
import Game from "../app/game";
import { Wind } from "@phosphor-icons/react";
import { Window, MessageList, MessageInput } from "stream-chat-react";
import "../app/Chat.css";
function GameDriverSingle({singlePlayer}) {
    singlePlayer = true;
    return (
        <div className="gameContainer">
            <Game enableBot={singlePlayer}/>
            {/*exit game*/}
        </div>
    );
}

export default GameDriverSingle;