import "/styles/globals.css";
import NavBar from "@/components/Navbar";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <main className={"flex flex-col items-center"}>
         <NavBar />
         {children}
      </main>
   );
}
