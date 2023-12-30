import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosInstance from "@/axios/axios-instance";

const useQueueAnalitycs = () => {
   const [data, setData] = useState<AxiosResponse | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      async function fetchData() {
         try {
            const response: AxiosResponse = await axiosInstance.get(
               "/analytics/get-queue"
            );
            setData(response.data);
         } catch (error) {
            setError("An error occurred while fetching data.");
         } finally {
            setLoading(false);
         }
      }

      fetchData();
   }, []);

   return { data, loading, error };
};

export default useQueueAnalitycs;
