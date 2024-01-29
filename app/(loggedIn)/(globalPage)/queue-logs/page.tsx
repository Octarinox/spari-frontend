"use client";
import React from "react";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import QueueLogs from "@/components/UI/QueueLogs";
import useQueueLogs from "@/shared/hooks/useQueueLogs";

const QueueLogsPage = () => {
   const { perms, role } = useAuthState();
   const { data } = useQueueLogs();
   return (
      <>
         {perms && data ? (
            <div className="mt-16">
               {role === "admin" || perms?.includes(PERMISSIONS.QUEUE_LOGS) ? (
                  <QueueLogs logs={data} />
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

export default QueueLogsPage;
