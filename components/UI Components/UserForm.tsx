import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MuiTelInput } from "mui-tel-input";
import { Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import OnlyDigits from "@/utils/OnlyDigits";

import { ToastComponentFailed, ToastComponentSuccess } from "../ToastComponent";
import { Toaster } from "sonner";
import Autocomplete from "@mui/material/Autocomplete";
import { UserPermsInterface } from "@/components/UserRegister/interfaces/userRegister.interface";
import { sendUserDataToServer } from "@/components/UserRegister/SendDataToServer";

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
   const [value, setValue] = useState("");

   const permOptions: UserPermsInterface[] = [
      { label: "Face Logs", value: "face.logs" },
      { label: "Face Analytics", value: "face.analytics" },
      { label: "Face DataBase", value: "face.db" },
      { label: "Queue Logs", value: "queue.logs" },
      { label: "Queue Analytics", value: "queue.analytics" },
   ];

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
      const data = {
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
         password: formData.get("password"),
      };
      console.log(data);
      try {
         const responseData = await sendUserDataToServer(data);
         ToastComponentSuccess(responseData.data.message);
      } catch (error: any) {
         ToastComponentFailed(`${error.response.data.errors}`);
      }
   }

   const handlePermChange = (_: any, values: any): void => setPerms(values);

   const handleCheckboxChange = (category: any, service: any) => {
      setPermissions((prevFormData: any) => ({
         ...prevFormData,
         [category]: {
            ...prevFormData[category],
            [service]: !prevFormData[category][service],
         },
      }));
   };

   const handleChange = (newValue: any) => {
      setValue(newValue);
   };

   const handleRoleChange = (event: any) => {
      setRole(event.target.value);
   };
   return (
      <form onSubmit={handleSubmit}>
         <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                  <TextField
                     name="firstName"
                     required
                     fullWidth
                     id="firstName"
                     label="First Name"
                     autoFocus
                     autoComplete="off"
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
                  />
               </Grid>
               <Grid item xs={12}>
                  <MuiTelInput
                     value={value}
                     fullWidth
                     id={"number"}
                     name={"number"}
                     label="Number"
                     onChange={handleChange}
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
                  />
               </Grid>
               <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 2 }}>
                     <InputLabel id="demo-simple-select-label">Role</InputLabel>
                     <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Age"
                        name="role"
                        onChange={handleRoleChange}
                     >
                        <MenuItem value={"Admin"}>Admin</MenuItem>
                        <MenuItem value={"Manager"}>Manager</MenuItem>
                     </Select>
                  </FormControl>
                  {role === "Manager" && (
                     <Grid item xs={12} sx={{ mb: 2 }}>
                        <Autocomplete
                           multiple
                           id="permissions"
                           options={permOptions.map(
                              (option: UserPermsInterface) => option.label
                           )}
                           value={perms}
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
                  <Grid item xs={12}>
                     <TextField
                        required
                        fullWidth
                        // sx={{
                        //    width: {
                        //       xs: 320,
                        //       sm: 400,
                        //    },
                        // }}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                     />
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
                  mb: 2,
                  "&:hover": {
                     backgroundColor: "#181c24 !important",
                  },
                  backgroundColor: "#384454 !important",
               }}
            >
               Register User
            </Button>
         </Box>
      </form>
   );
}
