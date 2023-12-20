import { toast, Toaster } from "sonner";

export const Toast: React.FC<any> = ({ data }) => {
   const accuracyValue = parseFloat(data?.data?.accuracy);
   console.log(data, accuracyValue);
   if (accuracyValue >= 50 && accuracyValue < 60) {
      toast.info("Be at the area 10 minutes before the event time");
   } else if (accuracyValue >= 60 && accuracyValue < 80) {
      toast.warning("Event start time cannot be earlier than 8am");
   } else if (accuracyValue >= 80) {
      toast.error("Event has not been created");
   }

   return (
      <Toaster position="top-right" expand={false} closeButton richColors />
   );
};
