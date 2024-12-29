
import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your Smile, Our Passion
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Experience world-class dental care with our team of expert professionals.
              We're committed to giving you the perfect smile you deserve.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/+201006367797"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/Ahmed-Menecy.jpg"
              alt="Dr. Ahmed Mohsen Menesy"
              className="rounded-lg shadow-xl"
            />
            <p className="mt-4 text-center text-gray-800 dark:text-gray-200 text-lg font-medium animate-fadeIn">
  Dr. Ahmed Mohsen Menesy<br />
  Endodontic Specialist<br />
  Master's Degree in Operative Dentistry and Endodontics<br />
  Faculty of Dentistry - Alexandria University
</p>
          </div>
        </div>
      </div>
    </section>
  );
}