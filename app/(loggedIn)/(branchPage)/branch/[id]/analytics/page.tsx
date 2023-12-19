"use client";

import { useParams } from "next/navigation";
import { branchesData } from "@/components/Analytics/constants/testBranches";
import { filterBranchData } from "@/utils/filterBranchData";
import LineChart from "@/components/Analytics/LineChart";

const BranchAnalyticsPage = () => {
   const params = useParams();
   const branchData = filterBranchData(branchesData, params.id);

   return (
      <div className={"w-full h-full"}>
         <LineChart branchData={branchData} id={params.id} />
      </div>
   );
};

export default BranchAnalyticsPage;
