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

   const cashier1 = sortedData?.map(
      (entry: any) => entry.detect.Salaro1.person
   );
   const cashier2 = sortedData?.map(
      (entry: any) => entry.detect.Salaro2.person
   );

   const formatTimestamp = (timestamp: any) => {
      const date: Date = new Date(timestamp);
      return date.getTime();
   };

   const timestamps = sortedData?.map((data: any) => {
      return formatTimestamp(data.timestamp);
   });

   const downsampleData = (data: any[], factor: number) => {
      const downsampled = [];
      for (let i = 0; i < data.length; i += factor) {
         const startIndex = i;
         const endIndex = Math.min(i + factor, data.length);
         const subset = data.slice(startIndex, endIndex);
         if (subset.length > 0) {
            const average =
               subset.reduce((sum, value) => sum + value, 0) / subset.length;
            downsampled.push(average);
         }
      }
      return downsampled;
   };

   const downsampleFactor = 2; // Adjust this factor based on your data size and preference

   const downsampledTimestamps = downsampleData(timestamps, downsampleFactor);
   const downsampledCashier1 = downsampleData(cashier1, downsampleFactor);
   const downsampledCashier2 = downsampleData(cashier2, downsampleFactor);

   const downsampledData: ChartData<"line", any, unknown> = {
      labels: downsampledTimestamps.map(
         timestamp => new Date(timestamp).toISOString() // Convert back to timestamp string
      ),
      datasets: [
         {
            label: "Cashier 1",
            data: downsampledCashier1,
            borderColor: "purple",
            cubicInterpolationMode: "monotone",
         } as ChartDataset<"line", any>,
         {
            label: "Cashier 2",
            data: downsampledCashier2,
            borderColor: "black",
            cubicInterpolationMode: "monotone",
         } as ChartDataset<"line", any>,
      ],
   };

   return (
      <main className={"flex justify-center"}>
         <div
            style={{
               width: "90%",
               height: "500px",
               marginTop: "100px",
            }}
            className={"flex justify-center"}
         >
            <Line options={options} data={downsampledData} />
         </div>
      </main>
   );
}
