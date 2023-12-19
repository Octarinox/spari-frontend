"use client";
import React, { useEffect, useState } from "react";
import QueueChart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchesData } from "@/components/Analytics/constants/testBranches";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";
import { useAuthState } from "@/contexts/LoginContext/context";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { Error } from "@/components/UI Components/Error";
import { Loading } from "@/components/UI Components/Loading";

const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

const QueueStats = () => {
   const [queueData, setQueueData] = useState([]);
   const { perms, role } = useAuthState();

   useEffect(() => {
      const groupedBranches = groupBranchesByInterval(branchesData, "1yr");
      const averageResults = calculateQueueAverage(
         branchesData,
         groupedBranches
      );
      setQueueData(averageResults);
   }, []);

   return (
      <>
         {perms ? (
            <div className={`${styles.container} `}>
               {role === "admin" ||
               perms?.includes(PERMISSIONS.QUEUE_ANALYTICS_GLOBAL) ? (
                  <>
                     <QueueChart data={queueData} />
                     <div className={"flex items-center flex-col"}>
                        <TimeIntervals
                           data={branchesData}
                           onClick={(data: any) => setQueueData(data)}
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

export default QueueStats;
