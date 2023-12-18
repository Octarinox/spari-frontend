"use client";
import { useEffect, useState } from "react";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchesData } from "@/components/Analytics/constants/testBranches";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";
import LineChart from "@/components/Analytics/LineChart";

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
      <div className={"w-full h-full"}>
         <LineChart />
      </div>
   );
};

export default QueueStats;
