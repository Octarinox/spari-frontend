"use client";
import React, { useEffect, useState } from "react";
import QueueChart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";
import { useAuthState } from "@/contexts/LoginContext/context";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import useQueueAnalitycs from "@/shared/hooks/useQueueAnalytics";

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
   const { data, loading, error } = useQueueAnalitycs();

   useEffect(() => {
      const groupedBranches = groupBranchesByInterval(data, "1yr");
      const averageResults = calculateQueueAverage(data, groupedBranches);
      setQueueData(averageResults);
   }, [data]);

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
                           data={data}
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
