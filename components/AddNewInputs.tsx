"use client";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import OnlyDigits from "@/utils/OnlyDigits";
const AddNewInputs = () => {
   const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

   const addInputField = () => {
      const newId = inputFields[inputFields.length - 1].id + 1;
      setInputFields([...inputFields, { id: newId, value: "" }]);
   };

   const handleInputChange = (index: any, event: any) => {
      const values = [...inputFields];
      values[index].value = event.target.value;
      setInputFields(values);
   };
   return (
      <Grid container spacing={2}>
         {inputFields.map((input, index) => (
            <Grid key={input.id} item xs={12}>
               <h2 className="mb-1">
                  <b>Queue Camera {index + 1}</b>
               </h2>
               <Grid container spacing={2}>
                  <Grid item xs={6}>
                     <TextField
                        name={`Name${index}`}
                        fullWidth
                        id={`Name${index}`}
                        label="Name"
                        autoFocus
                        autoComplete="off"
                        type="text"
                        onInput={OnlyDigits}
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <TextField
                        fullWidth
                        id={`IPAddress${index}`}
                        label="IP Address"
                        name={`IPAddress${index}`}
                        autoComplete="off"
                     />
                  </Grid>
               </Grid>
            </Grid>
         ))}
         <Button
            sx={{
               mt: 5,
               mb: 2,
               ml: 2,
               "&:hover": {
                  backgroundColor: "#181c24 !important",
               },
               backgroundColor: "#384454 !important",
            }}
            onClick={addInputField}
            variant="contained"
         >
            Add New Camera
         </Button>
      </Grid>
   );
};
export default AddNewInputs;
