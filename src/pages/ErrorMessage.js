import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorMessage = () => {
  const showToast = () => {
    toast.success('This is a pop-out message', {
      position: "top-right",
      autoClose: 3000, // Message will auto-close after 3 seconds
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={showToast}>Show Pop-out Message</button>
    </div>
  );
};

export default ErrorMessage;
