import { Youtube, Mail, MessageCircle, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">CodeNexisTech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering developers worldwide with practical, project-based mobile app development tutorials.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Learning</h3>
            <ul className="space-y-2">
              <li><a href="#categories" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Flutter Development</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Dart Programming</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Mobile UI Design</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Firebase Integration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#learning-path" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Learning Path</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#youtube" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">YouTube Channel</a></li>
              <li><a href="#enroll" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Enroll Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://www.youtube.com/@CodeNexisTech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-500/10 transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
                <span className="text-sm">YouTube</span>
              </a>
              <a
                href="mailto:contact@codenexistech.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">Email</span>
              </a>
              <a
                href="#enroll"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-green-500/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm">Community</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {currentYear} CodeNexisTech. All rights reserved. Built with passion for developers.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
