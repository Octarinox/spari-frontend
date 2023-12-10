import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function SearchBarComponent() {
   return (
      <Box
         component="form"
         sx={{
            paddingRight: "10px",
         }}
         noValidate
         autoComplete="off"
      >
         <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Box>
   );
}

export function UsersSelectComponent() {
   const [age, setAge] = React.useState("");

   const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
   };

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={age}
               label="Age"
               onChange={handleChange}
            >
               <MenuItem value={10}>Name</MenuItem>
               <MenuItem value={20}>Lastname</MenuItem>
               <MenuItem value={30}>Email</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
}

export function BranchesSelectComponent() {
   const [age, setAge] = React.useState("");

   const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
   };

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={age}
               label="Age"
               onChange={handleChange}
            >
               <MenuItem value={10}>Branch ID</MenuItem>
               <MenuItem value={20}>Address</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
}
