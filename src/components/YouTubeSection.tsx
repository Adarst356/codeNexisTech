import { Youtube, Play, TrendingUp } from 'lucide-react';

export default function YouTubeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-400/20 rounded-full text-red-400 text-sm font-semibold mb-6">
              <Youtube className="w-4 h-4" />
              Subscribe for Free Tutorials
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learn on YouTube
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Watch comprehensive tutorials and follow along with real projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              <div className="relative bg-slate-800 border-2 border-slate-700 rounded-3xl overflow-hidden group-hover:border-red-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

                  <a
                    href="https://www.youtube.com/@CodeNexisTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 group/play"
                  >
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-red-500 transition-all duration-300 shadow-2xl shadow-red-500/50">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </a>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-white font-semibold text-sm">Latest: Flutter Complete Course 2024</div>
                      <div className="text-gray-300 text-xs mt-1">50+ hours of content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Regular Content Updates</h3>
                    <p className="text-gray-400">New tutorials every week covering the latest in Flutter and mobile development</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Step-by-Step Tutorials</h3>
                    <p className="text-gray-400">Follow along with detailed explanations and build complete applications</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.youtube.com/@CodeNexisTech"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-red-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/50"
              >
                <Youtube className="w-6 h-6" />
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
