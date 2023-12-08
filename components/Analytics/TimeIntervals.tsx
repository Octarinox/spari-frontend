import React from "react";
import { Box, Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { branchData } from "@/components/Analytics/constants/testBranches";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";

const options = [
   { option: "Last Hour", value: "1hr" },
   { option: "Last 24 Hours", value: "24hrs" },
   { option: "Last Week", value: "1w" },
   { option: "Last Month", value: "1m" },
   { option: "Last Year", value: "1yr" },
];

const TimeIntervals = (props: any) => {
   const { onClick } = props;
   const [selectedButton, setSelectedButton] = React.useState("1yr");
   const isMobile = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as needed

   const handleClick = (item: any) => {
      setSelectedButton(item.value);
      const groupedBranches = groupBranchesByInterval(branchData, item.value);
      const averageResults = calculateQueueAverage(branchData, groupedBranches);
      onClick(averageResults);
   };

   return (
      <Box
         sx={{
            display: "flex",
            "& > *": {},
         }}
      >
         <ButtonGroup
            orientation={"horizontal"}
            variant={"outlined"}
            size={isMobile ? "small" : "large"} // Set size based on isMobile
            color={"info"}
            aria-label="vertical outlined button group"
         >
            {options.map((item: any) => (
               <Button
                  key={item.value}
                  onClick={() => handleClick(item)}
                  variant={
                     selectedButton === item.value ? "contained" : "outlined"
                  }
                  sx={{
                     backgroundColor:
                        selectedButton === item.value
                           ? "#252D33 !important"
                           : "inherit",
                  }}
               >
                  {item.option}
               </Button>
            ))}
         </ButtonGroup>
      </Box>
   );
};

export default TimeIntervals;
