// SocketContext.ts
import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useMemo,
   useState,
} from "react";
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
   const [socket, setSocket] = useState<Socket | null>(null);

   const memoizedConnect = useMemo(() => {
      return () => {
         const newSocket = io(SOCKET_SERVER_URL, {
            withCredentials: true,
            // extraHeaders: {
            //    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2Y4MGM4MmEyYWJiMzdhOTY1Zjc5NCIsImlhdCI6MTcwMzAyMjYwMiwiZXhwIjoxNzAzMTA5MDAyfQ.82EUswqAQxpLTcEXp3dtxxu5XjdVThKF1yHwLeBmzhk",
            // },
         });
         setSocket(newSocket);

         return () => {
            newSocket.disconnect();
         };
      };
   }, []);
   useEffect(() => {
      memoizedConnect();
   }, [memoizedConnect]);
   const value: SocketContextValue = {
      socket: socket!,
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
