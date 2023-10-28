import {
   AuthAction,
   AuthActionType,
   AuthState,
} from "@/components/Login/cotnext/auth.interface";

export const reducer = (state: AuthState, action: AuthAction): AuthState => {
   const { type, payload } = action;
   switch (type) {
      case AuthActionType.LOGIN_SUCCESSFUL:
         return {
            ...state,
            isLoggedIn: payload?.isLoggedIn || null,
            email: payload?.email || null,
         };
      case AuthActionType.LOGIN_IN_FAILED:
         return { ...state, error: payload?.error || null };
      default:
         return state;
   }
};
