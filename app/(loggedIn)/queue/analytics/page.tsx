import QueueHistogram from "@/components/Analytics/Queue";

const QueueStats = () => {
   // Replace this with your actual data for different time intervals
   const queueData = [
      { x: new Date("2023-11-08T12:00:00"), y: 10 }, // Example data
      // Add more data points for different time intervals
   ];

   return (
      <div>
         <h1>Queue Statistics</h1>
         <QueueHistogram data={queueData} />
      </div>
   );
};

export default QueueStats;
