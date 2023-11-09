"use client";
import React from "react";
import {
   BarElement,
   CategoryScale,
   Chart as ChartJS,
   Legend,
   LinearScale,
   Title,
   Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const QueueChart = ({ data }: any) => {
   // Define the data for the chart
   const chartData = {
      labels: data.map((item: any) => item.interval),
      datasets: [
         {
            label: "Queue Data",
            data: data.map((item: any) => item.value),
            backgroundColor: "#36A2EB", // Blue color for bars
         },
      ],
   };

   // Define chart options
   const chartOptions = {
      type: "bar",
      scales: {
         x: { stacked: true },
         y: { beginAtZero: true },
      },
      plugins: {
         title: {
            display: true,
            text: "Queue Analytics",
         },
      },
      responsive: true,
      interaction: {
         intersect: false,
      },
   };

   return <Bar data={chartData} options={chartOptions} />;
};

export default QueueChart;
