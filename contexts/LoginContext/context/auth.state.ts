import { AuthContextInterface } from "@/contexts/LoginContext/context/auth.interface";

export const initialContext: AuthContextInterface = {
   state: {
      isLoggedIn: false,
      email: "",
      error: null,
   },
   actions: {
      userLogin: async (): Promise<undefined> => undefined,
      logOut: async (): Promise<undefined> => undefined,
   },
};
