"use client";
import React from "react";
import { queueLogs } from "@/components/LogsComponent/LogsData";
import LogsComponent from "@/components/LogsComponent/LogsComponent";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI Components/Error";
import { Loading } from "@/components/UI Components/Loading";

const QueueLogs = () => {
   const { perms, role } = useAuthState();

   return (
      <>
         {perms ? (
            <div className="mt-16">
               {role === "admin" || perms?.includes(PERMISSIONS.QUEUE_LOGS) ? (
                  <LogsComponent logs={queueLogs} />
               ) : (
                  <Error />
               )}
            </div>
         ) : (
            <Loading />
         )}
      </>
   );
};

export default QueueLogs;
