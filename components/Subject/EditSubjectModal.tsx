import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

export const EditSubjectModal = ({ handleClose, open }: any) => {
   const [newSubjectName, setNewSubjectName] = useState<any>("");
   const [newSubjectRole, setNewSubjectRole] = useState<any>("");
   const handleSave = () => {
      const subject = `${newSubjectName.replace(/\s/g, "-")}-${newSubjectRole}`;

      const subjectData = {
         subject,
      };
      const existingSubjects = JSON.parse(
         localStorage.getItem("subjects") || "[]"
      );

      existingSubjects.push(subjectData);

      localStorage.setItem("subjects", JSON.stringify(existingSubjects));
      handleClose();
   };
   return (
      <Modal open={open} onClose={handleClose}>
         <Box className="justify-center flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] bg-white rounded-lg shadow-lg">
            <div className="w-full px-10 py-7">
               <h1 className="my-5 font-extrabold text-3xl">Create Subject</h1>
               <label className="block mb-2 text-sm font-medium text-gray-900">
                  Subject name
               </label>
               <input
                  type="text"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  <option value="BLACK">Black</option>
                  <option value="VIP">VIP</option>
               </select>
               <div className="w-full flex mt-7 mb-[2px]">
                  <div className="w-[86%]">
                     <button
                        type="button"
                        onClick={handleClose}
                        className="text-white ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                     >
                        Cancel
                     </button>
                  </div>
                  <div className="w-[14%]">
                     <button
                        type="button"
                        onClick={handleSave}
                        className="text-white ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
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
