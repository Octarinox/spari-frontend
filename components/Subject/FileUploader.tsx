"use client";
import { Box, ImageListItem } from "@mui/material";
import { useRef, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import axiosInstance from "@/axios/axios-instance";
import { compressToBase64 } from "lz-string";
import { toast } from "sonner";

export default function FileUploader() {
   const fileInputRef = useRef<any>(null);
   const [images, setImages] = useState<any>([]);
   const searchParams = useSearchParams();
   const params = useParams();
   const subjectId = params.id;
   const sidebarOpened = searchParams.get("sidebar");
   const handleClick = () => {
      fileInputRef?.current?.click();
   };
   const reader = new FileReader();
   const handleImageChange = (event: any) => {
      try {
         const file = event.target.files[0];
         console.log(file);
         if (!file) {
            return toast.warning("Please select an image");
         }
         reader.readAsDataURL(file);
         reader.onload = async () => {
            const image = reader.result;
            const compressedImage = compressToBase64(image as string);
            const data = await axiosInstance.post("/subject/add-image", {
               subject: subjectId,
               image: compressedImage,
            });
            setImages([...images, image]);
         };
      } catch (e: any) {
         toast.error(e.response.data.errors || "Something went wrong");
      }
   };
   const handleRemove = async (image: any, i: number) => {
      setImages(images.filter((img: any, index: number) => index !== i));
      const data = await axiosInstance.post("/subject/remove-image", {
         subject: subjectId,
         image: "",
      });
   };
   return (
      <>
         <div
            className={`${
               sidebarOpened === "true" ? "hidden" : "visible"
            } w-full  p-10 max-h-1/2 overflow-y-auto overflow-x-hidden bg-gray-300`}
         >
            <Box
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  marginBottom: "10px",
                  width: "100%",
                  height: "auto !important",
                  margin: "0 !important",
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

            <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {images.map((image: any, i: number) => (
                  <ImageListItem
                     key={i}
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        height: "350px !important",
                     }}
                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 "
                  >
                     <img
                        src={image}
                        alt={image}
                        className={"rounded-lg md:w-[300px] md:h-[300px] "}
                     />
                     <button
                        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleRemove(image, i)}
                     >
                        X
                     </button>
                  </ImageListItem>
               ))}
            </div>
         </div>
      </>
   );
}
