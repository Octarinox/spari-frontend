import axiosFacerec from "@/axios/axios-facerec";

export async function addSubject(name: any) {
   try {
      const response = await axiosFacerec.post(`/api/v1/recognition/subjects`, {"subject": name}, {headers: {'Content-Type': 'application/json'}});
      if (response.status === 201) {
         return response.data;
      } else {
         throw new Error("Failed to send data");
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
      throw error;
   }
}