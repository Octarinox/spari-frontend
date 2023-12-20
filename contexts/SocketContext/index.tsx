// SocketContext.ts
import { createContext, ReactNode, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";

interface SocketContextProps {
   children: ReactNode;
}

interface SocketContextValue {
   socket: Socket;
}

const SocketContext = createContext<SocketContextValue | undefined>(undefined);

const SOCKET_SERVER_URL = "https://octarinox.tech/api/popup";

export const SocketProvider: React.FC<SocketContextProps> = ({ children }) => {
   const socket = io(SOCKET_SERVER_URL, {
      withCredentials: true,
   });

   useEffect(() => {
      return () => {
         socket.disconnect();
      };
   }, []);

   const value: SocketContextValue = {
      socket,
   };

   return (
      <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
   );
};

export const useSocket = (): SocketContextValue => {
   const context = useContext(SocketContext);
   if (!context) {
      throw new Error("useSocket must be used within a SocketProvider");
   }
   return context;
};
