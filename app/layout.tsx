"use client";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Noto_Serif_Georgian, Open_Sans } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AuthProvider } from "@/contexts/LoginContext/context";
import * as React from "react";
import { UsersProvider } from "@/contexts/UsersContext";
import { BranchProvider } from "@/contexts/BranchesContext";
import { SocketProvider } from "@/contexts/SocketContext";

const openSans = Open_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "700"],
});
const notoSerifGeorgian = Noto_Serif_Georgian({
   subsets: ["georgian"],
   weight: ["300", "400", "500"],
});

export default function LoggedOutRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${openSans.className} bg-indigo-50`}>
            <AuthProvider>
               <SocketProvider>
                  {" "}
                  <BranchProvider>
                     <UsersProvider>{children}</UsersProvider>
                  </BranchProvider>
               </SocketProvider>
            </AuthProvider>
         </body>
      </html>
   );
}
