import { UsersContextInterface } from "@/contexts/UsersContext/users.interface";

export const initialContext: UsersContextInterface = {
   state: {
      data: {},
   },
   actions: {
      getUsers: async (): Promise<undefined> => undefined,
   },
};
