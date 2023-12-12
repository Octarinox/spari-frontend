"use client";
import React, { useEffect, useState } from "react";
import EditBranchConfigsComponent from "@/components/EditBranchConfigsComponent";
import { useBranchState } from "@/contexts/BranchesContext";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";

const EditBranchConfigs = () => {
   useBranchFetcher();
   const allowedProperties = ["branchId", "address"];
   const { data } = useBranchState();
   const [filteredData, setFilteredData] = useState<any>(data);
   useEffect(() => {
      setFilteredData(data);
   }, [data]);
   return (
      <div className="p-4 md:p-1 mx-auto max-w-7xl">
         <EditBranchConfigsComponent
            allowedProperties={allowedProperties}
            data={filteredData}
         />
      </div>
   );
};

export default EditBranchConfigs;
