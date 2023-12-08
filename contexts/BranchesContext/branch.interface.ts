export interface BranchState {
   data: any[] | null;
}

export interface BranchContextInterface {
   state: BranchState;
   actions: BranchActions;
}

export enum BranchActionType {
   SET_BRANCHES = "SET_BRANCHES",
}

export interface BranchActions {
   getBranches: () => Promise<void | any[]>;
}

export interface BranchAction {
   type: BranchActionType;
   payload?: any;
}
