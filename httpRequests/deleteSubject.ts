import axiosFacerec from "@/axios/axios-facerec";

export async function deleteSubject(name: any) {
   try {
      const response = await axiosFacerec.delete(`/api/v1/recognition/subjects/${name}`, {headers: {"Content-Type": "application/json"}});
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