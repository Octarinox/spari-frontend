import { createTheme } from "@mui/material";

export const sliderTheme = createTheme({
   components: {
      MuiSlider: {
         styleOverrides: {
            thumb: {
               width: "20px",
               height: "20px",
               backgroundColor: "gray",
               borderRadius: "1",
               "&:hover, &:focus, &:active": {
                  backgroundColor: "dimgray",
                  boxShadow: "none",
               },
            },
            track: {
               borderColor: "gray",
               backgroundColor: "gray",
            },
            rail: {
               backgroundColor: "gray",
            },
         },
      },
   },
});
