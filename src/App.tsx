import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import MouseMoveEffect from '@/components/mouse-move-effect';
import JumpToTop from '@/components/jump-to-top';
import SmoothScroll from '@/components/smooth-scroll';
import FramerLazyMotion from '@/components/framer-lazy-motion';
import { Toaster } from '@/components/ui/sonner';

// Pages (to be created)
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="grid-background-large min-h-screen">
        <SmoothScroll>
          <FramerLazyMotion>
            <MouseMoveEffect />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project/:id" element={<Project />} />
              </Routes>
            </main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </FramerLazyMotion>
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
