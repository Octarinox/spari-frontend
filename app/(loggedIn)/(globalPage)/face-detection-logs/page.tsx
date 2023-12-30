"use client";
import FaceLogs from "@/components/UI/FaceLogs";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import useFaceLogs from "@/shared/hooks/useFaceLogs";

const FaceDetectionLogs = () => {
   const { perms, role } = useAuthState();
   const { data } = useFaceLogs();
   return (
      <>
         {perms && data ? (
            <div className="mt-16">
               {role === "admin" || perms?.includes(PERMISSIONS.FACE_LOGS) ? (
                  <FaceLogs logs={data} />
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
