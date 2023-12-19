import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useUsersState } from "@/contexts/UsersContext";
import useUserFetcher from "@/shared/hooks/useUserFetch";

const ManagerSelect: React.FC<any> = ({
   options,
   value,
   onChange,
   defaultValue,
}) => {
   useUserFetcher();
   const { data } = useUsersState();
   const managers = data?.filter(user => user.role === "manager");

   const isOptionEqualToValue = (option: any, value: any) => {
      return option?._id === value?.[0]?._id;
   };

   return (
      <Autocomplete
         disablePortal
         options={managers || options || []}
         getOptionLabel={(option: any) =>
            `${option.firstName} ${option.lastName}/${option.email}`
         }
         value={value?.[0] || null}
         onChange={(event, newValue) => onChange(newValue)}
         isOptionEqualToValue={isOptionEqualToValue}
         renderInput={params => (
            <TextField {...params} name="managers" label="Managers" />
         )}
      />
   );
};

export default ManagerSelect;
