"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBranchState } from "@/contexts/BranchesContext";

const BranchPage = () => {
   const { data } = useBranchState();
   const router = useRouter();
   useEffect(() => {
      router.push(`/branch/${data?.[0]?.branchId}/queue-analytics`);
   }, []);
};

export default BranchPage;
