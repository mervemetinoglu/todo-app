import './style.css';

import { ToastContainer } from 'react-toastify';

export const CustomToastContainer = () => {
  return (
    <ToastContainer
      closeOnClick
      pauseOnHover
      autoClose={5000}
      position="top-right"
      newestOnTop={false}
      hideProgressBar={false}
    />
  );
};
