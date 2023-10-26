"use client";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Login/Login";
const initialState = {
   isLoggedIn: false,
   email: "",
};
interface ContextProps {
   email: string;
   isLoggedIn: boolean;
   dispatch: React.Dispatch<any>;
   state: any;
}
export const GlobalContext = createContext<ContextProps>({
   email: "",
   isLoggedIn: false,
   dispatch: () => {},
   state: initialState,
});

export const GlobalContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
         {children}
      </GlobalContext.Provider>
   );
};
export const useGlobalContext = () => useContext(GlobalContext);
