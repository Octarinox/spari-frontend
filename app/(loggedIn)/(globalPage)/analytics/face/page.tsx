"use client";
import React, { useState } from "react";
import BarChart from "@/components/Analytics/BarChart";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { useAuthState } from "@/contexts/LoginContext/context";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import useFaceLogs from "@/shared/hooks/useFaceLogs";
import useFaceData from "@/shared/hooks/useFaceData";

const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

const FaceStats = () => {
   const [interval, setInterval] = useState("1yr");
   const { perms, role } = useAuthState();
   const { data }: any = useFaceLogs();
   const { faceData, dataSet } = useFaceData(data, interval);

   return (
      <>
         {perms ? (
            <div className={`${styles.container} `}>
               {role === "admin" ||
               perms?.includes(PERMISSIONS.FACE_ANALYTICS_GLOBAL) ? (
                  <>
                     <BarChart data={faceData} datasets={dataSet} />
                     <div className={"flex items-center flex-col"}>
                        <TimeIntervals
                           data={data}
                           onClick={(interval: any) => setInterval(interval)}
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

export default FaceStats;
