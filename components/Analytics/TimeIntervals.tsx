import { Box, Button, ButtonGroup } from "@mui/material";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchData } from "@/components/Analytics/constants/testBranches";

const options = [
   { option: "Last Hour", value: "1hr" },
   { option: "Last 24 Hours", value: "24hrs" },
   { option: "Last Week", value: "1w" },
   { option: "Last Month", value: "1m" },
   { option: "Last Year", value: "1yr" },
];
const TimeIntervals = (props: any) => {
   const { onClick } = props;
   const handleClick = (item: any) => {
      groupBranchesByInterval(branchData, item.value);
   };
   return (
      <Box
         sx={{
            display: "flex",
            "& > *": {
               m: 1,
            },
         }}
      >
         <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
         >
            {options.map((item: any) => (
               <Button key={item.value} onClick={() => handleClick(item)}>
                  {item.option}
               </Button>
            ))}
         </ButtonGroup>
      </Box>
   );
};
export default TimeIntervals;
