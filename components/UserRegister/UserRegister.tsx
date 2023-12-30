"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import UserForm from "@/components/UI/UserForm";
import { sendUserDataToServer } from "@/components/UserRegister/SendDataToServer";

export default function UserRegisterForm() {
   return (
      <Container
         sx={{
            marginLeft: {
               md: "300px",
               sm: "200px",
               lg: "300px",
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
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               User Register
            </Typography>
            <UserForm requestHandler={sendUserDataToServer} />
         </Box>
      </Container>
   );
}
