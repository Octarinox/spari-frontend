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
import {
   AuthActionType,
   AuthContextInterface,
} from "@/contexts/LoginContext/context/auth.interface";
import { initialContext } from "@/contexts/LoginContext/context/auth.state";
import { useRouter } from "next/navigation";
import { url } from "@/shared/constants/shared-constants";
import axiosInstance from "@/axios/axios-instance";
import { toast } from "sonner";

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
            dispatch({
               payload: {
                  email: data.email,
                  role: data.role,
                  perms: data.perms,
                  id: data.id,
               },
               type: AuthActionType.LOGIN_SUCCESSFUL,
            });
            router.push("/dashboard");
            router.refresh();
         } catch (error: any) {
            toast.error(`Error while sending data: ${error.message}`);
            console.log(error);
         }
      },
      [router]
   );
   const checkAuth = useCallback(async () => {
      try {
         const res = await axiosInstance.get("/auth/user/check-auth");
         const data = await res.data.user;
         console.log("checkauth");
         dispatch({
            payload: {
               email: data.email,
               role: data.role,
               id: data.id,
               perms: data.perms,
            },
            type: AuthActionType.LOGIN_SUCCESSFUL,
         });
      } catch (error: any) {
         toast.error(`Error while sending data: ${error.message}`);
         console.log(error);
      }
   }, []);
   const logOut = useCallback(async () => {
      await fetch(`${url}/next-api/logout`, {
         method: "POST",
         credentials: "include",
      });

      localStorage.removeItem("jwtToken");
      router.refresh();
   }, [router]);

   const value = useMemo(
      () => ({ state, actions: { userLogin, logOut, checkAuth } }),
      [state, userLogin, logOut, checkAuth]
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
