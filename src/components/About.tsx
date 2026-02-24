import { GraduationCap, Rocket, Users, Trophy, Mail, MapPin, Briefcase, Github, Linkedin, Globe } from 'lucide-react';

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

const projects = [
  {
    title: 'CRM Application',
    description: 'Complete Customer Relationship Management system with database integration, user authentication, and real-time updates for managing client interactions efficiently.',
    icon: Briefcase
  },
  {
    title: 'Recharge Expense Tracker',
    description: 'Smart expense tracking app that logs and categorizes recharge transactions, provides spending analytics, and helps users manage their mobile recharge expenses.',
    icon: Rocket
  }
];

export default function About() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
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

          <div className="border-t border-slate-700 pt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Developer passionate about creating efficient solutions and teaching practical skills through real-world projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    CN
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">CodeNexisTech</h4>
                    <p className="text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Tech Educator
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <a href="mailto:codenexis356@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      codenexis356@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-slate-700/50 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-slate-700/50 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-slate-700/50 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-400 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xl font-bold text-white mb-4">My Projects</h5>
                {projects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h6 className="font-semibold text-white mb-1">{project.title}</h6>
                          <p className="text-sm text-gray-400">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-20 bg-slate-900/30 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Add Your Own Domain</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-sm rounded-full">1</span>
                    Get a Domain
                  </h4>
                  <p className="text-gray-400 text-sm pl-8">
                    Buy a domain from popular registrars like GoDaddy, Namecheap, Hostinger, or Google Domains. Search for your preferred name and purchase it.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-sm rounded-full">2</span>
                    Update DNS Records
                  </h4>
                  <p className="text-gray-400 text-sm pl-8">
                    Go to your domain registrar's DNS settings and add nameservers or DNS records pointing to your hosting provider.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-sm rounded-full">3</span>
                    Deploy Your Site
                  </h4>
                  <p className="text-gray-400 text-sm pl-8">
                    Deploy this website to Vercel, Netlify, or any hosting service. Get your hosting provider's nameservers or deployment URL.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-sm rounded-full">4</span>
                    Enable SSL
                  </h4>
                  <p className="text-gray-400 text-sm pl-8">
                    Most hosting platforms provide free SSL certificates automatically. Enable HTTPS for secure connections to your site.
                  </p>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  <span className="font-bold">Pro Tip:</span> Services like Vercel and Netlify make it super easy - just connect your domain and they handle SSL automatically!
                </p>
              </div>
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
