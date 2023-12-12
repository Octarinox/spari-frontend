import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterComponent(props: any) {
   const { options, handleChange } = props;
   const [selectedValue, setSelectedValue] = useState("");

   const handleSearchChange = (searchValue: string) => {
      handleChange({
         selectedOption: selectedValue,
         searchValue,
      });
   };

   const handleSelectChange = (newValue: string) => {
      setSelectedValue(newValue);
      handleChange({
         selectedOption: newValue,
         searchValue: "", // Reset search value when changing the filter option
      });
   };

   return (
      <Box component="div" className={"flex flex-row gap-4 md:w-1/2 mt-20"}>
         <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{
               width: "100%",
            }}
            onChange={e => handleSearchChange(e.target.value)}
         />
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               label="Select"
               variant="filled"
               value={selectedValue}
               onChange={e => handleSelectChange(e.target.value)}
            >
               {options?.map((option: any) => (
                  <MenuItem value={option.value} key={option.label}>
                     {option.label}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
}
