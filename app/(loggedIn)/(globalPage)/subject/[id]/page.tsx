"use client";
import { PERMISSIONS } from "@/shared/constants/pagesPermissions";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI/Error";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { useRef } from "react";

const images = ["1", "2"];
export default function SubjectImages() {
   const { role, perms } = useAuthState();
   const fileInputRef = useRef<any>(null);
   const handleClick = () => {
      fileInputRef?.current?.click();
   };
   const handleImageChange = (event: any) => {
      const file = event.target.files[0];
      console.log(file);
   };
   return (
      <>
         {role !== "admin" && !perms?.includes(PERMISSIONS.FACE_DATABASE) ? (
            <div className={"w-full mt-12 md:mr-14 mr-20"}>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     mb: 2,
                     width: "100%",
                  }}
               >
                  <input
                     type="file"
                     accept="image/*"
                     ref={fileInputRef}
                     onChange={handleImageChange}
                     style={{ display: "none" }}
                  />
                  <button
                     className={
                        "bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                     }
                     onClick={handleClick}
                  >
                     Upload Image
                  </button>
               </Box>

               <ImageList cols={3} className={""}>
                  {images.map(image => (
                     <ImageListItem key={image}>
                        <img alt={image} />
                     </ImageListItem>
                  ))}
               </ImageList>
            </div>
         ) : (
            <Error />
         )}
      </>
   );
}
