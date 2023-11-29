"use client";
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import OnlyDigits from "@/utils/OnlyDigits";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import QueueInputs from "./QueueInputs";
import { queueInputsValues } from "@/components/BranchRegister/constants";

export default function BranchRegisterForm() {
   const [queueInput, setQueueInput] = useState(queueInputsValues);

   const handleQueueInputChange = (value: any) => {
      setQueueInput(value);
   };
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      console.log({
         branchId: formData.get("branchID"),
         address: formData.get("Address"),
         password: formData.get("Password"),
         cams: {
            queue: queueInput,
            face: {
               name: formData.get("facecamName"),
               address: 'formData.get("FaceIPAddress"),',
            },
         },
         selectedManager: formData.get("combo-box-demo"),
         alertMessage: formData.get("alertMessage"),
         peopleAmount: formData.get("PeopleAmount"),
      });
   };
   const managersList: any = [
      { label: "Manager#1,", personalID: "12312312123" },
      { label: "Manager#2,", personalID: "12312312123" },
      { label: "Manager#3,", personalID: "12312312123" },
      { label: "Manager#4,", personalID: "12312312123" },
      { label: "Manager#5,", personalID: "12312312123" },
   ];
   const headManagersList: any = [
      { label: "Head Manager#1,", personalID: "12312312123" },
      { label: "Head Manager#2,", personalID: "12312312123" },
      { label: "Head Manager#3,", personalID: "12312312123" },
      { label: "Head Manager#4,", personalID: "12312312123" },
      { label: "Head Manager#5,", personalID: "12312312123" },
   ];

   return (
      <Container
         sx={{
            marginLeft: {
               md: "300px",
               sm: "200px",
               lg: "350px",
            },
         }}
         component="main"
         maxWidth="xs"
      >
         <Box
            sx={{
               marginTop: 8,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: "#384454" }}>
               <StorefrontIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Branch Register
            </Typography>
            <Box
               component="form"
               noValidate
               onSubmit={handleSubmit}
               sx={{ mt: 3 }}
            >
               <Grid container item xs={12} spacing={2} direction="row">
                  <Grid>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              name="branchID"
                              required
                              fullWidth
                              id="branchID"
                              label="Branch ID"
                              autoFocus
                              autoComplete="off"
                              type="text"
                              onInput={OnlyDigits}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              required
                              fullWidth
                              id="Address"
                              label="Address"
                              name="Address"
                              autoComplete="off"
                           />
                        </Grid>

                        <Grid item xs={12}>
                           <TextField
                              required
                              fullWidth
                              id="Password"
                              label="Password"
                              name="Password"
                              autoComplete="off"
                           />
                        </Grid>

                        <Grid item xs={12}>
                           <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={managersList}
                              getOptionLabel={(option: any) =>
                                 `${option.label} ${option.personalID}`
                              }
                              renderInput={params => (
                                 <TextField
                                    required
                                    {...params}
                                    name="Managers List"
                                    label="Managers List"
                                 />
                              )}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={headManagersList}
                              getOptionLabel={(option: any) =>
                                 `${option.label} ${option.personalID}`
                              }
                              sx={{ mb: 2 }}
                              renderInput={params => (
                                 <TextField
                                    required
                                    {...params}
                                    name="Head Managers List"
                                    label="Head Managers List"
                                 />
                              )}
                           />
                        </Grid>
                     </Grid>

                     <Grid container>
                        <QueueInputs
                           queueInput={queueInput}
                           handleQueueInputChange={handleQueueInputChange}
                        />
                        <h2 className="mb-1">
                           <b>Face Detection Camera</b>
                        </h2>
                        <Grid container spacing={2}>
                           <Grid item xs={6}>
                              <TextField
                                 name="facecamName"
                                 fullWidth
                                 id="facecamName"
                                 label="Name"
                                 autoFocus
                                 autoComplete="off"
                                 type="text"
                              />
                           </Grid>
                           <Grid item xs={6}>
                              <TextField
                                 fullWidth
                                 id="FaceIPAddress"
                                 label="IP Address"
                                 name="FaceIPAddress"
                                 autoComplete="off"
                              />
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid>
                     <Grid item xs={12}>
                        <h2 className="mb-1 mt-2">
                           <b>Face Detect Config</b>
                        </h2>
                        <TextField
                           sx={{
                              width: {
                                 md: "415px",
                              },
                           }}
                           required
                           fullWidth
                           id="alertMessage"
                           label="Alert Message"
                           name="alertMessage"
                           autoComplete="off"
                        />
                     </Grid>
                     <Grid container>
                        <h2 className="mb-1 mt-4">
                           <b>People Amount</b>
                        </h2>
                        <Grid container spacing={2}>
                           <Grid item xs={4}>
                              <TextField
                                 name="PeopleAmount"
                                 fullWidth
                                 id="PeopleAmount"
                                 autoFocus
                                 autoComplete="off"
                                 type="text"
                                 onInput={OnlyDigits}
                              />
                           </Grid>
                        </Grid>
                     </Grid>
                     <h2 className="mt-2 mb-2">
                        <b>Services</b>
                     </h2>
                     <Grid container>
                        <FormGroup>
                           <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Dashboard Popup"
                           />
                           <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Whats App"
                           />
                           <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Email"
                           />
                        </FormGroup>
                     </Grid>
                  </Grid>
               </Grid>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                     mt: 5,
                     mb: 2,
                     "&:hover": {
                        backgroundColor: "#181c24 !important",
                     },
                     backgroundColor: "#384454 !important",
                  }}
               >
                  Register Branch
               </Button>
            </Box>
         </Box>
      </Container>
   );
}