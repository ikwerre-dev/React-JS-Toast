import React, { useState, useEffect, useRef } from 'react';

const Toast = ({
  message,
  header,
  showHeader = false,
  showCloseButton = true,
  type = 'info',
  duration = 3000,
  backgroundColor,
  textColor,
  onClose
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isRippleActive, setIsRippleActive] = useState(false);
  const rippleTimeoutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      clearTimeout(timer);
      if (rippleTimeoutRef.current) {
        clearTimeout(rippleTimeoutRef.current);
      }
    };
  }, [duration, onClose]);

  const defaultStyles = {
    success: { backgroundColor: '#4caf50', color: '#fff' },
    error: { backgroundColor: '#f44336', color: '#fff' },
    warning: { backgroundColor: '#ff9800', color: '#fff' },
    info: { backgroundColor: '#2196f3', color: '#fff' }
  };

  const toastStyle = {
    ...(backgroundColor && textColor 
      ? { backgroundColor, color: textColor }
      : defaultStyles[type] || defaultStyles.info)
  };

  const handleMouseEnter = () => {
    if (!isRippleActive) {
      setIsRippleActive(true);
      rippleTimeoutRef.current = setTimeout(() => {
        setIsRippleActive(false);
      }, 800);  
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`toast ${isExiting ? 'toast-exit' : ''}`}
      style={toastStyle}
      onMouseEnter={handleMouseEnter}
    >
      {showHeader && (
        <div className="toast-header">
          <span>{header || type.charAt(0).toUpperCase() + type.slice(1)}</span>
          {showCloseButton && (
            <button className="toast-close" onClick={handleClose}>×</button>
          )}
        </div>
      )}
      <div className="toast-content">
        {message}
        <div className={`ripple ${isRippleActive ? 'active' : ''}`} />
      </div>
    </div>
  );
};

export default Toast;