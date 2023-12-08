"use client";
import QueueChart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import { useEffect, useState } from "react";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchData } from "@/components/Analytics/constants/testBranches";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";

const queueData = [
   { interval: "1 Hour", value: 10 },
   { interval: "24 Hours", value: 50 },
   { interval: "1 Week", value: 100 },
   { interval: "1 Month", value: 200 },
   { interval: "6 Months", value: 500 },
   { interval: "1 Year", value: 1000 },
];
const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

const QueueStats = () => {
   const [currentOption, setCurrentOption] = useState(queueData);

   useEffect(() => {
      const groupedBranches = groupBranchesByInterval(branchData, "1yr");
      const averageResults = calculateQueueAverage(branchData, groupedBranches);
      setCurrentOption(averageResults);
   }, []);
   return (
      <div className={`${styles.container} sm:ml-56 md:ml-64`}>
         <QueueChart data={currentOption} />
         <div className={"flex items-center flex-col"}>
            <h1>Select the interval</h1>
            <TimeIntervals
               onClick={(option: any) => setCurrentOption(option)}
            />
         </div>
      </div>
   );
};

export default QueueStats;
