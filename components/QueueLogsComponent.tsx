"use client";

import React, { useState } from "react";

const QueueLogsComponent = () => {
   const [tableComponents, setTableComponents] = useState([
      {
         id: 1,
         subject: "Dadu",
         similarity: 0.9733,
         time: "16:42:32",
         mask: "Without mask",
      },
      {
         id: 2,
         subject: "Gio",
         similarity: 0.9733,
         time: "16:42:32",
         mask: "Without mask",
      },
      {
         id: 3,
         subject: "Nika",
         similarity: 0.9733,
         time: "16:42:32",
         mask: "Without mask",
      },
      {
         id: 4,
         subject: "lasha",
         similarity: 0.97353,
         time: "18:42:22",
         mask: "With mask",
      },
   ]);
   const tableHeadComponents = ["Subject", "Similarity", "Time", "Mask"];
   const handleDelete = (id: number) => {
      const updatedTable = tableComponents.filter(item => item.id !== id);
      setTableComponents(updatedTable);
   };
   const classNames =
      "text-sm sm:text-sm xl:px-10 xl:py-3 px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 lg:px-10 lg:py-5";
   return (
      <>
         <div className="flex w-full flex-col items-center mt-10">
            <div className="w-1/2 text-xl mr-32 flex justify-start">
               <h1 className="md:text-xs lg:text-lg xl:text-2xl">Logs</h1>
            </div>
            <table className="w-auto mt-10">
               <thead>
                  <tr className="border-b-2 border-gray-300">
                     {tableHeadComponents.map(item => (
                        <td key={item} className={classNames}>
                           {item}
                        </td>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {tableComponents.map(item => (
                     <tr key={item.id} className="border-b-2 border-gray-300">
                        <th className={classNames}>{item.subject}</th>
                        <td className={classNames}>{item.similarity}</td>
                        <td className={classNames}>{item.time}</td>
                        <td className={classNames}>{item.mask}</td>
                        <th className="text-sm sm:text-sm xl:px-60 xl:py-3 px-2  py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 lg:px-10 lg:py-5">
                           <button
                              className="cursor-pointer"
                              onClick={() => handleDelete(item.id)}
                           >
                              Delete
                           </button>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};

export default QueueLogsComponent;
