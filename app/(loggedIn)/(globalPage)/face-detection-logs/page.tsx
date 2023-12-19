"use client";
import { faceDetectionLogs } from "@/components/LogsComponent/LogsData";
import LogsComponent from "@/components/LogsComponent/LogsComponent";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI Components/Error";
import { Loading } from "@/components/UI Components/Loading";

const FaceDetectionLogs = () => {
   const { perms, role } = useAuthState();

   return (
      <>
         {perms ? (
            <div className="mt-16">
               {role === "admin" || perms?.includes(PERMISSIONS.FACE_LOGS) ? (
                  <LogsComponent logs={faceDetectionLogs} />
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

export default FaceDetectionLogs;
