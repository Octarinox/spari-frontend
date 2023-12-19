"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { getSubjects } from "@/httpRequests/getSubjects";
import { addSubjectImage } from "@/httpRequests/addSubjectImage";
import { sortSubjects } from "@/utils/sortSubjects";
import { deleteSubjectImage } from "@/httpRequests/deleteSubjectImage";
import { getSubjectsNames } from "@/httpRequests/getSubjectsNames";
import { addSubject } from "@/httpRequests/addSubject";
import { deleteSubject } from "@/httpRequests/deleteSubject";
import { updateSubject } from "@/httpRequests/updateSubject";

export interface Subject {
   name: string;
   images?: string[];
}

enum SubjectStatus {
   NoImages = "",
   Images = "Ok",
   NotSelected = "NTS",
}

export default function FacerecPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
   const [Subjects, setSubject] = useState<any>({});
   const [CurrentSub, setCurrentSub] = useState<any>("NTS");
   const [CurrentName, setCurrentName] = useState<any>("");
   const [NewSubject, setNewSubject] = useState<any>("");
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [Rename, setRename] = useState(false);
   const [CurrRename, setCurrRename] = useState("");
   const [InpRename, setInpRename] = useState("");
   const handleRename = () => {
      setInpRename(CurrRename);
      setRename(true);
   };
   const handleCloseRe = () => setRename(false);

   const handleSaveRe = () => {
      updateSubject(CurrRename, InpRename).then(res => {
         console.log(res);
      });

      handleCloseRe();
      window.location.reload()
   };

   const handleSave = () => {
      addSubject(NewSubject).then(res => console.log(res));

      setOpen(false);
      setNewSubject("");
      window.location.reload()
   };

   const DeleteFetch = useCallback(async (image_id: any) => {
      let deleteitem = await deleteSubjectImage(image_id);
      window.location.reload()
   }, []);

   const getCurrentSubject = (name: any) => {
      console.log(name)
      console.log(Subjects)
      if (name in Subjects) {
         if (Subjects[name].length == 0) {
            setCurrentSub(SubjectStatus.NoImages);
         }
         setCurrentSub(Subjects[name]);
         setCurrentName(name);

         router.push(`/facerec?curr=${name}`)
      } else {
         console.error("This key not exists");
      }
   };
   const reader = new FileReader();

   useEffect(() => {
      reader.addEventListener(
         "load",
         () => {
            postSubjectImage(
               CurrentName,
               // @ts-ignore

               reader?.result?.split(",")[1]
            ).then(() => window.location.reload());
         },
         false
      );
   }, [reader]);
   const handleChange = (event: any) => {
      reader.readAsDataURL(event.target.files[0]);
   };

   const postSubjectImage = async (name: any, data: any) => {
      const res = await addSubjectImage(name, data);
   };

   const fetchSubjects = async () => {
      const facecoll = await getSubjects();
      const subnames = await getSubjectsNames();
      let result = sortSubjects(subnames, facecoll);

      return result;
   };

   useEffect(() => {
        fetchSubjects().then(result => { setSubject(result)}); 
   }, []);

   useEffect(() => {
      const search = searchParams.get('curr')
      console.log(search)
      getCurrentSubject(search)
   }, [Subjects])

   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className="justify-center flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] bg-white rounded-lg shadow-lg">
               <div className="w-full px-10 py-7">
                  <h1 className="my-5 font-extrabold text-3xl">
                     Create Subject
                  </h1>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                     Subject name
                  </label>
                  <input
                     type="text"
                     aria-describedby="helper-text-explanation"
                     onChange={event => setNewSubject(event.target.value)}
                     className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     placeholder="Enter Subject name"
                  />
                  <label className="block mb-2 text-sm font-medium text-gray-900 mt-2">
                     Select a Role
                  </label>
                  <select
                     id="countries"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                     <option defaultValue={""}>Choose a role</option>
                     <option defaultValue={"BLACK"}>Black</option>
                     <option defaultValue={"VIP"}>VIP</option>
                  </select>
                  <div className="w-full flex mt-7 mb-[2px]">
                     <div className="w-[86%]">
                        <button
                           type="button"
                           onClick={handleClose}
                           className="text-white transition-all  ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                           Cancel
                        </button>
                     </div>
                     <div className="w-[14%]">
                        <button
                           type="button"
                           onClick={handleSave}
                           className="text-white transition-all  ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                           Save
                        </button>
                     </div>
                  </div>
               </div>
            </Box>
         </Modal>
         <Modal
            open={Rename}
            onClose={handleCloseRe}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className="justify-center flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] bg-white rounded-lg shadow-lg">
               <div className="w-full px-10 py-7">
                  <h1 className="my-5 font-extrabold text-3xl">
                     Rename Subject
                  </h1>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                     Subject name
                  </label>
                  <input
                     type="text"
                     aria-describedby="helper-text-explanation"
                     value={InpRename}
                     onChange={event => setInpRename(event.target.value)}
                     className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     placeholder="Enter Subject name"
                  />
                  <div className="w-full flex mt-7 mb-[2px]">
                     <div className="w-[86%]">
                        <button
                           type="button"
                           onClick={handleCloseRe}
                           className="text-white transition-all  ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                           Cancel
                        </button>
                     </div>
                     <div className="w-[14%]">
                        <button
                           type="button"
                           onClick={handleSaveRe}
                           className="text-white transition-all  ease-in duration-75 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                           Save
                        </button>
                     </div>
                  </div>
               </div>
            </Box>
         </Modal>
         <div className="flex justify-center p-10 h-[60rem]">
            <aside className="border-[1px] scrollbar-thin text-center p-2 scrollbar-thumb-gray-100 scrollbar-track-gray-200 overflow-y-scroll border-gray-200 bg-gray-200 w-[20rem] rounded-l-3xl h-full">
               <div className="h-[95%]">
                  {Object.keys(Subjects).map((key, idx) => (
                     <div key={idx} className="flex">
                        <button
                           onClick={() => getCurrentSubject(key)}
                           className="bg-gray-250 w-[80%] my-2 rounded-lg"
                        >
                           {key}
                        </button>
                        <button
                           onClick={() => deleteSubject(key)}
                           className="bg-gray-250 w-[10%] my-2 rounded-lg"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                           </svg>
                        </button>
                        <button
                           onClick={() => {
                              handleRename();
                              setCurrRename(key);
                           }}
                           className="bg-gray-250 w-[10%] my-2 rounded-lg"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                           </svg>
                        </button>
                     </div>
                  ))}
               </div>
               <div className="h-[5%]">
                  <button
                     onClick={handleOpen}
                     className="w-full py-2 px-5 rounded-lg bg-gray-600 font-black text-white"
                  >
                     Add Subject
                  </button>
               </div>
            </aside>
            <main className="border-[1px] bg-gray-50 w-[50rem] rounded-r-3xl h-full">
               {CurrentSub != "NTS" ? (
                  <header className="w-full flex text-center rounded-b-3xl shadow-lg bg-gray-200 border-gray-200 text-gray-600 justify-center font-black text-2xl border-b-[2px]">
                     <div className="w-full my-5">
                        <h1>{CurrentName}</h1>
                     </div>
                  </header>
               ) : (
                  <div></div>
               )}
               {CurrentSub != "NTS" || CurrentSub == SubjectStatus.NoImages ? (
                  <div className="flex items-center justify-center my-[20px] mx-20 ">
                     <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-3 pb-3">
                           <svg
                              className="w-8 h-8 mb-4 text-gray-500 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                           >
                              <path
                                 stroke="currentColor"
                                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                           </svg>
                           <p className="mb-2 text-sm text-gray-500 ">
                              <span className="font-semibold">
                                 Click to upload
                              </span>{" "}
                              or drag and drop
                           </p>
                           <p className="text-xs text-gray-500 ">
                              PNG or JPG (MIN. 400x400px)
                           </p>
                        </div>
                        <input
                           onChange={handleChange}
                           id="dropzone-file"
                           type="file"
                           className="hidden"
                        />
                     </label>
                  </div>
               ) : (
                  <div />
               )}
               <div className="flex flex-row text-center justify-center">
                  {CurrentSub != "NTS" ? (
                     CurrentSub.map((el: any, idx: any) => (
                        <div
                           key={idx}
                           className="mx-3 flex justify-center my-2"
                        >
                           <figure>
                              <img
                                 className="w-[100px] object-cover rounded-t-lg"
                                 src={`http://localhost:8000/api/v1/static/287a6bce-7d57-4c1a-ac71-4512f6510854/images/${el}`}
                              />
                              <figcaption>
                                 <button
                                    onClick={() => DeleteFetch(el)}
                                    className="bg-red-700 px-3 w-full p-[2px] text-white rounded-b-lg"
                                 >
                                    Delete
                                 </button>
                              </figcaption>
                           </figure>
                        </div>
                     ))
                  ) : CurrentSub == SubjectStatus.NoImages ? (
                     <div className="mt-4 text-gray-400">No Images</div>
                  ) : CurrentSub == "NTS" ? (
                     <div className="mt-4 text-gray-400">Select Subject</div>
                  ) : (
                     <div className="mt-4 text-gray-400">Select Subject</div>
                  )}
               </div>
            </main>
         </div>
      </div>
   );
}