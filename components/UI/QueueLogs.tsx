"use client";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import { DataGrid } from "@mui/x-data-grid";

const QueueLogs = ({ logs }: any) => {
   const tableHeadComponents: any = [
      { field: "address", headerName: "Address", flex: 1 },
      { field: "queueSize", headerName: "Queue Size", flex: 1 },
      { field: "queueTime", headerName: "Duration", flex: 1 },
      { field: "timestamp", headerName: "Detection Time", flex: 1 },
      { field: "salaro", headerName: "Cashier", flex: 1 },
   ];
   const formattedLogs = formatDate(logs);

   const classNames =
      "text-sm sm:text-sm xl:px-10 xl:py-3 px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 lg:px-10 lg:py-5";

   return (
      <>
         <div className="flex w-full flex-col items-center mt-10">
            <DataGrid
               sx={{ width: "90%" }}
               rows={formattedLogs}
               pagination
               columns={tableHeadComponents as any}
               rowCount={formattedLogs.length}
               getRowId={row => row._id}
            />
         </div>
      </>
   );
};

export default QueueLogs;
