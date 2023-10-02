"use client";

import React, { useState } from "react";
import styles from "./login.module.scss";

const Login = () => {
   const [isActive, setIsActive] = useState(true);
   const handleClickAdminLogin = () => setIsActive(true);
   const handleClickBranchID = () => setIsActive(false);
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
            <form className="flex flex-col items-center justify-evenly h-5/6 w-4/4 mt-10">
               <div className="flex flex-col items-center justify-center">
                  <input
                     className="[appearance:textfield] md:h-20 sm:w-96 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-blue-300 pl-10 border-2 border-slate-300 lg:h-16 w-60 h-14 rounded-lg sm:mb-8 mb-4"
                     placeholder={`${isActive ? "Username" : "Branch ID"}`}
                     name="username"
                     type={isActive ? "text" : "number"}
                     autoComplete="off"
                  />
                  <input
                     className="outline-blue-300 md:h-20 pl-10 border-2 md:w-full lg:h-16 sm:w-96 border-slate-300 w-60 h-14 rounded-lg"
                     placeholder="Password"
                     name="password"
                     type="password"
                  />
               </div>
               <button
                  className={`${styles.buttonActive} text-white w-60 md:w-80 md:h-16 sm:w-72 h-14 rounded-lg hover:bg-sky-950`}
                  type="submit"
                  onClick={e => e.preventDefault()}
               >
                  Log In
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
