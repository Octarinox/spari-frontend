import axiosFacerec from "@/axios/axios-facerec";

export async function deleteSubjectImage(image_id: any) {
   try {
      const response = await axiosFacerec.delete(`/api/v1/recognition/faces/${image_id}`);
      if (response.status === 200) {
         return response.data;
      } else {
         throw new Error("Failed to send data");
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
      throw error;
   }
}