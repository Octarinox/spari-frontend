"use client";
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MuiTelInput } from "mui-tel-input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import OnlyDigits from "@/utils/OnlyDigits";

export default function UserRegisterForm() {
   const [role, setRole] = useState("");
   const [value, setValue] = useState("");
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
         email: data.get("email"),
         password: data.get("password"),
      });
   };
   const branches = [
      { label: "Branch#1" },
      { label: "Branch#2" },
      { label: "Branch#3" },
      { label: "Branch#4" },
      { label: "Branch#5" },
   ];
   const handleChange = (newValue: any) => {
      setValue(newValue);
   };
   const handleRoleChange = (event: any) => {
      setRole(event.target.value);
      console.log(role);
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
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               User Register
            </Typography>
            <Box
               component="form"
               noValidate
               onSubmit={handleSubmit}
               sx={{ mt: 3 }}
            >
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
                        <InputLabel id="demo-simple-select-label">
                           Role
                        </InputLabel>
                        <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={role}
                           label="Age"
                           onChange={handleRoleChange}
                        >
                           <MenuItem value={"Manager"}>Manager</MenuItem>
                           <MenuItem value={"HeadManager"}>
                              Head Manager
                           </MenuItem>
                           <MenuItem value={"Admin"}>Admin</MenuItem>
                        </Select>
                     </FormControl>
                     <Grid item xs={10}>
                        {role === "Admin" ? (
                           <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                           />
                        ) : role === "Manager" || role === "HeadManager" ? (
                           <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={branches}
                              sx={{ width: 350, mb: 2 }}
                              renderInput={params => (
                                 <TextField
                                    required
                                    {...params}
                                    label="Branch"
                                 />
                              )}
                           />
                        ) : null}
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
                  Register User
               </Button>
            </Box>
         </Box>
      </Container>
   );
}
