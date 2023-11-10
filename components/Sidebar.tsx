"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getActiveItemByRoute } from "@/utils/getActiveItemByRoute";
import { usePathname } from "next/navigation";

const Sidebar = (props:any) => {
   const path = usePathname();
   const {menu} = props
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const [menuItems, setMenuItems] = useState(menu);
   const updateActiveMenuItem = (index: any) => {
      const updatedMenuItems = menuItems.map((item, i) => ({
         ...item,
         current: i === index,
      }));
      setMenuItems(updatedMenuItems);
   };

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   useEffect(() => {
      const newMenu = getActiveItemByRoute(menuItems, path);
      setMenuItems(newMenu);
   }, [path]);

   const handleClick = (index: number) => {
      updateActiveMenuItem(index);
      setIsSidebarOpen(false);
   };
   return (
      <div className="">
         <button
            onClick={toggleSidebar}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className={`inline-flex border-white drop-shadow-lg items-center absolute left-0  z-10 ${
               isSidebarOpen ? "ml-64" : ""
            }  text-sm text-gray-500 p-2 sm:hidden bg-white hover:bg-gray-100 rounded-tr-full rounded-br-full border-l-0 border-2`}
         >
            <span className="sr-only">Open sidebar</span>
            {!isSidebarOpen ? (
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
               >
                  <path
                     fillRule="evenodd"
                     d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
               </svg>
            ) : (
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
               >
                  <path
                     fillRule="evenodd"
                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
               </svg>
            )}
         </button>
         <div
            id="default-sidebar"
            className={`z-40 absolute top-0 left-0 w-64 h-screen transition-transform ${
               isSidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full sm:translate-x-0"
            }`}
            aria-label="Sidebar"
         >
            <div className="h-full drop-shadow-lg mt-16 px-3 z-0 py-4 bg-gray-300">
               <ul className="space-y-2 font-medium z-0">
                  {menuItems.map((item: any, index: number) => (
                     <li key={index} onClick={() => handleClick(index)}>
                        <Link
                           href={item.href}
                           className={
                              item.current
                                 ? item.classNameCurrent
                                 : item.className
                           }
                        >
                           {item.getCurrentItem()}
                           <span className="flex-1 ml-3 whitespace-nowrap">
                              {item.text}
                           </span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
