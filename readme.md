# robinson-reactjs-toast

A simple and customizable React toast notification library.

## Installation

```bash
npm install robinson-reactjs-toast

```
## Usage

```javascript

import React from 'react';
import { ToastProvider, useToast } from 'robinson-reactjs-toast';

function MyComponent() {
  const { showToast } = useToast();
  
  const showToastExamples = () => {
    // Basic toast
    showToast('Simple toast message');

    // Toast with header
    showToast('Success message with header', {
      showHeader: true,
      header: 'Success!',
      type: 'success'
    });

    // Toast with custom colors
    showToast('Custom colored toast', {
      backgroundColor: '#6b46c1',
      textColor: '#ffffff',
      showHeader: true,
      header: 'Custom Colors'
    });

    // Toast without close button
    showToast('No close button toast', {
      showCloseButton: false,
      showHeader: true,
      header: 'Cannot Close'
    });

    // Long duration toast
    showToast('This toast stays longer', {
      duration: 5000,
      type: 'info',
      showHeader: true
    });
  };

  return (
    <button onClick={showToastExamples}>Show Various Toasts</button>
  );
}

function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

export default App;

```