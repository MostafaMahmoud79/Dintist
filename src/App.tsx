import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Dental Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;