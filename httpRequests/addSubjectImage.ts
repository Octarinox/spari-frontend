import axiosFacerec from "@/axios/axios-facerec";

export async function addSubjectImage(name: any, image: any) {
   try {
      const response = await axiosFacerec.post(`/api/v1/recognition/faces?subject=${name}&det_prob_threshold=0.9`, {'file': image}, {headers: {'Content-Type': 'application/json'}});
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