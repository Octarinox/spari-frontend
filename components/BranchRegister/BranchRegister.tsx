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
import QueueInputs from "./QueueInputs";
import { queueInputsValues } from "@/components/BranchRegister/constants";
import { sendDataToServer } from "@/components/BranchRegister/sendDataToServer";
import SelectManagers from "@/components/UI/SelectManager";
import { toast } from "sonner";
import {
   faceDetectAlertMessage,
   queueAlertMessage,
} from "@/local-constants/alertMessages";

export default function BranchRegisterForm() {
   const [queueInput, setQueueInput] = useState(queueInputsValues);
   const [manager, setManager] = useState<any>({});
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
   const handleCheckboxChange = (category: any, service: any) => {
      setServicesData((prevFormData: any) => ({
         ...prevFormData,
         [category]: {
            ...prevFormData[category],
            [service]: !prevFormData[category][service],
         },
      }));
   };
   const handleQueueInputChange = (value: any) => {
      setQueueInput(value);
   };
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const data = {
         branchId: formData.get("branchID"),
         address: formData.get("Address"),
         users: [manager?._id],
         cams: {
            queue: queueInput,
            face: {
               name: formData.get("facecamName"),
               address: formData.get("FaceIPAddress"),
            },
         },
         faceAiConfig: { alertMessage: formData.get("faceAlertMessage") },
         queueConfig: {
            alertMessage: formData.get("queueAlertMessage"),
            warningOnAmount: formData.get("peopleAmount"),
         },
         serviceConfig: servicesData,
      };
      try {
         const responseData = await sendDataToServer(data);

         toast.success(responseData.data.message);
      } catch (error: any) {
         toast.error(`${error.response.data.errors}`);
      }
   };

   return (
      <Container component="main" maxWidth="xs">
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
                           <SelectManagers
                              onChange={(manager: any) => setManager(manager)}
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
                           maxRows={10}
                           multiline
                           fullWidth
                           autoFocus
                           defaultValue={faceDetectAlertMessage}
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
                           multiline
                           autoFocus
                           maxRows={10}
                           defaultValue={queueAlertMessage}
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
