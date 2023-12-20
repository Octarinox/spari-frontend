"use client";
import "/styles/globals.css";
import NavBar from "@/components/Navbar";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import useUserFetcher from "@/shared/hooks/useUserFetch";
import { useEffect } from "react";
import { useAuthActions } from "@/contexts/LoginContext/context";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   useBranchFetcher();
   useUserFetcher();
   const { checkAuth } = useAuthActions();

   useEffect(() => {
      checkAuth();
   }, [checkAuth]);
   return (
      <main>
         <NavBar />
         {children}
      </main>
   );
}
