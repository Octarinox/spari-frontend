"use client";
import { createContext, useState, useReducer } from "react";
import { PermissionLevel } from "./PermissionLevel";
import validator from "validator";
import axios from "axios";
import styles from "./login.module.scss";
import { useRouter } from "next/navigation";
import isEmail from "validator/lib/isEmail";
import { useGlobalContext } from "../GlobalContext";

export function reducer(state: any, action: any) {
   switch (action.type) {
      case "login-success":
         return { ...state, isLoggedIn: action.payload };
      case "UPDATE_EMAIL":
         return { ...state, email: action.payload };
      default:
         return state;
   }
}
const Login = () => {
   const router = useRouter();
   const [errorMessage, setErrorMessage] = useState("");
   const { state, dispatch } = useGlobalContext();
   const [isActive, setIsActive] = useState(true);
   const [formData, setFormData] = useState({ eMail: "", password: "" });
   const handleClickAdminLogin = () => setIsActive(true);
   const handleClickBranchID = () => setIsActive(false);
   const handleLogin = async (e: any) => {
      e.preventDefault();
      axios
         .post(
            "https://34.159.254.154:3001/api/auth/login",
            {
               username: formData.eMail,
               password: formData.password,
            },
            {
               headers: {
                  "Content-Type": "application/json",
               },
               withCredentials: true,
            }
         )
         .then(data => {
            console.log(data);
            dispatch({ type: "login-success", payload: true });
            console.log(state.isLoggedIn);
            console.log(state);
            router.push("/");
         })
         .catch(e => {
            console.log(e);
            formData.eMail === "" && formData.password === ""
               ? setErrorMessage("Inputs Can't Be Empty")
               : formData.eMail === ""
               ? setErrorMessage("Email Can't Be Empty")
               : formData.password === ""
               ? setErrorMessage("Password Can't Be Empty")
               : !isEmail(formData.eMail)
               ? setErrorMessage("Wrong Email Format")
               : setErrorMessage(e.response?.data?.message);
         });
   };
   return (
      <div className="flex justify-center items-center h-screen flex-col shrink w-full">
         <div className="flex justify-between w-4/5 lg:w-2/5">
            <button
               className={`h-16 w-1/2 md:h-24 sm:h-20 sm:text-xl ${
                  !isActive ? "hover:bg-neutral-400" : ""
               } ${
                  isActive ? "text-white" : ""
               } rounded-tl-2xl text-l font-thin ${
                  isActive ? styles.buttonActive : styles.button
               }`}
               onClick={handleClickAdminLogin}
            >
               ADMIN LOGIN
            </button>
            <button
               className={`${
                  isActive ? "hover:bg-neutral-400" : ""
               } h-16 text-l font-light lg:h-24 md:h-24 sm:text-xl sm:h-20 ${
                  !isActive ? "text-white" : ""
               } w-1/2 rounded-tr-2xl ${
                  !isActive ? styles.buttonActive : styles.button
               }`}
               onClick={handleClickBranchID}
            >
               Branch ID
            </button>
         </div>

         <div className="bg-white md:h-2/4 h-2/5 w-4/5 lg:h-3/5 lg:w-2/5 rounded-b-2xl shadow-xl">
            <form
               onSubmit={handleLogin}
               className="flex flex-col items-center justify-evenly h-5/6 w-4/4 mt-10"
            >
               <div className="flex flex-col items-center justify-center">
                  <input
                     className="[appearance:textfield] md:h-20 sm:w-96 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-blue-300 pl-10 border-2 border-slate-300 lg:h-16 w-60 h-14 rounded-lg sm:mb-8 mb-4"
                     placeholder={`${
                        isActive ? "email@address.com" : "Branch ID"
                     }`}
                     name="email"
                     type={isActive ? "text" : "number"}
                     autoComplete="off"
                     onChange={e => {
                        setFormData({
                           ...formData,
                           eMail: e.target.value,
                        });
                        // dispatch({
                        //    type: "UPDATE_EMAIL",
                        //    payload: e.target.value,
                        // });
                     }}
                     onInput={e => setErrorMessage("")}
                  />
                  <input
                     className="outline-blue-300 md:h-20 pl-10 border-2 md:w-full lg:h-16 sm:w-96 border-slate-300 w-60 h-14 rounded-lg"
                     placeholder="Password"
                     name="password"
                     type="password"
                     onChange={e =>
                        setFormData({
                           ...formData,
                           password: e.target.value,
                        })
                     }
                     onInput={() => setErrorMessage("")}
                  />
               </div>
               <div>
                  <button
                     className={`${styles.buttonActive} text-white w-60 md:w-80 md:h-16 sm:w-72 h-14 rounded-lg hover:bg-sky-950`}
                     type="submit"
                  >
                     Log In
                  </button>
                  <div className="flex justify-center mt-3 text-red-500 ">
                     <p>{errorMessage}</p>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
