export const getActiveItemByRoute = (menuItems: any, path: any) => {
   console.log(path);
   return menuItems.map((item: any) => {
      return {
         ...item,
         current: path.includes(item.href),
      };
   });
};
