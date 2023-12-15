import { useEffect } from "react";
import { useUsersActions } from "@/contexts/UsersContext";

const useUserFetcher = () => {
   const { getUsers } = useUsersActions();
   useEffect(() => {
      async function fetchData() {
         await getUsers();
      }

      fetchData();
   }, []);
};

export default useUserFetcher;
