import {
   AuthAction,
   AuthActionType,
   AuthState,
} from "@/contexts/LoginContext/context/auth.interface";

export const reducer = (state: AuthState, action: AuthAction): AuthState => {
   const { type, payload } = action;
   switch (type) {
      case AuthActionType.LOGIN_SUCCESSFUL:
         return {
            ...state,
            isLoggedIn: true,
            role: payload?.role || null,
            email: payload?.email || null,
            id: payload?.id || null,
            perms: payload?.perms || null,
         };
      case AuthActionType.LOGIN_IN_FAILED:
         return { ...state, error: payload?.error || null };
      default:
         return state;
   }
};
