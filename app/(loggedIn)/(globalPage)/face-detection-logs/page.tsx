"use client";
import { faceDetectionLogs } from "@/components/LogsComponent/LogsData";
import LogsComponent from "@/components/LogsComponent/LogsComponent";
const FaceDetectionLogs = () => {
   return (
      <div className="mt-16">
         <LogsComponent logs={faceDetectionLogs} />
      </div>
   );
};

export default FaceDetectionLogs;
