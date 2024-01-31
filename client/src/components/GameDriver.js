import React, { useState } from "react";
import Game from "../app/game";

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
            {/*chat*/}
            {/*exit game*/}
        </div>
    );
}

export default GameDriver;