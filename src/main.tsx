// Ensure window.fetch can be assigned without throwing TypeError if window.fetch only has a getter
if (typeof window !== 'undefined') {
  try {
    const nativeFetch = window.fetch;
    let _fetch = nativeFetch ? nativeFetch.bind(window) : undefined;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => _fetch,
      set: (v) => {
        _fetch = v;
      },
    });
  } catch (e) {
    // Ignore if already non-configurable
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
