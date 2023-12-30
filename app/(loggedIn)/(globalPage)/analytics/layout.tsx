"use client";
import Sidebar from "@/components/UI/Sidebar";
import "/styles/globals.css";
import { sidebarItems } from "@/components/Analytics/constants/sidebarItems";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className={"flex flex-row"}>
         <Sidebar menu={sidebarItems} />
         {children}
      </div>
   );
}
