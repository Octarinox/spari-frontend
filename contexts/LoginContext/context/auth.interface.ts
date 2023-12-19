export interface AuthState {
   isLoggedIn: boolean | null;
   email: string | null;
   role?: string | null;
   error: object | null;
   perms?: any[] | null;
   id?: string | null;
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
   userLogin: (email: string, password: string) => Promise<void | string>;
   logOut: () => Promise<void | string>;
   checkAuth: () => Promise<void | string>;
}

export interface AuthAction {
   type: AuthActionType;
   payload?: {
      email?: string;
      isLoggedIn?: boolean;
      error?: object;
      perms?: any[];
      id?: string;
      role?: string;
   };
}
