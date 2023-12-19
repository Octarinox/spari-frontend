"use client";
import {
   CategoryScale,
   Chart as ChartJS,
   ChartData,
   ChartDataset,
   Legend,
   LinearScale,
   LineElement,
   PointElement,
   Title,
   Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function LineChart({ branchData, id }: any) {
   ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
   );
   const sortedData: any = branchData?.sort(
      (a: any, b: any) =>
         (new Date(a.timestamp) as any) - (new Date(b.timestamp) as any)
   );

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top" as const,
         },
         title: {
            display: true,
            text: `Branch ${id}`,
         },
      },
      maintainAspectRatio: false,
      updateMode: "resize",
   };

   const formatTimestamp = (timestamp: any) => {
      const months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
      ];
      const date = new Date(timestamp);
      const monthAbbreviation = months[date.getMonth()];
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString();
      const minutes = date.getMinutes().toString();
      return `${monthAbbreviation}-${day}-${hours}:${minutes}`;
   };

   const timestamps = sortedData?.map((timestamp: any) =>
      formatTimestamp(timestamp.timestamp)
   );
   const cashier1 = sortedData?.map(
      (entry: any) => entry.detect.Salaro1.person
   );
   const cashier2 = sortedData?.map(
      (entry: any) => entry.detect.Salaro2.person
   );

   const data: ChartData<"line", any, unknown> = {
      labels: timestamps,
      datasets: [
         {
            label: "Cashier 1",
            data: cashier1,
            borderColor: "purple",
            cubicInterpolationMode: "monotone",
         } as ChartDataset<"line", any>,
         {
            label: "Cashier 2",
            data: cashier2,
            borderColor: "black",
            cubicInterpolationMode: "monotone",
         } as ChartDataset<"line", any>,
      ],
   };

   return (
      <main>
         <div
            style={{
               width: "60%",
               height: "500px",
               margin: "auto",
               marginTop: "100px",
            }}
            className={"flex justify-center"}
         >
            <Line options={options} data={data} />
         </div>
      </main>
   );
}
