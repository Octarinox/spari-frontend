"use client";
import QueueChart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import { useEffect, useState } from "react";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchesData } from "@/components/Analytics/constants/testBranches";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";

const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

const QueueStats = () => {
   const [queueData, setQueueData] = useState([]);

   useEffect(() => {
      const groupedBranches = groupBranchesByInterval(branchesData, "1yr");
      const averageResults = calculateQueueAverage(
         branchesData,
         groupedBranches
      );
      setQueueData(averageResults);
   }, []);
   return (
      <div className={`${styles.container} sm:ml-56 md:ml-64`}>
         <QueueChart data={queueData} />
         <div className={"flex items-center flex-col"}>
            <h1>Select the interval</h1>
            <TimeIntervals
               data={branchesData}
               onClick={(data: any) => setQueueData(data)}
            />
         </div>
      </div>
   );
};

export default QueueStats;
