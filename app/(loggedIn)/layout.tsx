"use client";
import "/styles/globals.css";
import { useAuthActions } from "@/contexts/LoginContext/context";
import { useEffect } from "react";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { checkAuth } = useAuthActions();
   useEffect(() => {
      checkAuth();
   }, []);
   return <>{children}</>;
}
