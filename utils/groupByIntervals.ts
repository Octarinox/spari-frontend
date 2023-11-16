// @ts-ignore
export function groupByInterval(data, startTime, interval) {
   const groupedData = {};
   // @ts-ignore
   data.forEach(branch => {
      const timestamp = new Date(branch.timestamp).getTime();
      const intervalKey = new Date(
         Math.floor((timestamp - startTime) / interval) * interval + startTime
      );
      // @ts-ignore
      if (!groupedData[intervalKey]) {
         // @ts-ignore
         groupedData[intervalKey] = [];
      }
      // @ts-ignore
      groupedData[intervalKey].push(branch.branch_id);
   });

   return groupedData;
}
