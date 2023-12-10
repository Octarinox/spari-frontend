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
import { initialContext } from "@/contexts/UsersContext/users.state";
import { reducer } from "./users.reducer";
import {
   UsersActionType,
   UsersContextInterface,
} from "@/contexts/UsersContext/users.interface";
import { getUsersRequest } from "@/httpRequests/getUsersRequest";

export const UsersContext =
   createContext<UsersContextInterface>(initialContext);

export const UsersProvider: FC<{
   children: ReactNode;
}> = ({ children }) => {
   const initialState = {
      data: [],
   };
   const [state, dispatch] = useReducer(reducer, initialState);
   const router = useRouter();
   const getUsers = useCallback(async () => {
      try {
         const data = await getUsersRequest();
         dispatch({ payload: { data }, type: UsersActionType.SET_USERS });
      } catch (error: any) {
         console.log(error);
      }
   }, []);

   const value = useMemo(
      () => ({ state, actions: { getUsers } }),
      [state, getUsers]
   );

   return (
      <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
   );
};
export const useUsersState = () => {
   const { state } = useContext(UsersContext);
   return state;
};

export const useUsersActions = () => {
   const { actions } = useContext(UsersContext);
   return actions;
};
