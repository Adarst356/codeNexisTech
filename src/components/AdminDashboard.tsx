import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Download, LogOut, Users, Mail, Calendar } from 'lucide-react';

interface Enrollment {
  id: string;
  name: string;
  email: string;
  learning_interest: string;
  created_at: string;
  status: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterInterest, setFilterInterest] = useState('all');

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnrollments(data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch enrollments');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (filteredEnrollments.length === 0) {
      alert('No enrollments to export');
      return;
    }

    const headers = ['Name', 'Email', 'Learning Interest', 'Status', 'Enrolled Date'];
    const rows = filteredEnrollments.map((e) => [
      e.name,
      e.email,
      e.learning_interest,
      e.status,
      new Date(e.created_at).toLocaleDateString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enrollments_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const interests = ['all', ...new Set(enrollments.map((e) => e.learning_interest))];
  const filteredEnrollments = enrollments.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterInterest === 'all' || e.learning_interest === filterInterest;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: enrollments.length,
    thisMonth: enrollments.filter(
      (e) => new Date(e.created_at).getMonth() === new Date().getMonth()
    ).length,
    pending: enrollments.filter((e) => e.status === 'pending').length,
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Enrollments</p>
                <p className="text-3xl font-bold text-white">{stats.total}</p>
              </div>
              <Users className="w-12 h-12 text-blue-400 opacity-20" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">This Month</p>
                <p className="text-3xl font-bold text-white">{stats.thisMonth}</p>
              </div>
              <Calendar className="w-12 h-12 text-green-400 opacity-20" />
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Review</p>
                <p className="text-3xl font-bold text-white">{stats.pending}</p>
              </div>
              <Mail className="w-12 h-12 text-yellow-400 opacity-20" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 bg-slate-700 text-white placeholder-gray-400 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
            <select
              value={filterInterest}
              onChange={(e) => setFilterInterest(e.target.value)}
              className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            >
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest === 'all' ? 'All Interests' : interest}
                </option>
              ))}
            </select>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          {error && <div className="bg-red-500/10 border border-red-500 text-red-200 p-4 rounded-lg mb-4">{error}</div>}

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Loading enrollments...</p>
            </div>
          ) : filteredEnrollments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No enrollments found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-4 py-3 text-left text-gray-300 font-semibold">Name</th>
                    <th className="px-4 py-3 text-left text-gray-300 font-semibold">Email</th>
                    <th className="px-4 py-3 text-left text-gray-300 font-semibold">Interest</th>
                    <th className="px-4 py-3 text-left text-gray-300 font-semibold">Status</th>
                    <th className="px-4 py-3 text-left text-gray-300 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEnrollments.map((enrollment) => (
                    <tr key={enrollment.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                      <td className="px-4 py-3 text-white">{enrollment.name}</td>
                      <td className="px-4 py-3 text-blue-300">
                        <a href={`mailto:${enrollment.email}`} className="hover:underline">
                          {enrollment.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{enrollment.learning_interest}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            enrollment.status === 'pending'
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'bg-green-500/20 text-green-300'
                          }`}
                        >
                          {enrollment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400">
                        {new Date(enrollment.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredEnrollments.length} of {enrollments.length} enrollments
          </div>
        </div>
      </div>
    </div>
  );
}
