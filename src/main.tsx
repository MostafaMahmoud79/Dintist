import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize dark mode by default
const initializeDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    localStorage.setItem('theme', 'dark');
  }
  if (savedTheme === 'dark' || !savedTheme) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

initializeDarkMode();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);