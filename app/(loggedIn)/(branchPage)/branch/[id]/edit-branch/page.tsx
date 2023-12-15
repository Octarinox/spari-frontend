"use client";

import BranchEditForm from "@/components/UI Components/BranchEditForm";
import useBranchFetcher from "@/shared/hooks/useBranchFetch";
import { useBranchState } from "@/contexts/BranchesContext";
import { useParams } from "next/navigation";

const EditBranch = () => {
   useBranchFetcher();
   const params = useParams();
   const { data } = useBranchState();
   const branch = data?.find(branch => branch.branchId === params.id);
   return (
      <div className={"w-full flex flex-col items-center"}>
         <BranchEditForm data={branch} />
      </div>
   );
};

export default EditBranch;
