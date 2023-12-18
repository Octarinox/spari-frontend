"use client";
import "/styles/globals.css";
import NavBar from "@/components/Navbar";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import useUserFetcher from "@/shared/hooks/useUserFetch";
import { useAuthState } from "@/contexts/LoginContext/context";
import { useBranchState } from "@/contexts/BranchesContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
   console.log(role, data);
   useEffect(() => {
      console.log("hi");
      if (role === "manager" && data) {
         router.push(`/branch/${data?.[0]?.branchId}/analytics`);
      }
   }, [router, role, data]);
   return (
      <main>
         <NavBar />
         {children}
      </main>
   );
}
