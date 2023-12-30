"use client";
import Sidebar from "@/components/UI/Sidebar";
import "/styles/globals.css";
import { settingsSidebarItems } from "@/shared/constants/settingsSidebarItems";
import { useAuthState } from "@/contexts/LoginContext/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Error } from "@/components/UI/Error";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { email, role } = useAuthState();
   const router = useRouter();
   useEffect(() => {
      if (role === "manager") {
         router.push("/");
      }
   }, []);

   return (
      <>
         {role !== "manager" || !role ? (
            <div style={{ display: "flex", height: "100vh" }}>
               <Sidebar menu={settingsSidebarItems} />
               <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
            </div>
         ) : (
            <Error />
         )}
      </>
   );
}
