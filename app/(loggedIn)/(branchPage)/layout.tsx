"use client";
import "/styles/globals.css";
import Sidebar from "@/components/UI Components/Sidebar";
import { branchPageSidebarItems } from "@/local-constants/branchPageSidebarItems";
import { sideBarStyle } from "@/local-constants/styles/branchPageSidebar";

export default function BranchPageLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <main className={"flex flex-row"}>
         <Sidebar menu={branchPageSidebarItems} sideBarStyle={sideBarStyle} />
         {children}
      </main>
   );
}
