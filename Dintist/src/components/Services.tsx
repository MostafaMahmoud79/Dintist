
import { 
  CircleDot, 
  Sparkles, 
  Scissors, 
  Activity 
} from 'lucide-react';

const services = [
  {
    icon: CircleDot,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.'
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, whitening, and aesthetic procedures.'
  },
  {
    icon: Scissors,
    title: 'Oral Surgery',
    description: 'Expert surgical procedures including extractions and implant placement.'
  },
  {
    icon: Activity,
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces and clear aligners.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
              alt="Modern Dental Office"
              className="mt-3 rounded-lg shadow-xl"
            />
            </div>
          ))}
        </div >
        <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
            alt="Modern Dental Office"
            className="flex justify-center mt-5 w-90px rounded-lg shadow-x1 h-auto"
          />
      </div>
    </section>
  );
}