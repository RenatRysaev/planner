import { message } from "antd";

export type INotifier = {
  success: typeof message.success;
  error: typeof message.error;
};

export const notifier: INotifier = {
  success: message.success,
  error: message.error,
};
