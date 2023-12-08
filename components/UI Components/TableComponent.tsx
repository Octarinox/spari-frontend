import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const TableComponent = ({
   data,
   allowedProperties,
   rowsPerPageOptions = [10, 25, 100],
}: {
   data?: any[] | null;
   allowedProperties: string[];
   rowsPerPageOptions?: number[];
}) => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

   const handleChangePage = (_: any, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   const rows = data ? data.flatMap(pageData => pageData.data) : [];
   const headRows = allowedProperties.map(property => ({
      id: property,
      label: property.toUpperCase(), // Convert to uppercase
      align: "left",
   }));

   return (
      <>
         <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "100px" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead sx={{ paddingBottom: "10px" }}>
                     <TableRow>
                        {headRows.map((headRow: any) => (
                           <TableCell
                              key={headRow.id}
                              align={headRow.align}
                              style={{
                                 minWidth: "100px",
                                 background: "#384454",
                                 color: "white",
                              }}
                           >
                              {headRow.label}
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
                        .map((row: any) => (
                           <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row._id}
                           >
                              {headRows.map((headRow: any) => (
                                 <TableCell
                                    key={headRow.id}
                                    align={headRow.align}
                                 >
                                    {row[headRow.id]}
                                 </TableCell>
                              ))}
                           </TableRow>
                        ))}
                  </TableBody>
               </Table>
            </TableContainer>
            {data && (
               <TablePagination
                  rowsPerPageOptions={rowsPerPageOptions}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  sx={{ background: "#ffffff", color: "black" }}
               />
            )}
         </Paper>
      </>
   );
};

export default TableComponent;
