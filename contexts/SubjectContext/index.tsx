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

import { reducer } from "./subject.reducer";
import {
   SubjectActionType,
   SubjectContext as SubjectContextInterface,
} from "@/contexts/SubjectContext/subject.interface";
import { initialContext } from "@/contexts/SubjectContext/subject.state";

export const SubjectContext =
   createContext<SubjectContextInterface>(initialContext);

export const SubjectProvider: FC<{
   children: ReactNode;
}> = ({ children }) => {
   const initialState = {
      data: [],
   };
   const [state, dispatch] = useReducer(reducer, initialState);
   const router = useRouter();
   const getSubjects = useCallback(async () => {
      try {
         // const data = await getSubjectsRequest();
         dispatch({ payload: { data }, type: SubjectActionType.SET_SUBJECTS });
      } catch (error: any) {
         console.log(error);
      }
   }, []);

   const value = useMemo(
      () => ({ state, actions: { getSubjects } }),
      [state, getSubjects]
   );

   return (
      <SubjectContext.Provider value={value}>
         {children}
      </SubjectContext.Provider>
   );
};
export const useSubjectState = () => {
   const { state } = useContext(SubjectContext);
   return state;
};

export const useSubjectActions = () => {
   const { actions } = useContext(SubjectContext);
   return actions;
};
