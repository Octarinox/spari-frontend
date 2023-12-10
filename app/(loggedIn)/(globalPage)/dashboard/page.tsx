"use client";
import Search from "@/components/Search";
import { useEffect } from "react";

import TableComponent from "@/components/UI Components/TableComponent";
import { useRouter } from "next/navigation";
import { useBranchActions, useBranchState } from "@/contexts/BranchesContext";

export default function IndexPage() {
   const { getBranches } = useBranchActions();
   const router = useRouter();
   const { data } = useBranchState();
   const allowedProperties = ["branchId", "address"];
   useEffect(() => {
      async function fetchData() {
         await getBranches();
      }

      fetchData();
   }, []);
   console.log(data);
   const handleClick = (row: any) => {
      console.log(row);
      router.push(`branch/${row.branchId}/analytics`);
   };
   return (
      <div className="p-4 md:p-10  w-full">
         <Search />
         <TableComponent
            allowedProperties={allowedProperties}
            data={data}
            handleClick={handleClick}
         />
      </div>
   );
}
