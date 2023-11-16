"use client";
import QueueChart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import { useState } from "react";
import TimeIntervals from "@/components/Analytics/TimeIntervals";

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
   const [currentOption, setCurrentOption] = useState("");

   const handleSelectChange = (e: any) => {
      const optionValue = e.target.value;
      setCurrentOption(optionValue);
   };

   return (
      <div className={`${styles.container} sm:ml-56 md:ml-64`}>
         <QueueChart data={queueData} />
         <TimeIntervals onClick={(option: any) => setCurrentOption(option)} />
      </div>
   );
};

export default QueueStats;
