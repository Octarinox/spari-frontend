export const filterById = (data: any, targetId: any) => {
   return data?.filter(
      (obj: any) =>
         obj.id === targetId ||
         obj._id === targetId ||
         obj.branch_id.toString() === targetId
   );
};
