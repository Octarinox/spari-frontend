"use client";
import "/styles/globals.css";
import { useEffect, useState } from "react";
import { useSocket } from "@/contexts/SocketContext";
import { Toast } from "@/components/UI Components/Toast";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { socket } = useSocket();
   const [notification, setNotification] = useState<any>(null);
   // {
   //    branchId: "6574d6600d098b0d56f268e5",
   //        data: {
   //    subject: "nikusha",
   //        accuracy: "98.64382",
   //        timestamp: "2023-11-20T19:39:31.636Z",
   // },
   //    type: "face",
   // }
   useEffect(() => {
      if (socket) {
         socket.on("alert", (message: any) => {
            console.log("aaaaa");
            setNotification(message);
         });
      }

      return () => {
         socket?.off("alert");
      };
   }, [socket]);
   return (
      <>
         {<Toast data={notification} />}
         {children}
      </>
   );
}
