"use client";
import "/styles/globals.css";
import { useAuthActions } from "@/contexts/LoginContext/context";
import { useEffect, useState } from "react";
import { useSocket } from "@/contexts/SocketContext";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { socket } = useSocket();
   const [notifications, setNotifications] = useState<string[]>([]);

   const { checkAuth } = useAuthActions();

   useEffect(() => {
      checkAuth();
   }, []);
   useEffect(() => {
      if (socket) {
         socket.on("alert", (message: any) => {
            console.log("asdasdasd");
            setNotifications(prevNotifications => [
               ...prevNotifications,
               message,
            ]);
         });
      }

      return () => {
         socket?.off("alert");
      };
   }, [socket]);
   return <>{children}</>;
}
