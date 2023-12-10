import {
   UsersAction,
   UsersActionType,
   UsersState,
} from "@/contexts/UsersContext/users.interface";

export const reducer = (state: UsersState, action: UsersAction): UsersState => {
   const { type, payload } = action;
   switch (type) {
      case UsersActionType.SET_USERS:
         return {
            ...state,
            data: payload.data || null,
         };

      default:
         return state;
   }
};
