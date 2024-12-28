export const toastStyles = `
  .toast-container {
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 8px;
    pointer-events: none;
  }

  .toast {
    pointer-events: all;
    min-width: 250px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    opacity: 0;
    transform: translateY(16px);
    animation: toast-slide-in 0.3s ease forwards;
    overflow: hidden;
    position: relative;
  }

  .toast-header {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toast-content {
    padding: 16px;
    position: relative;
  }

  .toast-close {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 4px;
    opacity: 0.7;
    transition: opacity 0.2s;
    font-size: 18px;
    line-height: 1;
  }

  .toast-close:hover {
    opacity: 1;
  }

  .ripple {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.1) 1%) center/15000%;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .ripple.active {
    animation: ripple 0.8s linear;
  }

  @keyframes ripple {
    0% {
      background-size: 100%;
      opacity: 1;
    }
    100% {
      background-size: 15000%;
      opacity: 0;
    }
  }

  @keyframes toast-slide-in {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .toast-exit {
    animation: toast-slide-out 0.3s ease forwards;
  }

  @keyframes toast-slide-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-16px);
    }
  }

  .toast-container.top-left { top: 20px; left: 20px; }
  .toast-container.top-center { top: 20px; left: 50%; transform: translateX(-50%); }
  .toast-container.top-right { top: 20px; right: 20px; }
  .toast-container.bottom-left { bottom: 20px; left: 20px; }
  .toast-container.bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }
  .toast-container.bottom-right { bottom: 20px; right: 20px; }
`;