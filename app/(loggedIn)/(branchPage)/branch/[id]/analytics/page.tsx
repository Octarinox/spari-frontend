"use client";

import { useParams } from "next/navigation";
import LineChart from "@/components/Analytics/LineChart";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import useQueueAnalitycs from "@/shared/hooks/useQueueAnalytics";
import { useEffect, useState } from "react";
import { filterById } from "@/utils/filterById";

const BranchAnalyticsPage = () => {
   const [branchData, setBranchData] = useState<any>();
   const params = useParams();
   const { data, loading, error } = useQueueAnalitycs();
   const { perms, role } = useAuthState();
   useEffect(() => {
      const branchData = filterById(data, params.id);
      setBranchData(branchData);
   }, [data]);
   return (
      <>
         {perms ? (
            role === "admin" ||
            perms.includes(PERMISSIONS.QUEUE_ANALYTICS_BRANCH) ? (
               <div className="mt-16 w-full h-full">
                  <div className={"w-full h-full"}>
                     {branchData && (
                        <LineChart branchData={branchData} id={params.id} />
                     )}
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
