
const solutions = [
  {
    before: "https://i.pinimg.com/236x/10/5a/7c/105a7c85c61c5907c612ed728f5e4f9f.jpg",
    after: "https://i.pinimg.com/236x/c0/c6/cb/c0c6cb4a7d6e3bc496aed25e7e8aa57e.jpg",
    title: "Complete Smile Makeover",
    description: "Transformation achieved through veneers and whitening"
  },
  {
    before: "https://i.pinimg.com/236x/c8/08/bd/c808bd991f7dd81790ed6bf438b35075.jpg",
    after: "https://i.pinimg.com/236x/90/e9/d2/90e9d2ca50465d487c8fb555d78bab58.jpg",
    title: "Orthodontic Treatment",
    description: "Alignment correction using invisible braces"
  },
  {
    before: "https://i.pinimg.com/236x/6c/c1/43/6cc1439b692f2e5c5d2454013b6b51a9.jpg",
    after: "https://i.pinimg.com/236x/26/67/27/266727da28235c00fedf8370ad3113a4.jpg",
    title: "Orthodontic Treatment",
    description: "Transformation achieved through veneers and whitening"
  },
  {
    before: "https://i.pinimg.com/236x/84/ea/65/84ea659ccbaa09d7f4ebfb7785476f80.jpg",
    after: "https://i.pinimg.com/236x/a9/8f/e4/a98fe4ac3e4d213e0d855958a2ae1a86.jpg",
    title: "Orthodontic Treatment",
    description: "Dental implant operationa"
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={solution.before} alt="Before" className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-gray-900/75 text-white px-2 py-1 rounded">
                    Before
                  </span>
                  <span className="absolute top-24 left-2 bg-gray-900/75 text-white px-2 py-1 rounded">
                    After
                  </span>

                </div>
                <div className="relative">
                  <img src={solution.after} alt="After" className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-gray-900/75 text-white px-2 py-1 rounded">
                    Before
                  </span>
                  <span className="absolute top-24 left-2 bg-gray-900/75 text-white px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}