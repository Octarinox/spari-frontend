import {
   BranchAction,
   BranchActionType,
   BranchState,
} from "@/contexts/BranchesContext/branch.interface";

export const reducer = (
   state: BranchState,
   action: BranchAction
): BranchState => {
   const { type, payload } = action;
   switch (type) {
      case BranchActionType.SET_BRANCHES:
         return {
            ...state,
            data: payload.data || null,
         };

      default:
         return state;
   }
};
