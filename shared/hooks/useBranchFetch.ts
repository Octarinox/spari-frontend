import { useEffect } from "react";
import { useBranchActions } from "@/contexts/BranchesContext";

const useBranchFetcher = () => {
   const { getBranches } = useBranchActions();
   useEffect(() => {
      async function fetchData() {
         await getBranches();
      }

      fetchData();
   }, []);
};

export default useBranchFetcher;
