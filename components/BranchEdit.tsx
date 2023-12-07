"use client";

import React from "react";
import TableComponent from "./UI Components/TableComponent";

interface Column {
   id: "branchID" | "address";
   label: string;
   minWidth?: number;
   align?: "right";
   format?: (value: number) => string;
}

const columns: Column[] = [
   { id: "branchID", label: "Branch ID", minWidth: 170 },
   { id: "address", label: "Address", minWidth: 100 },
];

interface Data {
   branchID: string;
   address: string;
}

function createData(branchID: string, address: string): Data {
   const density = address;
   return { branchID, address };
}

const rows = [
   createData("Firstname", "Lastname"),
   createData("Fiasdrstname", "Lasasdatname"),
   createData("Firsfstname", "Lasgftname"),
   createData("Firscxtname", "Lagdstname"),
   createData("Firstnehame", "Lasfdtname"),
   createData("Firshstname", "Lastfdname"),
];

const BranchEditTable = () => {
   return (
      <div>
         <div className=" flex justify-center">
            <h1 className="text-3xl font-bold text-gray-700">Branch List</h1>
         </div>
         <TableComponent columns={columns} />
      </div>
   );
};

export default BranchEditTable;
