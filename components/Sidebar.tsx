import React from "react";
import { useState } from "react";
import Link from "next/link";
const Sidebar = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const [menuItems, setMenuItems] = useState([
      {
         text: "User Register",
         icon: (
            <svg
               className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 20 18"
            >
               <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
         ),
         iconCurrent: (
            <svg
               className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-900"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 20 18"
            >
               <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
         ),
         href: "/settings/user-register",
         current: true,
         className:
            "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 group",
         classNameCurrent:
            "flex items-center p-2 hover:text-gray-900 rounded-lg bg-gray-200 group",
      },
      {
         text: "Branch Register",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               fill="currentColor"
               className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"
               viewBox="0 0 16 16"
            >
               <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg>
         ),
         iconCurrent: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               fill="currentColor"
               className="flex-shrink-0 w-5 h-5 transition duration-75  text-gray-900"
               viewBox="0 0 16 16"
            >
               <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg>
         ),
         href: "/settings/branch-register",
         current: false,
         className:
            "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg  hover:bg-gray-100 group",
         classNameCurrent:
            "flex items-center p-2 hover:text-gray-900 rounded-lg bg-gray-200 group",
      },
      {
         text: "Blacklist",
         icon: (
            <svg
               className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 20 20"
            >
               <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
               <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
               <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
            </svg>
         ),
         iconCurrent: (
            <svg
               className="flex-shrink-0 w-5 h-5 transition duration-75  text-gray-900"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 20 20"
            >
               <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
               <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
               <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
            </svg>
         ),
         href: "/settings/blacklist",
         current: false,
         className:
            "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg  hover:bg-gray-100 group",
         classNameCurrent:
            "flex items-center p-2 hover:text-gray-900 rounded-lg bg-gray-200 group",
      },
   ]);
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };
   const handleClick = (index: number) => {
      const setCurrent = menuItems.map((item, i) => {
         return { ...item, current: i === index };
      });
      setMenuItems([...setCurrent]);
   };
   return (
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
         <button
            onClick={toggleSidebar}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className={`inline-flex items-center sticky z-10 ${
               isSidebarOpen ? "ml-64" : ""
            }  text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
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
         <aside
            id="default-sidebar"
            className={`absolute top-0 left-0 w-64 h-screen transition-transform ${
               isSidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full sm:translate-x-0"
            }`}
            aria-label="Sidebar"
         >
            <div className="h-full drop-shadow-lg mt-16 px-3 z-0 py-4 bg-gray-50 dark:bg-gray-800">
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
                           {item.current ? item.iconCurrent : item.icon}
                           <span className="flex-1 ml-3 whitespace-nowrap">
                              {item.text}
                           </span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </aside>
      </main>
   );
};

export default Sidebar;
