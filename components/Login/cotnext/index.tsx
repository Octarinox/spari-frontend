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
import { reducer } from "@/components/Login/cotnext/auth.reducer";
import { AuthContextInterface } from "@/components/Login/cotnext/auth.interface";
import { initialContext } from "@/components/Login/cotnext/auth.state";
import { useRouter } from "next/navigation";
import axios from "axios";

export const AuthContext = createContext<AuthContextInterface>(initialContext);

export const AuthProvider: FC<{
   children: ReactNode;
}> = ({ children }) => {
   const initialState = {
      isLoggedIn: false,
      email: "",
      error: null,
   };
   const [state, dispatch] = useReducer(reducer, initialState);
   const router = useRouter();
   const userLogin = useCallback(async (formData: any) => {
      try {
         const data = await axios.post(
            "https://octarinox.tech/api/user/login",
            formData,
            {
               headers: {
                  "Content-Type": "application/json",
               },
               withCredentials: true,
            }
         );
         router.push("/");
      } catch (e) {
         console.log(e);
      }
   }, []);

   const value = useMemo(
      () => ({ state, actions: { userLogin } }),
      [state, userLogin]
   );

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuthState = () => {
   const { state } = useContext(AuthContext);
   return state;
};

export const useAuthActions = () => {
   const { actions } = useContext(AuthContext);
   return actions;
};
