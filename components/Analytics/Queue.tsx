import React from "react";
import { Bar } from "react-chartjs-2";

const QueueHistogram = ({ data }: any) => {
   const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
         x: {
            type: "time", // Set the type to 'time' or 'timeseries'
            time: {
               unit: "hour",
               stepSize: 1,
            },
         },
         y: {
            beginAtZero: true,
            title: {
               display: true,
               text: "Average Queue Size",
            },
         },
      },
   };

   const dataset = {
      label: "Average Queue Size",
      data: data,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
   };

   return (
      <div>
         <Bar data={{ datasets: [dataset] }} options={options} />
      </div>
   );
};

export default QueueHistogram;
