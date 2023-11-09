"use client";
import QueueChart from "@/components/Analytics/Queue";

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
      <div>
         <h1>Queue Statistics</h1>
         <QueueChart data={queueData} />
      </div>
   );
};

export default QueueStats;
