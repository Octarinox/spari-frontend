"use client";
import TableComponent from "@/components/UI/TableComponent";
import { useRouter } from "next/navigation";
import { useBranchState } from "@/contexts/BranchesContext";
import FilterComponent from "@/components/UI/FilterComponent";
import React, { useEffect, useState } from "react";

const options = [
   {
      value: "branchId",
      label: "Branch ID",
   },
   {
      value: "address",
      label: "Address",
   },
];
export default function IndexPage() {
   const router = useRouter();
   const { data } = useBranchState();
   const [filteredData, setFilteredData] = useState<any>(data);
   const allowedProperties = ["branchId", "address"];
   const handleClick = (row: any) => {
      router.push(`branch/${row.branchId}/queue-analytics`);
   };
   useEffect(() => {
      setFilteredData(data);
   }, [data]);
   const handleFilterChange = ({ selectedOption, searchValue }: any) => {
      const updatedFilteredData = data?.filter(item => {
         return item[selectedOption]
            .toLowerCase()
            .includes(searchValue.toLowerCase());
      });
      setFilteredData(updatedFilteredData);
   };
   return (
      <div className="p-4 md:p-10  w-full">
         <FilterComponent options={options} handleChange={handleFilterChange} />
         <TableComponent
            allowedProperties={allowedProperties}
            data={filteredData}
            handleClick={handleClick}
         />
      </div>
   );
}
