import { Toaster, toast } from "sonner";
export const ToastComponentFailed = (message: string) => {
   toast.error(message);
};

export const ToastComponentSuccess = (message: string) => {
   toast.success(message);
};
