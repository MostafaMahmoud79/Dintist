
import { Phone, Mail, MapPin } from 'lucide-react';


export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+201006367797"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Phone size={20} />
                  <span>+20 (100) 636-7797</span>
                </a>
                <a
                  href="mailto:info@dentalcare.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail size={20} />
                  <span>ahmedmenecy@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} />
                  <span>Alexandria, Egypt, Camp Shezar & </span>
                </div>
              </div>
            </div>
    
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
  <div>
    <label
      htmlFor="name"
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Enter your name"
      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Email
    </label>
    <input
      id="email"
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    />
  </div>

  <div>
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Message
    </label>
    <textarea
      id="message"
      rows={4}
      placeholder="Write your message..."
      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  >
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
}