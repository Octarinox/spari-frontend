import { deleteSubject } from "@/httpRequests/deleteSubject";
import React, { useEffect, useState } from "react";
import { getSubjects } from "@/httpRequests/getSubjects";
import { getSubjectsNames } from "@/httpRequests/getSubjectsNames";
import { sortSubjects } from "@/utils/sortSubjects";
import { AddSubjectModal } from "@/components/Subject/AddSubjectModal";
import { EditSubjectModal } from "./EditSubjectModal";
import { useMediaQuery } from "@mui/material";

const SubjectList = () => {
   const [subjects, setSubjects] = useState<any>([]);
   const [open, setOpen] = useState(false);
   const [openEdit, setOpenEdit] = useState(false);
   const smallDevice = useMediaQuery("(max-width: 1000px)");
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const handleClose = () => setOpen(false);
   const handleOpen = () => setOpen(true);
   const handleCloseEdit = () => setOpenEdit(false);
   const handleOpenEdit = () => setOpenEdit(true);

   const fetchSubjects = async () => {
      try {
         const facecoll = await getSubjects();
         const subnames = await getSubjectsNames();
         const sortedSubjects = sortSubjects(subnames, facecoll);
         setSubjects(sortedSubjects);
      } catch (error) {
         console.error("Error fetching subjects:", error);
      }
   };

   const handleSaveRename = (key: any) => {
      const newSubjects = { ...subjects };
      // newSubjects[newSubjectName] = newSubjects[key];
      // delete newSubjects[key];
      // setSubjects(newSubjects);
      // setIsEditing(null);
   };

   // Load subjects from localStorage on component mount
   // useEffect(() => {
   //    const storedSubjects = localStorage.getItem("subjects");
   //    if (storedSubjects) {
   //       setSubjects(JSON.parse(storedSubjects));
   //    } else {
   //       fetchSubjects(); // Fetch from the API if local storage is empty
   //    }
   // }, []);
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };
   useEffect(() => {
      const storedSubjects = localStorage.getItem("subjects");
      if (storedSubjects) {
         setSubjects(JSON.parse(storedSubjects));
      }
   }, []);

   return (
      <>
         <AddSubjectModal handleClose={handleClose} open={open} />
         <EditSubjectModal handleClose={handleCloseEdit} open={openEdit} />
         {smallDevice && (
            <button
               onClick={toggleSidebar}
               data-drawer-target="default-sidebar"
               data-drawer-toggle="default-sidebar"
               aria-controls="default-sidebar"
               type="button"
               className={`inline-flex border-white drop-shadow-lg items-center absolute left-0  z-50 ${
                  isSidebarOpen ? "ml-96" : ""
               }  text-sm text-gray-500 p-2 sm:hidden bg-white hover:bg-gray-100 rounded-tr-full rounded-br-full border-l-0 border-2`}
            >
               <span className="sr-only">Open sidebar</span>
               {!isSidebarOpen ? (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="25"
                     height="25"
                     fill="currentColor"
                     className="bi bi-arrow-right"
                     viewBox="0 0 16 16"
                  >
                     <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                     />
                  </svg>
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="25"
                     height="25"
                     fill="currentColor"
                     className="bi bi-arrow-left"
                     viewBox="0 0 16 16"
                  >
                     <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                     />
                  </svg>
               )}
            </button>
         )}
         <div
            id="default-sidebar"
            className={`z-40 relative top-0 left-0 w-64 h-screen transition-transform ${
               isSidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full sm:translate-x-0"
            }`}
            aria-label="Sidebar"
         >
            <div
               className={`${
                  isSidebarOpen ? "" : "w-0"
               } h-full  w-96 md:w-80  drop-shadow-lg  px-3 z-0 py-4 bg-gray-100`}
            >
               <div
                  className={"md:w-fit flex flex-col gap-10 overflow-scroll"}
                  style={{
                     height: "calc(100vh - 10rem)",
                  }}
               >
                  {subjects.map((subject: any, idx: number) => (
                     <div key={idx} className="flex flex-row gap-5">
                        <button
                           className={`bg-gray-250 w-[70%] my-2 rounded-lg`}
                        >
                           {subject.subject}
                        </button>
                        <button
                           onClick={() => deleteSubject(subject.subject)}
                           className="bg-gray-250 w-[15%] my-2 rounded-lg"
                        >
                           Delete
                        </button>

                        <button
                           onClick={() => handleOpenEdit()}
                           className="bg-gray-250 w-[15%] my-2 rounded-lg"
                        >
                           Edit
                        </button>
                     </div>
                  ))}
               </div>
               <div className="h-[5%] mt-10">
                  <button
                     onClick={handleOpen}
                     className="w-full py-2 px-5 rounded-lg bg-gray-600 font-black text-white"
                  >
                     Add Subject
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default SubjectList;
