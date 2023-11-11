"use client";
import Sidebar from "@/components/Sidebar";
import "/styles/globals.css";
import {settingsSidebarItems} from '@/constants/settingsSidebarItems';

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className={"flex"}>
         <Sidebar menu={settingsSidebarItems} />
         {children}
      </div>
   );
}
