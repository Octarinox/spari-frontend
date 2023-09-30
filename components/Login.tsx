import React, { useState } from "react";
import variables from "/styles/variables.module.scss";
const Login = () => {
   const [isActive, setIsActive] = useState(true);
   const handleClickAdminLogin = () => setIsActive(cur => (cur = true));
   const handleClickBranchID = () => setIsActive(cur => (cur = false));
   return (
      <main className="flex justify-center items-center h-screen flex-col">
         <div className="flex justify-between w-2/5">
            <button
               className={`h-24 w-1/2 ${
                  isActive ? "text-white" : ""
               } rounded-tl-2xl text-2xl font-thin ${
                  isActive ? variables.buttonBGActive : variables.buttonBG
               }`}
               onClick={handleClickAdminLogin}
            >
               ADMIN LOGIN
            </button>
            <button
               className={`bg-sky-500 h-24 text-2xl font-light ${
                  !isActive ? "text-white" : ""
               } w-1/2 rounded-tr-2xl ${
                  !isActive ? variables.buttonBGActive : variables.buttonBG
               }`}
               onClick={handleClickBranchID}
            >
               Branch ID
            </button>
         </div>

         <div className="bg-white h-3/5 w-2/5 rounded-b-2xl shadow-xl">
            <form className="flex flex-col items-center justify-evenly h-5/6 w-4/4 mt-10">
               <div className="flex flex-col items-center justify-center">
                  <input
                     className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-blue-300 pl-10 border-2 border-slate-300 w-96 h-16 rounded-lg mb-5"
                     placeholder={`${isActive ? "Username" : "Branch ID"}`}
                     name="username"
                     type={isActive ? "text" : "number"}
                  />
                  <input
                     className="outline-blue-300 pl-10 border-2 border-slate-300  w-96 h-16 rounded-lg"
                     placeholder="Password"
                     name="password"
                     type="password"
                  />
               </div>
               <button
                  className={`${variables.buttonBGActive} text-white w-72 h-14 rounded-lg`}
                  type="submit"
                  onClick={e => e.preventDefault()}
               >
                  Log In
               </button>
            </form>
         </div>
      </main>
   );
};

export default Login;
