//https://getstream.io/try-for-free/success/
import express from "express";
import cors from "cors";
import {StreamChat} from "stream-chat";
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config({path: "../.env"});
//require('dotenv').config()
//TODO use environment variables on the api keys
const app = express();
app.use(cors());

app.use(cors());
app.use(express.json());
const api_key = process.env.REACT_APP_API_KEY;
const api_secret = process.env.REACT_APP_API_SECRET;
const serverClient = StreamChat.getInstance(api_key, api_secret); //instance of stream chat


app.post("/signup", async (req, res) => {
    try {
        const {username, password} = req.body; //get request
        const userId = uuidv4(); //create random user id
        const hashedPass = await bcrypt.hash(password, 10); //create hash pass
        const token = serverClient.createToken(userId); //token
        res.json({token, username, hashedPass, userId}); //response
    } catch(error) {
        res.json(error);
    }
});
app.post("/login", async (req, res)=>{
    try {
        const {username, password} = req.body;
        const { users } = await serverClient.queryUsers({name: username});
        //console.log(users); //users is always empty. idk why
        if(users.length === 0) return res.json({message: "User not found"});
        const token = serverClient.createToken(users[0].id);
        const passwordMatch = await bcrypt.compare(password, users[0].hashedPass); //check that pass is right
        if(passwordMatch) {
            res.json({
                token, 
                username,//: users[0].name,
                userId: users[0].id,
            })
        }
    } catch(error) {
        res.json(error);
    }
});
app.listen(3001, () => {
    console.log("Listening on 3001");
});


