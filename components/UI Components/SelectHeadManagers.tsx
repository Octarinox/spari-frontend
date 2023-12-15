import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useUsersState } from "@/contexts/UsersContext";
import useUserFetcher from "@/shared/hooks/useUserFetch";

const HeadManagerSelect: React.FC<any> = ({ options, value, onChange }) => {
   useUserFetcher();
   const { data } = useUsersState();
   const headManagers = data?.filter(user => user.role === "headmanager");
   console.log(data);
   return (
      <Autocomplete
         disablePortal
         options={headManagers || options || []}
         getOptionLabel={(option: any) =>
            `${option.firstName}  ${option.lastName}/${option.email}`
         }
         onChange={(event, newValue) => onChange(newValue)}
         renderInput={params => (
            <TextField
               {...params}
               value={value}
               name="headManagers"
               label="Head Managers"
            />
         )}
      />
   );
};

export default HeadManagerSelect;
