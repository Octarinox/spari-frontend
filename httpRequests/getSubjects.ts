import axiosFacerec from "@/axios/axios-facerec";

export async function getSubjects() {
   try {
      const response = await axiosFacerec.get("/api/v1/recognition/faces");
      if (response.status === 200) {
         return response.data;
      } else {
         throw new Error("Failed to get data");
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
      throw error;
   }
}