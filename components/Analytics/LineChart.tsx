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
import { downsampleData, formatTimestamps } from "@/utils/dataTransformer";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Slider, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Line } from "react-chartjs-2";
import { sliderTheme } from "@/utils/sliderTheme";

export default function LineChart({ branchData, id }: any) {
   const [downsampleFactor, setDownsampleFactor] = useState<number>(
      Math.ceil(branchData.length / 18) || 1
   );

   const handleSliderChange = (_: any, value: number | number[]) => {
      setDownsampleFactor(value as number);
   };

   ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
   );

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top" as const,
         },
         title: {
            display: true,
            text: `Branch #${id}`,
         },
      },
      maintainAspectRatio: false,
      updateMode: "resize",
   };

   const sortedData: any = branchData?.sort(
      (a: any, b: any) =>
         (new Date(a.timestamp) as any) - (new Date(b.timestamp) as any)
   );
   const cashier1 = sortedData?.map(
      (entry: any) => entry.detect.Salaro1.person
   );
   const cashier2 = sortedData?.map(
      (entry: any) => entry.detect.Salaro2.person
   );
   const timestamps = sortedData?.map((data: any) => {
      return new Date(data.timestamp).getTime();
   });

   const downsampledTimestamps: number[] = downsampleData(
      timestamps,
      downsampleFactor
   );
   const downsampledCashier1: number[] = downsampleData(
      cashier1,
      downsampleFactor
   );
   const downsampledCashier2: number[] = downsampleData(
      cashier2,
      downsampleFactor
   );

   const downsampledData: ChartData<"line", any, unknown> = {
      labels: formatTimestamps(downsampledTimestamps),
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
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={sliderTheme}>
            <main className={"flex flex-col justify-center"}>
               <div
                  style={{
                     width: "90%",
                     height: "500px",
                     marginTop: "100px",
                  }}
               >
                  <Line options={options} data={downsampledData} />
               </div>
               <div className={"flex justify-center mt-6"}>
                  <div className={"w-2/4"}>
                     <Typography
                        className={"text-gray-500"}
                        id="downsample-factor-slider"
                        gutterBottom
                     >
                        Downsample Strength
                     </Typography>
                     <Slider
                        value={downsampleFactor}
                        min={1}
                        max={10}
                        step={1}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="downsample-factor-slider"
                     />
                  </div>
               </div>
            </main>
         </ThemeProvider>
      </StyledEngineProvider>
   );
}
