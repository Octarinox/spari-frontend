"use client";
import "/styles/globals.css";
import NavBar from "@/components/Navbar";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import useUserFetcher from "@/shared/hooks/useUserFetch";
import { useAuthState } from "@/contexts/LoginContext/context";
import { useBranchState } from "@/contexts/BranchesContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   useBranchFetcher();
   useUserFetcher();
   const router = useRouter();
   const { role } = useAuthState();
   const { data } = useBranchState();
   useEffect(() => {
      console.log();
   }, [router, role, data]);
   return (
      <main>
         <NavBar />
         {children}
      </main>
   );
}
