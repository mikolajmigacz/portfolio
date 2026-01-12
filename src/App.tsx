import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HomeTemplate } from './components/templates/HomeTemplate';
import { SectionTemplate } from './components/templates/SectionTemplate';
import { ProfileHeader } from './components/organisms/ProfileHeader';
import { Navigation } from './components/organisms/Navigation';
import { Loader } from './components/atoms/Loader';
import { AboutView, SkillsView, WorkView, ProjectsView } from './components/organisms/views';
import { portfolioData } from './data/config';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState('home'); // 'home' | 'about' | 'work' | 'projects' | 'skills'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (viewId: string) => {
    setActiveView(viewId);
  };

  const handleBack = () => {
    setActiveView('home');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'work': return <WorkView />;
      case 'projects': return <ProjectsView />;
      case 'skills': return <SkillsView />;
      case 'about': return <AboutView />;
      default: return null;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
          <>
            <ProfileHeader 
                profile={portfolioData.profile} 
                variant={activeView === 'home' ? 'hero' : 'footer'} 
            >
                {activeView === 'home' && (
                    <Navigation activeView={activeView} onNavigate={handleNavigate} />
                )}
            </ProfileHeader>

            <AnimatePresence mode="wait">
                {activeView === 'home' && (
                <HomeTemplate key="home" />
                )}

                {activeView !== 'home' && (
                <SectionTemplate 
                    key="section"
                    title={activeView.charAt(0).toUpperCase() + activeView.slice(1)} // Basic capitalization
                    onBack={handleBack}
                >
                    {renderContent()}
                </SectionTemplate>
                )}
            </AnimatePresence>
          </>
      )}
    </>
  );
}

export default App;
