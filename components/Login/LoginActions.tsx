// "use server";
// import { useState } from "react";
// import axios from "axios";

// const LoginAction = async (e: any) => {
//    e.preventDefault();
//    const [username, setUsername] = useState("");
//    const [password, setPassword] = useState("");
//    axios
//       .post(
//          "https://35.234.110.126:3001/api/auth/login",
//          {
//             username: username,
//             password: password,
//          },
//          {
//             headers: {
//                "Content-Type": "application/json",
//             },
//             withCredentials: true,
//          }
//       )
//       .then(data => {
//          if (data.statusText === "OK") {
//             redirect("");
//          }
//          console.log(data);
//       })
//       .catch(e => {
//          console.log(e);
//       });
// };
// export default LoginAction;
