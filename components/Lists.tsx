export const ListsTable = () => {
   return (
      <div className="flex flex-col mt-4">
         <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
               <div className="border rounded-b rounded-t divide-y divide-gray-700 border-gray-700">
                  <div className="overflow-hidden">
                     <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-700">
                           <tr>
                              <th
                                 scope="col"
                                 className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase"
                              >
                                 Name
                              </th>
                              <th
                                 scope="col"
                                 className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase"
                              >
                                 Age
                              </th>
                              <th
                                 scope="col"
                                 className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase"
                              >
                                 Address
                              </th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                           <tr
                              className={
                                 "hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-300 hover:cursor-pointer"
                              }
                           >
                              <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                                 John Brown
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                 45
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                 New York No. 1 Lake Park
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div className="py-1 px-4">
                     <nav className="flex items-center space-x-2">
                        <a
                           className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
                           href="#"
                        >
                           <span aria-hidden="true">«</span>
                           <span className="sr-only">Previous</span>
                        </a>
                        <a
                           className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                           href="#"
                           aria-current="page"
                        >
                           1
                        </a>
                        <a
                           className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                           href="#"
                        >
                           2
                        </a>
                        <a
                           className="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                           href="#"
                        >
                           3
                        </a>
                        <a
                           className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
                           href="#"
                        >
                           <span className="sr-only">Next</span>
                           <span aria-hidden="true">»</span>
                        </a>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
