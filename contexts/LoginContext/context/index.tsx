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
import { reducer } from "@/contexts/LoginContext/context/auth.reducer";
import { AuthContextInterface } from "@/contexts/LoginContext/context/auth.interface";
import { initialContext } from "@/contexts/LoginContext/context/auth.state";
import { ToastComponentFailed } from "@/components/ToastComponent";
import { useRouter } from "next/navigation";
import { url } from "@/shared/constants/shared-constants";

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
   const userLogin = useCallback(
      async (email: string, password: string) => {
         try {
            const res = await fetch(`${url}/next-api/login`, {
               method: "POST",
               body: JSON.stringify({ email, password }),
               headers: {
                  "Content-Type": "application/json",
               },
               credentials: "include",
            });
            const data = await res.json();
            localStorage.setItem("jwtToken", data.token);
            router.push("/dashboard");
         } catch (error: any) {
            ToastComponentFailed(`Error while sending data: ${error.message}`);
            console.log(error);
         }
      },
      [router]
   );
   const logOut = useCallback(async () => {
      await fetch(`${url}/next-api/logout`, {
         method: "POST",
         credentials: "include",
      });

      localStorage.removeItem("jwtToken");
      router.refresh();
   }, [router]);

   const value = useMemo(
      () => ({ state, actions: { userLogin, logOut } }),
      [state, userLogin, logOut]
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
