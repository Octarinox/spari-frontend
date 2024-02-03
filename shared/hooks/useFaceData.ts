import { useEffect, useState } from "react";
import { groupDataByInterval } from "@/utils/groupDataByInterval";
import { transformFaceData } from "@/utils/transformFaceData";
import { useDataset } from "@/shared/hooks/useDataset";

const useFaceData = (data: any, interval: string) => {
   const [faceData, setFaceData] = useState<any>(null);
   const [dataSet, updateDataset] = useDataset();

   useEffect(() => {
      if (data) {
         const vipCustomers = data.filter(
            (customer: any) => customer.customerType === "vip"
         );
         const blacklistCustomers = data.filter(
            (customer: any) => customer.customerType === "blacklist"
         );

         const globalCustomersData = groupDataByInterval(data, interval);
         const groupedVipCustomers = groupDataByInterval(
            vipCustomers,
            interval
         );
         const groupedBlacklistCustomers = groupDataByInterval(
            blacklistCustomers,
            interval
         );

         const transformedVipCustomersData =
            transformFaceData(groupedVipCustomers);
         const transformedGlobalCustomers =
            transformFaceData(globalCustomersData);
         const transformedBlacklistCustomersData = transformFaceData(
            groupedBlacklistCustomers
         );

         const dataset = [
            {
               label: "VIP Customers",
               data: transformedVipCustomersData?.map(item => item.value),
               backgroundColor: "#debe09",
            },
            {
               label: "Blacklisted Customers",
               data: transformedBlacklistCustomersData?.map(item => item.value),
               backgroundColor: "#dc0935",
            },
         ];

         updateDataset(dataset);
         setFaceData(transformedGlobalCustomers);
      }
   }, [data, interval]);

   return { faceData, dataSet };
};

export default useFaceData;
