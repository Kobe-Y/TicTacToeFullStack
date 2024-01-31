import React, {useState} from "react";
import { useChatContext, Channel } from "stream-chat-react";
import GameDriver from "./GameDriver";

function JoinGame() {
    const [rivalUsername, setRivalUsername] = useState("");
    const {client} = useChatContext();
    const [channel, setChannel] = useState(null);
    const [singlePlayer, setSinglePlayer] = useState(false);
    const createChannel = async () => {
        const response = await client.queryUsers({name: {$eq : rivalUsername}});
        if(response.users.length==0){alert("User not found")}; //does this need return?
        const newChannel = await client.channel("messaging", {
            members: [client.userID, response.users[0].id],
        });
        await newChannel.watch();
        setChannel(newChannel);
    };
    return( 
        <>
        {channel ? ( //IF CHANNEL IS TRUE
            <Channel channel = {channel}>
                <GameDriver channel = {channel}/>
            </Channel>
        )
        : ( //else if
            singlePlayer ? (
            <>
                <GameDriver singlePlayer={singlePlayer}/>
            </>
            )
         
         : ( //else
                <>
                <div className="joinGame">
                    <h4>Create Game </h4>
                    <input placeholder="Username of rival..." onChange={(event) => {
                        setRivalUsername(event.target.value)
                        }}
                    />
                    <button onClick={createChannel}>Join/Start Game</button>
                </div>
                <div className="botButton"> 
                        <button onClick={ ()=> setSinglePlayer(true)}>Play Bot?</button>
                </div>
                </>
                )
            ) 
        }

        </>
    );
}
export default JoinGame;