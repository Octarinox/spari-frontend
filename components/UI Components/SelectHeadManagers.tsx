import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useUsersState } from "@/contexts/UsersContext";
import useUserFetcher from "@/shared/hooks/useUserFetch";

const HeadManagerSelect: React.FC<any> = ({ options, value, onChange }) => {
   useUserFetcher();
   const { data } = useUsersState();
   const headManagers = data?.filter(
      (user: any) => user.role === "headmanager"
   );
   const isOptionEqualToValue = (option: any, value: any) => {
      return option?._id === value[0]?._id;
   };

   return (
      <Autocomplete
         disablePortal
         options={headManagers || options || []}
         getOptionLabel={(option: any) =>
            `${option.firstName}  ${option.lastName}/${option.email}`
         }
         value={value?.[0] || null}
         onChange={(event, newValue) => onChange(newValue)}
         isOptionEqualToValue={isOptionEqualToValue}
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
