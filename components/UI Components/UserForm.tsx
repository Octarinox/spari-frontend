import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MuiTelInput } from "mui-tel-input";
import {
   Chip,
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   Select,
} from "@mui/material";
import OnlyDigits from "@/utils/OnlyDigits";

import { ToastComponentFailed, ToastComponentSuccess } from "../ToastComponent";
import { Toaster } from "sonner";
import { UserPermsInterface } from "@/components/UserRegister/interfaces/userRegister.interface";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";

export default function UserForm({
   data,
   requestHandler,
   buttonText,
   passwordRequired = true,
}: any) {
   const [showPassword, setShowPassword] = React.useState(false);
   const [phoneNumber, setPhoneNumber] = React.useState("");
   const [perms, setPerms] = useState([]);
   const [role, setRole] = useState("");
   const permOptions: UserPermsInterface[] = [
      { label: "Face Logs", value: "face.logs" },
      { label: "Face Analytics", value: "face.analytics" },
      { label: "Face DataBase", value: "face.db" },
      { label: "Queue Logs", value: "queue.logs" },
      { label: "Queue Analytics", value: "queue.analytics" },
   ];

   useEffect(() => {
      setPhoneNumber(data?.phoneNumber);
   }, [data]);

   useEffect(() => {
      setPerms(data?.perms);
   }, [data]);

   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const userData = {
         firstName: formData.get("firstName"),
         lastName: formData.get("lastName"),
         email: formData.get("email"),
         phoneNumber: (formData.get("number") as string)?.replace(/\s+/g, ""),
         nationalId: formData.get("personalID"),
         role: formData.get("role"),
         perms: perms.map(
            (label: string) =>
               permOptions.find(
                  (perm: UserPermsInterface): boolean => perm.label === label
               )?.value
         ),
         password: formData.get("password") || undefined,
      };
      try {
         const responseData = await requestHandler(userData, data?._id);
         ToastComponentSuccess(responseData?.data?.message);
      } catch (error: any) {
         ToastComponentFailed(`${error.response.data.errors}`);
      }
   }

   console.log(data);
   useEffect(() => {
      if (data) {
         setRole(data.role);
      }
   }, [data]);
   const handlePermChange = (_: any, values: any): void => setPerms(values);

   const handleRoleChange = (event: any) => {
      setRole(event.target.value);
   };
   return (
      <form onSubmit={handleSubmit} autoComplete={"off"}>
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
                     InputLabelProps={
                        data && {
                           shrink: !!data?.firstName,
                        }
                     }
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
                     InputLabelProps={
                        data && {
                           shrink: !!data?.lastName,
                        }
                     }
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
                     InputLabelProps={
                        data && {
                           shrink: !!data?.email,
                        }
                     }
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
                     InputLabelProps={
                        data && {
                           shrink: !!data?.nationalId,
                        }
                     }
                  />
               </Grid>
               <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 2 }}>
                     <InputLabel id="demo-simple-select-label">Role</InputLabel>
                     <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        name="role"
                        defaultValue={role}
                        onChange={handleRoleChange}
                     >
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"manager"}>Manager</MenuItem>
                     </Select>
                  </FormControl>
                  {role === "manager" && (
                     <Grid item xs={12} sx={{ mb: 2 }}>
                        <Autocomplete
                           multiple
                           id="permissions"
                           options={permOptions.map(
                              (option: UserPermsInterface) => option.label
                           )}
                           value={perms}
                           defaultValue={perms}
                           onChange={handlePermChange}
                           renderTags={(value: string[], getTagProps: any) =>
                              value.map((option: string, index: number) => (
                                 <Chip
                                    variant="outlined"
                                    label={option}
                                    {...getTagProps({ index })}
                                    onDelete={(): void => {
                                       const updatedPermissions: never[] = [
                                          ...perms,
                                       ];
                                       updatedPermissions.splice(index, 1);
                                       setPerms(updatedPermissions);
                                    }}
                                 />
                              ))
                           }
                           renderInput={params => (
                              <TextField
                                 {...params}
                                 fullWidth
                                 label="Permissions"
                                 name="permissions"
                              />
                           )}
                        />
                     </Grid>
                  )}
               </Grid>
               <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 2 }}>
                     <InputLabel htmlFor="password">Password</InputLabel>
                     <OutlinedInput
                        required={passwordRequired}
                        fullWidth
                        name="password"
                        label="password"
                        autoComplete={"new-password"}
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
