"use client";
import "/styles/globals.css";
import * as React from "react";
import { useEffect } from "react";
import { useSocket } from "@/contexts/SocketContext";
import { renderSpecificToast } from "@/utils/renderSpecificToast";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { socket } = useSocket();
   console.log("AAAAA");
   useEffect(() => {
      const handleAlert = (message: any) => {
         renderSpecificToast(message);
      };

      if (socket) {
         socket.on("alert", handleAlert);
      }

      return () => {
         socket?.off("alert", handleAlert);
      };
   }, [socket]);
   return <>{children}</>;
}
