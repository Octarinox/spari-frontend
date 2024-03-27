"use client";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import axiosInstance from "@/axios/axios-instance";

export const AddSubjectModal = ({ handleClose, open }: any) => {
   const [newSubjectName, setNewSubjectName] = useState<any>("");
   const [newSubjectRole, setNewSubjectRole] = useState<any>("");
   const handleSave = async () => {
      const subject = `{id}-${newSubjectName.replace(
         /\s/g,
         "-"
      )}-${newSubjectRole}`;
      console.log(subject);
      const subjectData = {
         subject,
      };
      const data = await axiosInstance.post(
         "/subject/create-subject",
         subjectData
      );
      console.log(data);
      handleClose();
   };
   return (
      <Modal open={open} onClose={handleClose}>
         <Box className="justify-center flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] sm:w-[600px] bg-white rounded-lg shadow-lg">
            <div className="w-full px-10 py-7">
               <h1 className="my-5 font-extrabold text-3xl">Create Subject</h1>
               <label className="block mb-2 text-sm font-medium text-gray-900">
                  Subject name
               </label>
               <input
                  type="text"
                  className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={newSubjectName}
                  onChange={e => setNewSubjectName(e.target.value)}
               />
               <label className="block mb-2 text-sm font-medium text-gray-900 mt-2">
                  Select a Role
               </label>
               <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  value={newSubjectRole}
                  onChange={e => setNewSubjectRole(e.target.value)}
               >
                  <option defaultValue={""}>Choose a role</option>
                  <option value="blacklist">Blacklist</option>
                  <option value="vip">VIP</option>
               </select>
               <div className="w-full flex justify-between mt-7 mb-[2px]">
                  <div>
                     <button
                        type="button"
                        onClick={handleClose}
                        className="text-white ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2"
                     >
                        Cancel
                     </button>
                  </div>
                  <div>
                     <button
                        type="button"
                        onClick={handleSave}
                        className="text-white ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2"
                     >
                        Save
                     </button>
                  </div>
               </div>
            </div>
         </Box>
      </Modal>
   );
};
