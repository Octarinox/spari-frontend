"use client";
import { createContext, ReactNode, useContext, useMemo } from "react";
import io, { Socket } from "socket.io-client";

interface SocketContextProps {
   children: ReactNode;
}

interface SocketContextValue {
   socket: Socket;
}

const SocketContext = createContext<SocketContextValue | any>(undefined);

const SOCKET_SERVER_URL = "https://octarinox.tech/api/popup";

export const SocketProvider: React.FC<SocketContextProps> = ({ children }) => {
   const socket = useMemo(() => {
      if (typeof window !== "undefined") {
         const token = localStorage?.getItem("jwtToken");
         const config = token
            ? {
                 withCredentials: true,
                 extraHeaders: {
                    jwt: token || "",
                 },
              }
            : {
                 withCredentials: true,
              };
         return io(SOCKET_SERVER_URL, config);
      }
   }, []);

   const value = useMemo(() => ({ actions: { socket } }), [socket]);
   return (
      <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
   );
};

export const useSocket = () => {
   const { actions } = useContext(SocketContext);
   if (!actions) {
      throw new Error("useSocket must be used within a SocketProvider");
   }
   return actions;
};
