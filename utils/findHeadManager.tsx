export const findHeadManager = (data: any, users: string[]) => {
   return data?.filter(
      (user: any) => users?.includes(user?._id) && user?.role === "headmanager"
   );
};
