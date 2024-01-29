import { useState } from "react";

export function useDataset() {
   const [dataSet, setDataSet] = useState<any>([
      {
         label: "Queue Data",
         data: [],
         backgroundColor: "#3c45c7",
      },
   ]);

   function updateDataset(newDataset: any[]) {
      setDataSet(newDataset);
   }

   return [dataSet, updateDataset];
}
