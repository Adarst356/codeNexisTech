import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import LearningPath from './components/LearningPath';
import About from './components/About';
import YouTubeSection from './components/YouTubeSection';
import EnrollForm from './components/EnrollForm';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminError, setAdminError] = useState<string | null>(null);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }, []);

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    if (enrollSection) {
      enrollSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleAdminLogin = async (email: string, password: string) => {
    setAdminLoading(true);
    setAdminError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setAdminError(error.message);
      } else if (data.user) {
        setAdminEmail(email);
      }
    } catch (err) {
      setAdminError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setAdminLoading(false);
    }
  };

  const handleAdminLogout = async () => {
    await supabase.auth.signOut();
    setAdminEmail(null);
  };

  if (adminEmail) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  return (
    <>
      {adminEmail === null && window.location.hash === '#admin' && (
        <AdminLogin onLogin={handleAdminLogin} loading={adminLoading} error={adminError} />
      )}
      {!window.location.hash.includes('admin') && (
        <div className="min-h-screen bg-slate-900">
          <Navbar onEnrollClick={scrollToEnroll} />
          <Hero onEnrollClick={scrollToEnroll} />
          <div id="categories">
            <Categories />
          </div>
          <div id="learning-path">
            <LearningPath />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="youtube">
            <YouTubeSection />
          </div>
          <EnrollForm id="enroll" />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
