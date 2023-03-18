import { toast, ToastContent, ToastOptions } from 'react-toastify';

export const customToastSuccess = (
  content: ToastContent<unknown>,
  options?: ToastOptions<{}> | undefined
) => {
  return toast.success(content, {
    ...options,
    icon: '👍',
  });
};

export const customToastError = (
  content: ToastContent<unknown>,
  options?: ToastOptions<{}> | undefined
) => {
  return toast.error(content, {
    ...options,
    icon: '🥺',
  });
};
