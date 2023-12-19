import React from "react";
import { Box, Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { groupBranchesByInterval } from "@/utils/groupBranchesByInterval";
import { calculateQueueAverage } from "@/utils/calculateQueueAverage";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const options = [
   { option: "Last Hour", value: "1hr" },
   { option: "Last 24 Hours", value: "24hrs" },
   { option: "Last Week", value: "1w" },
   { option: "Last Month", value: "1m" },
   { option: "Last Year", value: "1yr" },
];

const TimeIntervals = (props: any) => {
   const { onClick, data } = props;
   const [selectedButton, setSelectedButton] = React.useState("1yr");
   const isMobile = useMediaQuery("(max-width: 600px)");

   const handleClick = (item: any) => {
      setSelectedButton(item.value);
      const groupedBranches = groupBranchesByInterval(data, item.value);
      const averageResults = calculateQueueAverage(data, groupedBranches);
      onClick(averageResults);
   };

   return (
      <Container
         className={"flex flex-col items-center mt-12"}
         style={{ display: "flex" }}
      >
         <Typography component="h1" variant="h5">
            Select Time Interval
         </Typography>
         <Box
            sx={{
               marginTop: "30px",
               display: "flex",
               "& > *": {},
            }}
         >
            <ButtonGroup
               orientation={"horizontal"}
               variant={"text"}
               size={isMobile ? "small" : "large"} // Set size based on isMobile
               color={"primary"}
               aria-label="vertical outlined button group"
            >
               {options.map((item: any) => (
                  <Button
                     key={item.value}
                     onClick={() => handleClick(item)}
                     variant={
                        selectedButton === item.value ? "contained" : "text"
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
      </Container>
   );
};

export default TimeIntervals;
