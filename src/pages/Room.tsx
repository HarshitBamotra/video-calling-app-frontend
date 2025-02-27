import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext} from "../context/SocketContext";
import UserPlayer from "../components/UserPlayer";


const Room : React.FC = ()=>{

    const {id} = useParams();
    const {socket, user, stream} = useContext(SocketContext);

    useEffect(()=>{
        if(user){
            socket.emit("joined-room", {roomId: id, peerId: user._id});
            console.log(`user ${user._id} joined room ${id}`);

            socket.on("get-users", (participants: string[])=>{
                console.log(participants);
            })
        }
        
    }, [user]);

    return (
        <div>
            Room: {id}
            <UserPlayer stream={stream}></UserPlayer>
        </div>
    )
}

export default Room;