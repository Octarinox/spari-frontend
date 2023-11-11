"use client";
import QueueChart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";

const queueData = [
   { interval: "1 Hour", value: 10 },
   { interval: "24 Hours", value: 50 },
   { interval: "1 Week", value: 100 },
   { interval: "1 Month", value: 200 },
   { interval: "6 Months", value: 500 },
   { interval: "1 Year", value: 1000 },
];
const QueueStats = () => {
   return (
      <div className={`${styles.container} sm:ml-56 md:ml-64`}>
         <QueueChart data={queueData} />
      </div>
   );
};

export default QueueStats;
