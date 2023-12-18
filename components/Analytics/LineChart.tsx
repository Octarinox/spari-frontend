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
import { branchesData } from "@/components/Analytics/constants/testBranches";

export default function LineChart() {
   ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
   );

   const sortedData: any = branchesData.sort(
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
            text: "Branch Specific",
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
      return `${monthAbbreviation}-${day}`;
   };

   const timestamps = sortedData.map((timestamp: any) =>
      formatTimestamp(timestamp.timestamp)
   );
   const cashier1 = sortedData.map((entry: any) => entry.detect.Salaro1.person);
   const cashier2 = sortedData.map((entry: any) => entry.detect.Salaro2.person);
   const branchIds = sortedData.map((entry: any) => entry.branch_id);

   const data: ChartData<"line", any, unknown> = {
      labels: timestamps,
      datasets: [
         {
            label: "Cashier 1",
            data: cashier1,
            borderColor: "red",
            cubicInterpolationMode: "monotone",
         } as ChartDataset<"line", any>,
         {
            label: "Cashier 2",
            data: cashier2,
            borderColor: "blue",
            cubicInterpolationMode: "monotone",
         } as ChartDataset<"line", any>,
      ],
   };

   console.log(data);

   return (
      <main>
         <div
            style={{ width: "60%", height: "500px", margin: "auto" }}
            className={"flex justify-center"}
         >
            <Line options={options} data={data} />
         </div>
      </main>
   );
}
