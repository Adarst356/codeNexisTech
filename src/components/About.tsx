import { GraduationCap, Rocket, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Practical Learning',
    description: 'Learn by building real-world applications from day one'
  },
  {
    icon: Rocket,
    title: 'Project-Based',
    description: 'Every concept is taught through hands-on projects'
  },
  {
    icon: Users,
    title: 'Beginner Friendly',
    description: 'Start with zero experience and become job-ready'
  },
  {
    icon: Trophy,
    title: 'Industry Standards',
    description: 'Follow best practices used by top companies'
  }
];

export default function About() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 text-sm font-semibold mb-6">
                About CodeNexisTech
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Career with Professional App Development
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                CodeNexisTech is dedicated to teaching practical mobile app development through comprehensive, project-based courses. We take you from complete beginner to advanced developer with step-by-step guidance.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our approach focuses on building real applications while learning Flutter, Dart, Android development, Firebase integration, and modern UI design. Every tutorial is designed to give you hands-on experience with tools and techniques used by professional developers.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Free Content</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Regular Updates</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Community Support</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
