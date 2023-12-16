"use client";
import "/styles/globals.css";
import Sidebar from "@/components/UI Components/Sidebar";
import { branchPageSidebarItems } from "@/local-constants/branchPageSidebarItems";
import { sideBarStyle } from "@/local-constants/styles/branchPageSidebar";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import useUserFetcher from "@/shared/hooks/useUserFetch";

export default function BranchPageLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   useBranchFetcher();
   useUserFetcher();
   return (
      <main className={"flex flex-row"}>
         <Sidebar menu={branchPageSidebarItems} sideBarStyle={sideBarStyle} />
         {children}
      </main>
   );
}
