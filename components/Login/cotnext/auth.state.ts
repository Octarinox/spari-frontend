import { AuthContextInterface } from "@/components/Login/cotnext/auth.interface";

export const initialContext: AuthContextInterface = {
   state: {
      isLoggedIn: false,
      email: "",
      error: null,
   },
   actions: {
      userLogin: async (): Promise<undefined> => undefined,
   },
};
