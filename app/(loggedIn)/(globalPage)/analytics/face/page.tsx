"use client";
import React, { useEffect, useState } from "react";
import Chart from "@/components/Analytics/Queue";
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
import TimeIntervals from "@/components/Analytics/TimeIntervals";
import { groupDataByInterval } from "@/utils/groupDataByInterval";
import { useAuthState } from "@/contexts/LoginContext/context";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import useFaceLogs from "@/shared/hooks/useFaceLogs";
import { useDataset } from "@/shared/hooks/useDataset";

const selectOptions = [
   { option: "1 Hour", value: "1hr" },
   { option: "24 Hours", value: "24hrs" },
   { option: "1 Week", value: "1w" },
   { option: "1 Month", value: "1m" },
   { option: "1 Year", value: "1yr" },
];

export function transformFaceData(groupedData: any) {
   console.log("aa", groupedData);
   return Object.keys(groupedData).map(interval => {
      return {
         interval,
         value: groupedData[interval].length,
      };
   });
}

const FaceStats = () => {
   const [faceData, setFaceData] = useState<any>(null);
   const [dataSet, updateDataset] = useDataset();
   const [interval, setInterval] = useState("1yr");
   const { perms, role } = useAuthState();
   const { data }: any = useFaceLogs();
   const vipCustomers = data?.filter(
      (customer: any) => customer.customerType === "vip"
   );
   const blacklistCustomers = data?.filter(
      (customer: any) => customer.customerType === "blacklist"
   );
   useEffect(() => {
      const globalCustomersData = groupDataByInterval(data, interval);
      const groupedVipCustomers = groupDataByInterval(vipCustomers, interval);
      const groupedBlacklistCustomers = groupDataByInterval(
         blacklistCustomers,
         interval
      );
      const transformedVipCustomersData =
         transformFaceData(groupedVipCustomers);
      const transformedGlobalCustomers = transformFaceData(globalCustomersData);

      const transformedBlacklistCustomersData = transformFaceData(
         groupedBlacklistCustomers
      );
      const dataset = [
         {
            label: "VIP Customers",
            data: transformedVipCustomersData?.map((item: any) => item.value),
            backgroundColor: "#debe09",
         },
         {
            label: "Blacklisted Customers",
            data: transformedBlacklistCustomersData?.map(
               (item: any) => item.value
            ),
            backgroundColor: "#dc0935",
         },
      ];
      updateDataset(dataset);
      console.log("groupedVipCustomers", transformedGlobalCustomers);
      setFaceData(transformedGlobalCustomers);
   }, [data, interval]);

   return (
      <>
         {perms ? (
            <div className={`${styles.container} `}>
               {role === "admin" ||
               perms?.includes(PERMISSIONS.QUEUE_ANALYTICS_GLOBAL) ? (
                  <>
                     <Chart data={faceData} datasets={dataSet} />
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
