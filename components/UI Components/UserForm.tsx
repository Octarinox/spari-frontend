import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MuiTelInput } from "mui-tel-input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
} from "@mui/material";
import OnlyDigits from "@/utils/OnlyDigits";

import { ToastComponentFailed, ToastComponentSuccess } from "../ToastComponent";
import { Toaster } from "sonner";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function UserForm({
   data,
   requestHandler,
   buttonText,
   passwordRequired = true,
}: any) {
   const [showPassword, setShowPassword] = React.useState(false);
   const [phoneNumber, setPhoneNumber] = React.useState("");
   const [permissions, setPermissions] = useState<any>({
      facePermissions: {
         analytics: true,
         logs: true,
         database: true,
      },
      queuePermissions: {
         analytics: true,
         logs: true,
      },
   });
   useEffect(() => {
      setPhoneNumber(data?.phoneNumber);
   }, []);

   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const userData = {
         firstName: formData.get("firstName"),
         lastName: formData.get("lastName"),
         email: formData.get("email"),
         phoneNumber: (formData.get("number") as string)?.replace(/\s+/g, ""),
         nationalId: formData.get("personalID"),
         permissions,
         password: formData.get("password") || undefined,
      };
      try {
         const responseData = await requestHandler(userData, data?._id);
         ToastComponentSuccess(responseData?.data?.message);
      } catch (error: any) {
         ToastComponentFailed(`${error.response.data.errors}`);
      }
   }

   const handleCheckboxChange = (category: any, service: any) => {
      setPermissions((prevFormData: any) => ({
         ...prevFormData,
         [category]: {
            ...prevFormData[category],
            [service]: !prevFormData[category][service],
         },
      }));
   };
   return (
      <form onSubmit={handleSubmit} autoComplete="off">
         <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                  <TextField
                     name="firstName"
                     required
                     fullWidth
                     id="firstName"
                     label="First Name"
                     autoComplete="off"
                     defaultValue={data?.firstName || ""}
                     InputLabelProps={{
                        shrink: !!data?.firstName,
                     }}
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     fullWidth
                     id="lastName"
                     label="Last Name"
                     name="lastName"
                     autoComplete="off"
                     defaultValue={data?.lastName || ""}
                     InputLabelProps={{
                        shrink: !!data?.lastName,
                     }}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoComplete="off"
                     defaultValue={data?.email || ""}
                     InputLabelProps={{
                        shrink: !!data?.email,
                     }}
                  />
               </Grid>
               <Grid item xs={12}>
                  <MuiTelInput
                     fullWidth
                     id="number"
                     name="number"
                     label="Number"
                     value={phoneNumber}
                     onChange={value => setPhoneNumber(value)}
                     autoComplete="off"
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     required
                     fullWidth
                     id="personalID"
                     label="Personal ID"
                     name="personalID"
                     type="text"
                     onInput={OnlyDigits}
                     autoComplete="off"
                     defaultValue={data?.nationalId || ""}
                     InputLabelProps={{
                        shrink: !!data?.nationalId,
                     }}
                  />
               </Grid>
               <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 2 }}>
                     <InputLabel htmlFor="password">Password</InputLabel>
                     <OutlinedInput
                        required={passwordRequired}
                        fullWidth
                        name="password"
                        label="password"
                        id="password"
                        defaultValue={data?.password}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={() => setShowPassword(!showPassword)}
                                 onMouseDown={event => event.preventDefault()}
                                 edge="end"
                              >
                                 {showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 2 }}>
                     <FormGroup>
                        <h2 className="mt-2 mb-2">
                           <b>Face Permissions</b>
                        </h2>
                        {Object.entries(permissions.facePermissions).map(
                           ([service, checked]) => (
                              <FormControlLabel
                                 key={service}
                                 control={
                                    <Checkbox
                                       defaultChecked
                                       onChange={() =>
                                          handleCheckboxChange(
                                             "facePermissions",
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
                           <b>Queue Permissions</b>
                        </h2>
                        {Object.entries(permissions.queuePermissions).map(
                           ([service, checked]) => (
                              <FormControlLabel
                                 key={service}
                                 control={
                                    <Checkbox
                                       defaultChecked
                                       onChange={() =>
                                          handleCheckboxChange(
                                             "queuePermissions",
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
                  </FormControl>
               </Grid>
            </Grid>
            <Toaster richColors />
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
               {buttonText || "Register User"}
            </Button>
         </Box>
      </form>
   );
}
