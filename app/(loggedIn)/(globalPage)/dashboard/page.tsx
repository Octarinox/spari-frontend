"use client";
import Search from "@/components/Search";
import { useEffect } from "react";
import { useBranchActions, useBranchState } from "@/contexts/BranchesContext";
import TableComponent from "@/components/UI Components/TableComponent";
import { useRouter } from "next/navigation";

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
   const handleClick = (row: any) => {
      console.log(row);
      router.push(`branch/${row.branchId}`);
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
