"use client";
import "/styles/globals.css";
import Sidebar from "@/components/UI/Sidebar";
import { branchPageSidebarItems } from "@/local-constants/branchPageSidebarItems";
import { sideBarStyle } from "@/local-constants/styles/branchPageSidebar";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import useUserFetcher from "@/shared/hooks/useUserFetch";
import { useAuthActions } from "@/contexts/LoginContext/context";
import { useEffect } from "react";

export default function BranchPageLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   useBranchFetcher();
   useUserFetcher();
   const { checkAuth } = useAuthActions();
   useEffect(() => {
      checkAuth();
   }, []);
   return (
      <main className={"flex flex-row"}>
         <Sidebar menu={branchPageSidebarItems} sideBarStyle={sideBarStyle} />
         {children}
      </main>
   );
}
