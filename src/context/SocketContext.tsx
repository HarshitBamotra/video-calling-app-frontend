import SocketIoClient from "socket.io-client";

import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ws_server = "http://localhost:3001"

export const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(ws_server);

interface Props {
    children: React.ReactNode
}

export const SocketProvider : React.FC<Props> = ({children})=>{

    const navigate = useNavigate();
    useEffect(()=>{

        const enterRoom = ({roomId}: {roomId: String})=>{
            navigate(`/room/${roomId}`);
        }

        socket.on("room-created", enterRoom);
    }, []);

    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    );
}