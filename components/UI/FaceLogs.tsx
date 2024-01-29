"use client";
import { Logs } from "../LogsComponent/LogsTypes";
import React, { useState } from "react";
import { formatDate } from "@/utils/formatDate";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const FaceLogs = ({ logs }: any) => {
   const [logsData, setLogsData] = useState(logs);
   const router = useRouter();
   const tableHeadComponents: any = [
      { field: "subjectId", headerName: "Subject", flex: 1 },
      { field: "address", headerName: "Address", flex: 1 },
      { field: "accuracy", headerName: "Similarity", flex: 1 },
      { field: "timestamp", headerName: "Time", flex: 1 },
      { field: "customerType", headerName: "Customer", flex: 1 },
      {
         field: "hasMask",
         headerName: "Mask",
         flex: 1,
         renderCell: (params: any) => (
            <span>{params.value ? "With mask" : "Without mask"}</span>
         ),
      },
   ];
   const formattedLogs = formatDate(logs);
   const handleDelete = (id: number) => {
      const updatedTable = logsData.filter((item: Logs) => item.id !== id);
      setLogsData(updatedTable);
   };
   const classNames =
      "text-sm sm:text-sm xl:px-10 xl:py-3 px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 lg:px-10 lg:py-5";
   return (
      <>
         <div className="flex w-full flex-col items-center mt-10">
            <DataGrid
               sx={{ width: "90%" }}
               rows={formattedLogs}
               columns={tableHeadComponents as any}
               rowCount={formattedLogs.length}
               getRowId={row => row._id}
               onRowSelectionModelChange={params => {
                  router.push(`/face-detection-logs/${params[0]}`);
               }}
            />
         </div>
      </>
   );
};

export default FaceLogs;
