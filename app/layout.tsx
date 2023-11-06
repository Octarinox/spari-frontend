import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Noto_Serif_Georgian, Open_Sans } from "next/font/google";

import { AuthProvider } from "@/components/Login/cotnext";

const openSans = Open_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "700"],
});
const notoSerifGeorgian = Noto_Serif_Georgian({
   subsets: ["georgian"],
   weight: ["300", "400", "500"],
});
export default function LoggedOutRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${openSans.className} bg-indigo-50`}>
            <AuthProvider>{children}</AuthProvider>
         </body>
      </html>
   );
}
