"use client";
import {
   createContext,
   FC,
   ReactNode,
   useCallback,
   useContext,
   useMemo,
   useReducer,
} from "react";
import { useRouter } from "next/navigation";
import {
   BranchActionType,
   BranchContextInterface,
} from "@/contexts/BranchesContext/branch.interface";
import { initialContext } from "@/contexts/BranchesContext/branch.state";
import { reducer } from "./branch.reducer";
import { getBranchesRequest } from "@/httpRequests/getBranches";

export const BranchContext =
   createContext<BranchContextInterface>(initialContext);

export const BranchProvider: FC<{
   children: ReactNode;
}> = ({ children }) => {
   const initialState = {
      data: [],
   };
   const [state, dispatch] = useReducer(reducer, initialState);
   const router = useRouter();
   const getBranches = useCallback(async () => {
      try {
         const data = await getBranchesRequest();
         dispatch({ payload: { data }, type: BranchActionType.SET_BRANCHES });
      } catch (error: any) {
         console.log(error);
      }
   }, []);

   const value = useMemo(
      () => ({ state, actions: { getBranches } }),
      [state, getBranches]
   );

   return (
      <BranchContext.Provider value={value}>{children}</BranchContext.Provider>
   );
};
export const useBranchState = () => {
   const { state } = useContext(BranchContext);
   return state;
};

export const useBranchActions = () => {
   const { actions } = useContext(BranchContext);
   return actions;
};
