"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchesData } from "@/components/Analytics/constants/testBranches";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import QueueChart from "@/components/Analytics/Queue";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { filterBranchData } from "@/utils/filterBranchData";

const BranchAnalyticsPage = () => {
   const params = useParams();
   const [queueData, setQueueData] = useState<any>([]);
   const branchData = filterBranchData(branchesData, params.id);
   const groupedBranch = groupBranchesByInterval(branchData, "1yr");

   const averageResults = calculateQueueAverage(branchData, groupedBranch);
   useEffect(() => {
      setQueueData(averageResults);
   }, []);
   return (
      <div className={`${styles.container} sm:ml-56 md:ml-64`}>
         <QueueChart data={queueData} />
         <div className={"flex items-center flex-col"}>
            <h1>Select the interval</h1>
            <TimeIntervals
               data={branchData}
               onClick={(data: any) => setQueueData(data)}
            />
         </div>
      </div>
   );
};

export default BranchAnalyticsPage;
