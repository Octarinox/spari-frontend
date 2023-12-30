import { toast } from "sonner";

export const renderSpecificToast = (data: any) => {
   const accuracyValue = parseFloat(data?.data?.accuracy);
   if (data.type === "face") {
      toast.error(data.message, {
         action: {
            label: "Details",
            onClick: () => {
               history.pushState({ urlPath: "/face-logs" }, "", "/face-logs");
               window.location.reload();
            },
         },
      });
      // if (accuracyValue >= 50 && accuracyValue < 60) {
      //    toast.info("Be at the area 10 minutes before the event time");
      // } else if (accuracyValue >= 60 && accuracyValue < 80) {
      //    toast.warning("Event start time cannot be earlier than 8am");
      // }
   } else {
      toast.warning(data.message, {
         action: {
            label: "Logs",
            onClick: () => {
               history.pushState({ urlPath: "/queue-logs" }, "", "/queue-logs");
               window.location.reload();
            },
         },
      });
   }
};
