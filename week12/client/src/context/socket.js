import React, { useContext } from "react";
import socketio from "socket.io-client";

export const socket = socketio.connect("http://localhost:8000");
export const SocketContext = React.createContext();
export const useSocket = () => useContext(SocketContext);
