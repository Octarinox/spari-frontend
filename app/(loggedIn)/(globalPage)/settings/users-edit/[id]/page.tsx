"use client";

import UserForm from "@/components/UI Components/UserForm";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { useUsersActions, useUsersState } from "@/contexts/UsersContext";
import { useParams } from "next/navigation";
import { updateUserRequest } from "@/httpRequests/updateUser";

const UserPage = () => {
   const { data } = useUsersState();
   const { getUsers } = useUsersActions();
   const params = useParams();
   useEffect(() => {
      async function fetchData() {
         await getUsers();
      }

      fetchData();
   }, []);
   const user = data?.find(user => user._id === params.id);
   return (
      <Container
         component="main"
         maxWidth="xs"
         sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <Box
            sx={{
               marginTop: 8,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            {" "}
            <Avatar sx={{ m: 1, bgcolor: "#384454" }}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Edit User
            </Typography>
         </Box>
         <UserForm
            data={user}
            buttonText={"Save"}
            requestHandler={updateUserRequest}
            passwordRequired={false}
         />
      </Container>
   );
};

export default UserPage;
