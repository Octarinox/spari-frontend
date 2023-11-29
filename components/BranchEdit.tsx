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
   id: "branchID" | "address";
   label: string;
   minWidth?: number;
   align?: "right";
   format?: (value: number) => string;
}

const columns: readonly Column[] = [
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
            <h1 className="text-3xl font-bold text-gray-700">Branches List</h1>
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
                                 key={row.branchID}
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
};

export default BranchEditTable;
