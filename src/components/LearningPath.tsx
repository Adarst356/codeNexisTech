import { CheckCircle2 } from 'lucide-react';

const paths = [
  {
    level: 'Beginner',
    color: 'from-green-500 to-emerald-500',
    duration: '4-6 weeks',
    topics: [
      'Introduction to Dart Programming',
      'Flutter Basics & Widgets',
      'Layout & Navigation',
      'Basic State Management',
      'Simple UI Components',
      'Your First App Project'
    ]
  },
  {
    level: 'Intermediate',
    color: 'from-blue-500 to-cyan-500',
    duration: '8-10 weeks',
    topics: [
      'Advanced Widget Concepts',
      'API Integration & HTTP',
      'Firebase Authentication',
      'Cloud Firestore Database',
      'GetX State Management',
      'Real-World App Projects'
    ]
  },
  {
    level: 'Advanced',
    color: 'from-purple-500 to-pink-500',
    duration: '12+ weeks',
    topics: [
      'Advanced Architecture Patterns',
      'Performance Optimization',
      'Custom Animations',
      'Native Platform Integration',
      'App Deployment & Publishing',
      'Production-Ready Applications'
    ]
  }
];

export default function LearningPath() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Structured path from complete beginner to professional developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paths.map((path, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className={`inline-flex px-6 py-2 rounded-full bg-gradient-to-r ${path.color} text-white font-bold text-lg mb-6`}>
                  {path.level}
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Duration</div>
                  <div className="text-2xl font-bold text-white">{path.duration}</div>
                </div>

                <div className="space-y-4">
                  {path.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>

                {index < paths.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
