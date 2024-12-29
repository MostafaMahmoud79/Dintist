import React from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Dental Clinic</h1>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
              <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a>
              <a href="#solutions" className="hover:text-blue-600 dark:hover:text-blue-400">Solutions</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <nav className="flex flex-col p-4">
            <a href="#home" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="#services" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
            <a href="#solutions" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">Solutions</a>
            <a href="#contact" className="py-2 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 py-2 mt-2 text-left hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={20} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={20} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}