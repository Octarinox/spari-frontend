"use client";
import Sidebar from "@/components/UI Components/Sidebar";
import "/styles/globals.css";
import { sidebarItems } from "@/components/Analytics/constants/sidebarItems";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className={"flex"}>
         <Sidebar menu={sidebarItems} />
         {children}
      </div>
   );
}
