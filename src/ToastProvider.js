import React, { createContext, useContext, useState, useEffect } from 'react';
import Toast from './Toast';
import ToastContainer from './ToastContainer';
import { toastStyles } from './styles';

const ToastContext = createContext(null);

export const ToastProvider = ({ children, defaultPosition = 'top-right' }) => {
  const [toasts, setToasts] = useState([]);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = toastStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const showToast = (message, options = {}) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = {
      id,
      message,
      position: options.position || defaultPosition,
      ...options
    };

    setToasts(prev => [...prev, newToast]);
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer position={toasts[0]?.position || defaultPosition}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            header={toast.header}
            showHeader={toast.showHeader}
            showCloseButton={toast.showCloseButton}
            type={toast.type}
            duration={toast.duration}
            backgroundColor={toast.backgroundColor}
            textColor={toast.textColor}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
