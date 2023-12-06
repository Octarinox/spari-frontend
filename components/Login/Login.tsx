"use client";

import { FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";

import { useAuthActions } from "@/components/Login/cotnext";

const Login = () => {
   const [errorMessage, setErrorMessage] = useState("");
   const { userLogin } = useAuthActions();
   const [isActive, setIsActive] = useState(true);
   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
      const res = await userLogin(email as string, password as string);
      console.log(res);
   };
   return (
      <div className="flex justify-center items-center h-screen flex-col shrink w-full">
         <div className="flex justify-between w-4/5 lg:w-2/5"></div>

         <div className="bg-white md:h-2/4 h-2/5 w-4/5 lg:h-3/5 lg:w-2/5 rounded-2xl shadow-xl">
            <div className="w-4/4 flex justify-center items-end h-1/5">
               <h1 className="text-3xl">Sign In With Email</h1>
            </div>
            <form
               onSubmit={handleLogin}
               className="flex flex-col items-center justify-evenly h-4/6 w-4/4"
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
                     onInput={e => setErrorMessage("")}
                  />
                  <input
                     className="outline-blue-300 md:h-20 pl-10 border-2 md:w-full lg:h-16 sm:w-96 border-slate-300 w-60 h-14 rounded-lg"
                     placeholder="Password"
                     name="password"
                     type="password"
                     onInput={() => setErrorMessage("")}
                  />
               </div>

               <Toaster richColors />

               <div>
                  <button
                     className={`bg-sky-950 text-white w-60 md:w-80 md:h-16 sm:w-72 h-14 rounded-lg hover:bg-gray-900`}
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
