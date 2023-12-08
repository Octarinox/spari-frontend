"use client";
import Search from "@/components/Search";
import { useEffect } from "react";
import { useBranchActions, useBranchState } from "@/contexts/BranchesContext";
import TableComponent from "@/components/UI Components/TableComponent";

export default function IndexPage() {
   const { getBranches } = useBranchActions();
   const { data } = useBranchState();
   const allowedProperties = ["branchId", "address"];
   useEffect(() => {
      async function fetchData() {
         await getBranches();
      }

      fetchData();
   }, []);
   return (
      <div className="p-4 md:p-10 mx-autxo max-w-7xl w-full">
         <Search />
         <TableComponent allowedProperties={allowedProperties} data={data} />
      </div>
   );
}
