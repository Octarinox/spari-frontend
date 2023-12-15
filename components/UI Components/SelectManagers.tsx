import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useUsersState } from "@/contexts/UsersContext";
import useUserFetcher from "@/shared/hooks/useUserFetch";

const ManagerSelect: React.FC<any> = ({ options, value, onChange }) => {
   useUserFetcher();
   const { data } = useUsersState();
   const managers = data?.filter(user => user.role === "manager");
   console.log(managers);
   return (
      <Autocomplete
         disablePortal
         options={managers || options || []}
         getOptionLabel={(option: any) =>
            `${option.firstName}  ${option.lastName}/${option.email}`
         }
         onChange={(event, newValue) => onChange(newValue)}
         renderInput={params => (
            <TextField
               {...params}
               value={value}
               name="managers"
               label="Managers"
            />
         )}
      />
   );
};

export default ManagerSelect;
