"use client";

import { useParams } from "next/navigation";
import { branchesData } from "@/components/Analytics/constants/testBranches";
import { filterBranchData } from "@/utils/filterBranchData";
import LineChart from "@/components/Analytics/LineChart";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI Components/Error";
import { Loading } from "@/components/UI Components/Loading";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";

const BranchAnalyticsPage = () => {
   const params = useParams();
   const branchData = filterBranchData(branchesData, params.id);
   const { perms, role } = useAuthState();

   return (
      <>
         {perms ? (
            role === "admin" ||
            perms.includes(PERMISSIONS.QUEUE_ANALYTICS_BRANCH) ? (
               <div className="mt-16 w-full h-full">
                  <div className={"w-full h-full"}>
                     <LineChart branchData={branchData} id={params.id} />
                  </div>
               </div>
            ) : (
               <Error />
            )
         ) : (
            <Loading />
         )}
      </>
   );
};

export default BranchAnalyticsPage;
