import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import LearningPath from './components/LearningPath';
import About from './components/About';
import YouTubeSection from './components/YouTubeSection';
import EnrollForm from './components/EnrollForm';
import Footer from './components/Footer';

function App() {
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

  return (
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
  );
}

export default App;
