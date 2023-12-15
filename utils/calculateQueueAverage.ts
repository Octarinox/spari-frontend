export const calculateQueueAverage = (
   data: any[],
   result: Record<string, number[]>
) => {
   const averages: any = [];

   Object.keys(result).forEach(intervalKey => {
      const branchIds = result[intervalKey];
      const totalSalaro1 = branchIds.reduce((sum, branch: any) => {
         return sum + (branch?.detect.Salaro1?.person || 0);
      }, 0);

      const totalSalaro2 = branchIds.reduce((sum, branch: any) => {
         return sum + (branch?.detect.Salaro2?.person || 0);
      }, 0);

      const averageSalaro1 = totalSalaro1 / branchIds.length;
      const averageSalaro2 = totalSalaro2 / branchIds.length;
      const finalAverage = averageSalaro1 + averageSalaro2;

      averages.push({ interval: intervalKey, value: finalAverage });
   });
   return averages;
};
