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
      socket.on("notification", (message: string) => {
         console.log("asdasdasd");
         setNotifications(prevNotifications => [...prevNotifications, message]);
      });

      return () => {
         socket.off("notification");
      };
   }, [socket]);
   return <>{children}</>;
}
