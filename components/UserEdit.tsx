"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
   id: "firstname" | "lastname" | "email";
   label: string;
   minWidth?: number;
   align?: "right";
   format?: (value: number) => string;
}

const columns: readonly Column[] = [
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
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   return (
      <>
         <div className=" flex justify-center">
            <h1 className="text-3xl font-bold text-gray-700">Users List</h1>
         </div>
         <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "100px" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead sx={{ paddingBottom: "10px" }}>
                     <TableRow>
                        {columns.map(column => (
                           <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                 minWidth: column.minWidth,
                                 background: "#384454",
                                 color: "white",
                              }}
                           >
                              {column.label}
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map(row => {
                           return (
                              <TableRow
                                 hover
                                 role="checkbox"
                                 tabIndex={-1}
                                 key={row.email}
                              >
                                 {columns.map(column => {
                                    const value = row[column.id];
                                    return (
                                       <TableCell
                                          key={column.id}
                                          align={column.align}
                                       >
                                          {column.format &&
                                          typeof value === "number"
                                             ? column.format(value)
                                             : value}
                                       </TableCell>
                                    );
                                 })}
                              </TableRow>
                           );
                        })}
                  </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
               rowsPerPageOptions={[10, 25, 100]}
               component="div"
               count={rows.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
               sx={{ background: "#384454", color: "white" }}
            />
         </Paper>
      </>
   );
}
