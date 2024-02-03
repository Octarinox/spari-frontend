export function transformFaceData(groupedData: any) {
   return Object.keys(groupedData).map(interval => {
      return {
         interval,
         value: groupedData[interval].length,
      };
   });
}
