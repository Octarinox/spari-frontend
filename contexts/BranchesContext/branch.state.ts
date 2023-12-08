import { BranchContextInterface } from "@/contexts/BranchesContext/branch.interface";

export const initialContext: BranchContextInterface = {
   state: {
      data: [],
   },
   actions: {
      getBranches: async (): Promise<undefined> => undefined,
   },
};
