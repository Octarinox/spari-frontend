"use client";
import React, { useEffect, useState } from "react";
import Chart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { groupDataByInterval } from "@/utils/groupDataByInterval";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";
import { useAuthState } from "@/contexts/LoginContext/context";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import useQueueAnalitycs from "@/shared/hooks/useQueueAnalytics";
import { useDataset } from "@/shared/hooks/useDataset";

const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

const QueueStats = () => {
   const [queueData, setQueueData] = useState([]);
   const [dataSet, updateDataset] = useDataset();
   const [interval, setInterval] = useState("1yr");
   const { perms, role } = useAuthState();
   const { data, loading, error } = useQueueAnalitycs();

   useEffect(() => {
      const groupedBranches = groupDataByInterval(data, interval);
      const averageResults = calculateQueueAverage(data, groupedBranches);
      const dataset = [
         {
            label: "Queue Data",
            data: averageResults?.map((item: any) => item.value),
            backgroundColor: "#3c45c7",
         },
      ];
      if (averageResults) {
         updateDataset(dataset);
      }
      setQueueData(averageResults);
   }, [data, interval]);

   return (
      <>
         {perms ? (
            <div className={`${styles.container} `}>
               {role === "admin" ||
               perms?.includes(PERMISSIONS.QUEUE_ANALYTICS_GLOBAL) ? (
                  <>
                     <Chart data={queueData} datasets={dataSet} />
                     <div className={"flex items-center flex-col"}>
                        <TimeIntervals
                           data={data}
                           onClick={(interval: string) => setInterval(interval)}
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
