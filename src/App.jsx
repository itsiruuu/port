import { useState } from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import TargetCursor from './components/TargetCursor';

export const App = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="relative min-h-screen text-white bg-[#050507] selection:bg-pink-accent/30 selection:text-white overflow-x-hidden">
      <Background />
      <TargetCursor
        targetSelector="button, a, .cursor-target"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        cursorColor="#ffffff"
        cursorColorOnTarget="#E893AC"
      />
      <Navbar onOpenContactModal={handleOpenContactModal} />

      <main className="relative z-10 flex flex-col w-full">
        <Hero onOpenContactModal={handleOpenContactModal} />
        <TechStack />
        <About onOpenContactModal={handleOpenContactModal} />
        <Services />
        <Skills />
        <Projects onOpenContactModal={handleOpenContactModal} />
        <Process />
        <FAQ />
        <ContactCTA onOpenContactModal={handleOpenContactModal} />
      </main>

      <Footer />

      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContactModal} />
    </div>
  );
};

export default App;
