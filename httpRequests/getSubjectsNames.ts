import axiosFacerec from "@/axios/axios-facerec";

export async function getSubjectsNames() {
    try {
        const response = await axiosFacerec.get("/api/v1/recognition/subjects/", { headers: {"Content-Type": "application/json"} });
        if (response.status === 200) {
            return response.data.subjects;
        } else {
            throw new Error("Failed to get data");
        }
    } catch (error: any) {
        console.error("Error while sending data:", error.message);
        throw error;
    }
}