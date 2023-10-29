export interface AuthState {
   isLoggedIn: boolean | null;
   email: string | null;
   error: object | null;
}

export interface AuthContextInterface {
   state: AuthState;
   actions: AuthActions;
}

export enum AuthActionType {
   LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL",
   LOGIN_IN_FAILED = "LOGIN_IN_FAILED",
}

export interface AuthActions {
   userLogin: (formData: any) => Promise<void | string>;
}

export interface AuthAction {
   type: AuthActionType;
   payload?: { email?: string; isLoggedIn?: boolean; error?: object };
}
