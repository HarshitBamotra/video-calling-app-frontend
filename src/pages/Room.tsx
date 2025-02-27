import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext} from "../context/SocketContext";


const Room : React.FC = ()=>{

    const {id} = useParams();
    const {socket, user} = useContext(SocketContext);

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
        </div>
    )
}

export default Room;