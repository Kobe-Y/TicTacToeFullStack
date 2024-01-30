//import "./globals.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {StreamChat} from "stream-chat";
import Cookies from "universal-cookie";

function App() {
    console.log("HERE");
    const api_key = "zs4xxgfzmt7p";
    const cookies = new Cookies();
    const token = cookies.get("token");
    const client = StreamChat.getInstance(api_key);
    if(token) {
        client.connectUser({
            id: cookies.get("userId"),
            name: cookies.get("username"),
            hashedPass: cookies.get("hashedPass"),
        },
        token
        ).then((user) => {
            console.log(user);
        });
    }
    return (
        <div className="App">
            <SignUp/>
            <Login/>
        </div>
    );
}

export default App;