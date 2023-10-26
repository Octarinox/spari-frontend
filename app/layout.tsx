import "@/styles/globals.css";
import { Open_Sans, Noto_Serif_Georgian } from "next/font/google";
import { GlobalContextProvider } from "@/components/GlobalContext";
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
            <GlobalContextProvider>{children}</GlobalContextProvider>
         </body>
      </html>
   );
}
