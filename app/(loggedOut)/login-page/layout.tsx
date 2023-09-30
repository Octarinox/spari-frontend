import "/styles/globals.css";

export default function LoggedOutRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className="bg-indigo-50">{children}</body>
      </html>
   );
}
