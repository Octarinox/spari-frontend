"use client";
import React, { useMemo, useState } from "react";
import Chart from "@/components/Analytics/BarChart";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { useAuthState } from "@/contexts/LoginContext/context";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import useFaceLogs from "@/shared/hooks/useFaceLogs";
import useFaceData from "@/shared/hooks/useFaceData";
import { useBranchState } from "@/contexts/BranchesContext";
import { useParams } from "next/navigation";

const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

const FaceAnalytics = () => {
   const [interval, setInterval] = useState("1yr");
   const { perms, role } = useAuthState();
   const { data: branchesData } = useBranchState();
   const params = useParams();
   const { data: logs }: any = useFaceLogs();
   const filteredBranches = useMemo(() => {
      return branchesData?.filter(branch => branch.branchId === params.id);
   }, [branchesData, params.id]);
   const branchLogs = useMemo(() => {
      if (!logs || !filteredBranches) return [];

      return logs.filter(
         (log: any) => log.branchId === filteredBranches[0]._id
      );
   }, [logs, filteredBranches]);

   const { faceData, dataSet } = useFaceData(branchLogs, interval);

   return (
      <>
         {perms ? (
            <div className={`${styles.container} `}>
               {role === "admin" ||
               perms?.includes(PERMISSIONS.FACE_ANALYTICS_BRANCH) ? (
                  <>
                     <Chart data={faceData} datasets={dataSet} />
                     <div className={"flex items-center flex-col"}>
                        <TimeIntervals
                           data={faceData}
                           onClick={(interval: any) => setInterval(interval)}
                        />
                     </div>
                  </>
               ) : (
                  <Error />
               )}
            </div>
         ) : (
            <Loading />
         )}
      </>
   );
};

export default FaceAnalytics;
