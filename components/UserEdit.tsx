"use client";

import React from "react";
import TableComponent from "./UI Components/TableComponent";

interface Column {
   id: "firstname" | "lastname" | "email";
   label: string;
   minWidth?: number;
   align?: "right";
   format?: (value: number) => string;
}

const columns: Column[] = [
   { id: "firstname", label: "Firstname", minWidth: 170 },
   { id: "lastname", label: "Lastname", minWidth: 100 },
   {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
   },
];

interface Data {
   firstname: string;
   lastname: string;
   email: number;
}

function createData(firstname: string, lastname: string, email: any): Data {
   const density = email;
   return { firstname, lastname, email };
}

const rows = [
   createData("Firstname", "Lastname", "E1mail@example.com"),
   createData("Firstname", "Lastname", "E2mfail@example.com"),
   createData("Firstname", "Lastname", "E3madil@example.com"),
   createData("Firstname", "Lastname", "E4maivl@example.com"),
   createData("Firstname", "Lastname", "E5maail@example.com"),
   createData("Firstname", "Lastname", "E6maisl@example.com"),
   createData("Firstname", "Lastname", "E7maihl@example.com"),
   createData("Firstname", "Lastname", "E8mailg@example.com"),
   createData("Firstname", "Lastname", "E9ma3il@example.com"),
   createData("Firstname", "Lastname", "E10majil@example.com"),
   createData("Firstname", "Lastname", "E11mkail@example.com"),
   createData("Firstname", "Lastname", "E12mlail@example.com"),
   createData("Firstname", "Lastname", "E13ma;il@example.com"),
   createData("Firstname", "Lastname", "E14ma'il@example.com"),
   createData("Firstname", "Lastname", "E15macil@example.com"),
   createData("Firstname", "Lastname", "E16mavil@example.com"),
   createData("Firstname", "Lastname", "E17mabil@example.com"),
   createData("Firstname", "Lastname", "E18mainl@example.com"),
   createData("Firstname", "Lastname", "E19maiml@example.com"),
   createData("Firstname", "Lastname", "E20mai,l@example.com"),
   createData("Firstname", "Lastname", "E21mai.l@example.com"),
   createData("Firstname", "Lastname", "E22mai]l@example.com"),
];

export default function UserEdit() {
   return (
      <>
         <div>
            <div className=" flex justify-center">
               <h1 className="text-3xl font-bold text-gray-700">Users List</h1>
            </div>
            <TableComponent columns={columns} />
         </div>
      </>
   );
}
