import React from "react";
import { queueLogs } from "@/components/LogsComponent/LogsData";
import LogsComponent from "@/components/LogsComponent/LogsComponent";
const QueueLogs = () => {
   return (
      <div className="mt-16">
         <LogsComponent logs={queueLogs} />
      </div>
   );
};

export default QueueLogs;
