export const formatDate = (logs: any) => {
   return logs?.map((log: any) => {
      const date = new Date(log.timestamp);
      const format = {
         day: "numeric",
         month: "numeric",
         hour: "numeric",
         minute: "numeric",
         year: "numeric",
      } as any;
      const formattedDate = date.toLocaleString("en-US", format);
      console.log("date", date.getDay(), date);
      return {
         ...log,
         timestamp: formattedDate,
      };
   });
};
