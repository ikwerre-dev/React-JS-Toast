import React from 'react';

const ToastContainer = ({ children, position = 'bottom-center' }) => {
  return (
    <div className={`toast-container ${position}`}>
      {children}
    </div>
  );
};
export default ToastContainer;
