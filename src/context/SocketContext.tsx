import SocketIoClient from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import {v4 as UUIDv4} from "uuid";

const ws_server = "http://localhost:3001"

export const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(ws_server);

interface Props {
    children: React.ReactNode
}

export const SocketProvider : React.FC<Props> = ({children})=>{

    const navigate = useNavigate();

    const [user, setUser] = useState<Peer>();


    useEffect(()=>{

        const userId = UUIDv4();
        const newPeer = new Peer(userId);

        setUser(newPeer);

        const enterRoom = ({roomId}: {roomId: String})=>{
            navigate(`/room/${roomId}`);
        }

        socket.on("room-created", enterRoom);
    }, []);

    return (
        <SocketContext.Provider value={{socket, user}}>
            {children}
        </SocketContext.Provider>
    );
}