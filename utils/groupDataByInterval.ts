import { groupByInterval } from "@/utils/groupByIntervals";
import { eachMonthOfInterval } from "date-fns";

// @ts-ignore
export function groupDataByInterval(data, timeRange) {
   const currentTime = new Date().getTime(); // @ts-ignore
   let startTime, interval, format;
   switch (timeRange) {
      case "1hr":
         startTime = currentTime - 60 * 60 * 1000;
         interval = 15 * 60 * 1000;
         format = { hour: "numeric", minute: "numeric" };
         break;
      case "24hrs":
         startTime = currentTime - 24 * 60 * 60 * 1000;
         interval = 6 * 60 * 60 * 1000;
         format = { day: "numeric", hour: "numeric", minute: "numeric" };
         break;
      case "1w":
         startTime = currentTime - 7 * 24 * 60 * 60 * 1000;
         interval = 24 * 60 * 60 * 1000;
         format = { weekday: "long", day: "numeric", month: "long" };
         break;
      case "1m":
         startTime = currentTime - 30 * 24 * 60 * 60 * 1000;
         interval = 7 * 24 * 60 * 60 * 1000;
         format = {
            day: "numeric",
            month: "long",
         };
         break;
      case "1yr":
         const monthStart = new Date(currentTime);
         monthStart.setDate(1);
         startTime = monthStart.getTime() - 12 * 30 * 24 * 60 * 60 * 1000;

         const months = eachMonthOfInterval({
            start: startTime,
            end: currentTime,
         });
         interval = 30 * 24 * 60 * 60 * 1000;
         format = { month: "long" };
         break;
      default:
         throw new Error("Invalid time range specified.");
   }
   // @ts-ignore
   const filteredData = data?.filter(
      // @ts-ignore
      branch => new Date(branch.timestamp).getTime() >= startTime
   );
   return groupByInterval(filteredData, startTime, interval, format);
}
