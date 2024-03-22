import {
   SubjectAction,
   SubjectActionType,
   SubjectState,
} from "@/contexts/SubjectContext/subject.interface";

export const reducer = (
   state: SubjectState,
   action: SubjectAction
): SubjectState => {
   const { type, payload } = action;
   switch (type) {
      case SubjectActionType.SET_SUBJECTS:
         return {
            ...state,
            data: payload.data || null,
         };

      default:
         return state;
   }
};
