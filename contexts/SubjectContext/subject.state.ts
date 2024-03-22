import { SubjectContext } from "@/contexts/SubjectContext/subject.interface";

export const initialContext: SubjectContext = {
   state: {
      data: [],
   },
   actions: {
      getSubjects: async (): Promise<undefined> => undefined,
   },
};
