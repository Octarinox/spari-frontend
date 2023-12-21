"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import OnlyDigits from "@/utils/OnlyDigits";
import { queueInputsValues } from "@/components/BranchRegister/constants";
import QueueInputs from "@/components/BranchRegister/QueueInputs";
import ManagerSelect from "@/components/UI Components/SelectManager";
import { updateBranchesRequest } from "@/httpRequests/updateBranches";
import { useUsersState } from "@/contexts/UsersContext";
import { findManager } from "@/utils/findManager";
import { toast } from "sonner";

export default function BranchEditForm({ data: branchData }: any) {
   const [queueInput, setQueueInput] = useState(queueInputsValues);
   const [manager, setManager] = useState<any>({});
   const { data } = useUsersState();

   useEffect(() => {
      setQueueInput(branchData?.cams?.queue);
   }, [branchData]);

   useEffect(() => {
      const manager = findManager(data, branchData?.users);
      setManager(manager);
   }, [data]);
   const handleQueueInputChange = (value: any) => {
      setQueueInput(value);
   };

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formDataObject = {
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
      };

      try {
         const responseData = await updateBranchesRequest(formDataObject, [
            branchData._id,
         ]);
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
               Branch Edit
            </Typography>
            <Box
               component="form"
               noValidate
               onSubmit={handleSubmit}
               sx={{ mt: 3, ml: 2 }}
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
                              defaultValue={branchData?.branchId || ""}
                              InputLabelProps={{
                                 shrink: !!branchData?.branchId,
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              required
                              fullWidth
                              id="Address"
                              autoFocus
                              label="Address"
                              name="Address"
                              autoComplete="off"
                              defaultValue={branchData?.address}
                              InputLabelProps={{
                                 shrink: !!branchData?.address,
                              }}
                           />
                        </Grid>

                        <Grid item xs={12}>
                           <ManagerSelect
                              value={manager}
                              onChange={(e: any) => {
                                 setManager(e);
                              }}
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
                                 defaultValue={branchData?.cams?.face?.name}
                                 InputLabelProps={{
                                    shrink: !!branchData?.cams?.face?.name,
                                 }}
                              />
                           </Grid>
                           <Grid item xs={6}>
                              <TextField
                                 fullWidth
                                 id="FaceIPAddress"
                                 label="IP Address"
                                 name="FaceIPAddress"
                                 autoComplete="off"
                                 defaultValue={branchData?.cams?.face?.address}
                                 InputLabelProps={{
                                    shrink: !!branchData?.cams?.face?.address,
                                 }}
                              />
                           </Grid>
                        </Grid>
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
                  Save
               </Button>
            </Box>
         </Box>
      </Container>
   );
}
