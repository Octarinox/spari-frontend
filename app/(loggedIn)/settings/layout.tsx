"use client";
import Sidebar from "@/components/Sidebar";
import "/styles/globals.css";
import { settingsSidebarItems } from "@/constants/settingsSidebarItems";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div style={{ display: "flex", height: "100vh" }}>
         <Sidebar menu={settingsSidebarItems} />
         <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
      </div>
   );
}
