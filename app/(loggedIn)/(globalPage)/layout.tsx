import "/styles/globals.css";
import NavBar from "@/components/Navbar";

export default function LoggedInRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <main>
         <NavBar />
         {children}
      </main>
   );
}