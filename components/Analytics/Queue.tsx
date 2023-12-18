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
import styles from "@/components/Analytics/styles/queueAnalytics.module.scss";
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
   const chartData = {
      labels: data.map((item: any) => item.interval),
      datasets: [
         {
            label: "Queue Data",
            data: data.map((item: any) => item.value),
            backgroundColor: "#19207e",
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
      maintainAspectRatio: false,
      updateMode: "resize",
   };

   return (
      <div className={styles.chartBox}>
         <Bar data={chartData} options={chartOptions} />
      </div>
   );
};

export default QueueChart;
