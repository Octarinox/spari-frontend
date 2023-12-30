"use client";

import React from "react";
import SearchBarComponent from "@/components/UI/FilterComponent";
import FilterComponent from "@/components/UI/FilterComponent";

const BranchEditTable = () => {
   return (
      <div>
         <div className=" flex justify-center">
            <h1 className="text-3xl font-bold text-gray-700">Branch List</h1>
         </div>
         <div className="flex w-4/4 justify-end">
            <SearchBarComponent />
            <FilterComponent />
         </div>
      </div>
   );
};

export default BranchEditTable;
