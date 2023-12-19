"use client";
import "/styles/globals.css";
import NavBar from "@/components/Navbar";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import useUserFetcher from "@/shared/hooks/useUserFetch";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   useBranchFetcher();
   useUserFetcher();

   return (
      <main>
         <NavBar />
         {children}
      </main>
   );
}
