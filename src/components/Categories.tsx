import { Smartphone, Code, Palette, Database, Zap, Boxes } from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    title: 'Flutter Development',
    description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Dart Programming',
    description: 'Master the Dart programming language with object-oriented concepts and modern syntax.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Palette,
    title: 'Mobile App UI Design',
    description: 'Create stunning, user-friendly interfaces with modern design principles and best practices.',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Boxes,
    title: 'Android Development',
    description: 'Develop native Android applications with modern tools and development patterns.',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Database,
    title: 'Firebase Integration',
    description: 'Integrate authentication, real-time databases, cloud storage, and more with Firebase.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'GetX State Management',
    description: 'Learn efficient state management, dependency injection, and routing with GetX.',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive curriculum covering all aspects of mobile app development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
