export const formatDate = (logs: any) => {
   return logs?.map((log: any) => {
      const date = new Date(log.timestamp);
      return {
         ...log,
         timestamp: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()} `,
      };
   });
};
