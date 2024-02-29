import React, { useState } from "react";
import Game from "../app/game";
import { Wind } from "@phosphor-icons/react";
import { Window, MessageList, MessageInput } from "stream-chat-react";
import "../app/Chat.css";

function GameDriver({channel, singlePlayer}) {
    if(!singlePlayer) {
        const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);

        channel.on("user.watching.start", (event) => {
            setPlayersJoined(event.watcher_count === 2)
        });
    
        if (!playersJoined) {
            return (<div> Waiting for other player to join...</div>);
        }
    }
    return (
        <div className="gameContainer">
            <Game enableBot={singlePlayer}/>
            <Window>
                <MessageList 
                disableDateSeparator
                closeReactionSelectorOnClick
                hideDeletedMessages
                messageActions={["react"]}/>
                <MessageInput 
                noFiles
                hideSendButton
                hasImagePicker={false}/>
            </Window>
            {/*exit game*/}
        </div>
    );
}

export default GameDriver;