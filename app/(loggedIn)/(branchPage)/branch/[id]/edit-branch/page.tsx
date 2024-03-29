"use client";

import BranchEditForm from "@/components/UI/BranchEditForm";
import { useBranchState } from "@/contexts/BranchesContext";
import { useParams } from "next/navigation";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";

const EditBranch = () => {
   const params = useParams();
   const { data } = useBranchState();
   const { role } = useAuthState();
   const branch = data?.find(branch => branch.branchId === params.id);

   return (
      <>
         {role ? (
            role !== "manager" ? (
               <div className="mt-16 mt-16 w-full h-full">
                  <div className={"w-full flex flex-col items-center"}>
                     <BranchEditForm data={branch} />
                  </div>
               </div>
            ) : (
               <Error />
            )
         ) : (
            <Loading />
         )}
      </>
   );
};

export default EditBranch;
