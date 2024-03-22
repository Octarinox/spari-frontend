"use client";

import SubjectList from "@/components/Subject/SubjectList";

export default function SubjectsLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className={"flex flex-row h-full"} style={{ height: "100vh" }}>
         <SubjectList />
         {children}
      </div>
   );
}
