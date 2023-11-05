"use client";
import Sidebar from "@/components/Sidebar";
import "/styles/globals.css";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className={"flex"}>
         <Sidebar />
         {children}
      </div>
   );
}
