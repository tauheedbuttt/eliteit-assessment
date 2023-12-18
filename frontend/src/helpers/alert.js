import { toast } from "react-toastify";

let toastId = '';

export const alert = (message = "An error occured", type = "error") => {
  const finalMessage = Array.isArray(message) ? message.join(', ') : message;
  if (!toast.isActive(toastId)) toastId = toast(finalMessage, { type });
};
