export interface SubjectState {
   data: any[] | null;
}

export interface SubjectContext {
   state: SubjectState;
   actions: SubjectActions;
}

export enum SubjectActionType {
   SET_SUBJECTS = "SET_SUBJECTS",
}

export interface SubjectActions {
   getSubjects: () => Promise<void | any[]>;
}

export interface SubjectAction {
   type: SubjectActionType;
   payload?: any;
}
