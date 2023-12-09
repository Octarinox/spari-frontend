export function filterBranchData(
   branchData: any,
   selectedBranchId: string | string[]
) {
   return branchData.filter(
      (item: any) => item.branch_id.toString() === selectedBranchId
   );
}
