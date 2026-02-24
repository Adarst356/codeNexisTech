import { useState } from 'react';
import { Code2, Mail, Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (email: string, password: string) => void;
  loading: boolean;
  error: string | null;
}

export default function AdminLogin({ onLogin, loading, error }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Code2 className="w-8 h-8 text-blue-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">
              CodeNexis<span className="text-blue-400">Tech</span>
            </h1>
          </div>

          <h2 className="text-xl font-bold text-white mb-2 text-center">Admin Access</h2>
          <p className="text-gray-400 text-center mb-6 text-sm">
            Sign in to view enrollments and analytics
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-200 p-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="codenexis356@gmail.com"
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white placeholder-gray-500 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2 bg-slate-700 text-white placeholder-gray-500 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-6">
            For admin access, please use your registered email and password
          </p>
        </div>
      </div>
    </div>
  );
}
