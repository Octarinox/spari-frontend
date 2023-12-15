"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const QueueInputs = (props: any) => {
   const { queueInput, handleQueueInputChange } = props;
   console.log(queueInput);
   const addInputField = () => {
      const newId = queueInput[queueInput.length - 1].id + 1;
      handleQueueInputChange([
         ...queueInput,
         { id: newId, name: "", ipaddress: "" },
      ]);
   };

   const removeInputField = (index: any) => {
      const values = [...queueInput];
      values.splice(index, 1);
      handleQueueInputChange(values);
   };
   const handleInputChange = (event: any, index: number) => {
      const values = [...queueInput];
      const identifier = event.target.name;
      values[index][identifier] = event.target.value;
      handleQueueInputChange(values);
   };

   return (
      <Grid container spacing={2}>
         {queueInput?.map((input: any, index: any) => (
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
                  {input.id !== 1 && (
                     <DeleteForeverIcon
                        onClick={() => removeInputField(index)}
                        sx={{
                           ml: 2,
                           cursor: "pointer",
                           zIndex: 1,

                           marginLeft: {
                              xs: "140px",
                           },
                           position: "relative",
                        }}
                        color="error"
                        fontSize="medium"
                     />
                  )}
               </h2>

               <Grid container spacing={2}>
                  <Grid item xs={6}>
                     <TextField
                        name="name"
                        fullWidth
                        id={`Name${index}`}
                        label="Name"
                        autoFocus
                        autoComplete="off"
                        defaultValue={input?.name}
                        type="text"
                        InputLabelProps={{
                           shrink: !!input?.name,
                        }}
                        onChange={e => handleInputChange(e, index)}
                     />
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     container
                     direction="row"
                     alignItems="center"
                  >
                     <TextField
                        fullWidth
                        id={`IPAddress${index}`}
                        label="IP Address"
                        onChange={e => handleInputChange(e, index)}
                        name="ipaddress"
                        defaultValue={input?.ipaddress}
                        autoComplete="off"
                        InputLabelProps={{
                           shrink: !!input?.ipaddress,
                        }}
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

export default QueueInputs;
