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

import OnlyDigits from "@/utils/OnlyDigits";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Toaster } from "sonner";
import { DataGrid } from "@mui/x-data-grid";
import { updateBranchesRequest } from "@/httpRequests/updateBranches";

const EditBranchConfigsComponent = ({ data, allowedProperties }: any) => {
   const [servicesData, setServicesData] = useState<any>({
      faceDetect: {
         dashboardPopup: true,
         whatsApp: true,
         email: true,
      },
      queueDetect: {
         dashboardPopup: true,
         whatsApp: true,
         email: true,
      },
   });
   const [branchIds, setBranchIds] = useState([]);
   const handleCheckboxChange = (category: any, service: any) => {
      setServicesData((prevFormData: any) => ({
         ...prevFormData,
         [category]: {
            ...prevFormData[category],
            [service]: !prevFormData[category][service],
         },
      }));
   };

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const data = {
         faceAiConfig: { alertMessage: formData.get("faceAlertMessage") },
         queueConfig: {
            alertMessage: formData.get("queueAlertMessage"),
            warningOnAmount: formData.get("peopleAmount"),
         },
         serviceConfig: servicesData,
      };
      await updateBranchesRequest(data, branchIds);
   };

   const handleRowSelection = (e: any) => {
      console.log(e);
      setBranchIds(e);
   };
   const headRows = allowedProperties.map((property: string) => ({
      field: property,
      headerName: property,
      width: 150,
   }));

   return (
      <>
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
                              id="faceAlertMessage"
                              label="Alert Message"
                              name="faceAlertMessage"
                              autoComplete="off"
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <h2 className="mb-1 mt-2">
                              <b>Queue Detect Config</b>
                           </h2>
                           <TextField
                              sx={{
                                 width: {
                                    md: "415px",
                                 },
                              }}
                              required
                              fullWidth
                              id="queueAlertMessage"
                              label="Alert Message"
                              name="queueAlertMessage"
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
                                    name="peopleAmount"
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

                        <Grid container>
                           <FormGroup>
                              <h2 className="mt-2 mb-2">
                                 <b>Face Detect Services</b>
                              </h2>
                              {Object.entries(servicesData.faceDetect).map(
                                 ([service, checked]) => (
                                    <FormControlLabel
                                       key={service}
                                       control={
                                          <Checkbox
                                             defaultChecked
                                             onChange={() =>
                                                handleCheckboxChange(
                                                   "faceDetect",
                                                   service
                                                )
                                             }
                                          />
                                       }
                                       label={service}
                                    />
                                 )
                              )}
                           </FormGroup>

                           <FormGroup>
                              <h2 className="mt-2 mb-2">
                                 <b>Queue Detect Services</b>
                              </h2>
                              {Object.entries(servicesData.queueDetect).map(
                                 ([service, checked]) => (
                                    <FormControlLabel
                                       key={service}
                                       control={
                                          <Checkbox
                                             defaultChecked
                                             onChange={() =>
                                                handleCheckboxChange(
                                                   "queueDetect",
                                                   service
                                                )
                                             }
                                          />
                                       }
                                       label={service}
                                    />
                                 )
                              )}
                           </FormGroup>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Toaster richColors />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{
                        mt: 5,
                        mb: 10,
                        "&:hover": {
                           backgroundColor: "#181c24 !important",
                        },
                        backgroundColor: "#384454 !important",
                     }}
                  >
                     SAVE CONFIG
                  </Button>
               </Box>
            </Box>
         </Container>
         <div style={{ height: 400, width: "100%" }}>
            <DataGrid
               rows={data}
               columns={headRows as any}
               pagination
               rowCount={data.length}
               checkboxSelection
               getRowId={row => row._id}
               onRowSelectionModelChange={handleRowSelection}
            />
         </div>
      </>
   );
};

export default EditBranchConfigsComponent;
