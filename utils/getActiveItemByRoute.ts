export const getActiveItemByRoute = (menuItems: any, path: any) => {
   return menuItems.map((item: any) => {
      return {
         ...item,
         current: path.includes(item.href) || path.includes(item.key),
      };
   });
};
