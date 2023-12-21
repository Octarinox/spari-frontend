"use client";
import "/styles/globals.css";
import { useEffect, useState } from "react";
import { useSocket } from "@/contexts/SocketContext";
import { renderSpecificToast } from "@/utils/renderSpecificToast";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { socket } = useSocket();
   const [notification, setNotification] = useState<any>(null);

   useEffect(() => {
      const handleAlert = (message: any) => {
         setNotification(message);
      };

      if (socket) {
         socket.on("alert", handleAlert);
      }

      return () => {
         setNotification(null);
         socket?.off("alert", handleAlert);
      };
   }, [socket]);
   renderSpecificToast(notification);
   return <>{children}</>;
}
