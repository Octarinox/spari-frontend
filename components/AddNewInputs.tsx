"use client";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import OnlyDigits from "@/utils/OnlyDigits";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const AddNewInputs = () => {
   const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

   const addInputField = () => {
      const newId = inputFields[inputFields.length - 1].id + 1;
      setInputFields([...inputFields, { id: newId, value: "" }]);
   };

   const removeInputField = (index: any) => {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
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
               <h2
                  className="mb-1"
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <b>Queue Camera {index + 1}</b>
                  {index > 0 && (
                     <DeleteForeverIcon
                        onClick={() => removeInputField(index)}
                        sx={{ cursor: "pointer", zIndex: 1 }}
                        color="error"
                        fontSize="medium"
                     ></DeleteForeverIcon>
                  )}
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

                  <Grid
                     item
                     container
                     xs={6}
                     direction={"row"}
                     alignItems="end"
                  >
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
