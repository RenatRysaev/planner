import { toast } from "react-toastify";

export type INotifier = {
  success: typeof toast.success;
  error: typeof toast.error;
};

export const notifier: INotifier = {
  success: toast.success,
  error: toast.error,
};
