export interface UsersState {
   data: any | null;
}

export interface UsersContextInterface {
   state: UsersState;
   actions: UsersActions;
}

export enum UsersActionType {
   SET_USERS = "SET_USERS",
}

export interface UsersActions {
   getUsers: () => Promise<void | any[]>;
}

export interface UsersAction {
   type: UsersActionType;
   payload?: any;
}
