import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Show, RedirectToSignIn, SignIn, SignUp } from '@clerk/react';
import { WorkshopProvider } from './context/WorkshopContext';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import InternationalConference from './pages/InternationalConference';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Workshops from './pages/Workshops';
import NationalConference from './pages/NationalConference';
import Categories from './pages/Categories';
import Webinars from './pages/Webinars';
import WhatsAppButton from './pages/WhatsAppButton';
import ScrollToTop from './pages/ScrollToTop';

         // Webinars
import FutureofAI from './pages/Webinar/FutureofAI'

         // Conferences
import ICIRGI30May2026 from './pages/Conference/ICIRGI-30-May-2026';
import ICGASETM16May2026 from './pages/Conference/ICGASETM-16-May-2026';
         // Workshops
import Dec27Workshop from './pages/Workshop/Upzypencilbitz-Dec-27'
import PythonBasedGeneticOptimization16to17Apr from './pages/Workshop/Python-Based-Genetic-Optimization-16to17-Apr';
import AIDrivenDecisions from './pages/Workshop/AI-Driven-Decisions-18-Apr-2026'
import DataAnalyticsInAI from './pages/Workshop/Data Analytics In AI-4-May-2026'
import ThePowerOfInnovationAndIPR28Apr2026 from './pages/Workshop/The-Power-Of-Innovation-And-IPR-28-Apr-2026';
import DigitalMarketing30to31May2026 from './pages/Workshop/Digital-Marketing-30-to-31-May-2026'

import './App.css';

// Protected Route Component
function ProtectedRoute({ children }) {
  return (
    <>
      <Show when="signed-in">
        {children}
      </Show>
      <Show when="signed-out">
        <RedirectToSignIn />
      </Show>
    </>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/international-conference" element={<InternationalConference />} />
          <Route path="/conference" element={<InternationalConference />} />
          <Route path="/national-conference" element={<NationalConference />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workshops" element={<Workshops />} />


                            {/* Workshops  Links */}
          <Route path="/upzypencilbitz-Dec-27" element={<Dec27Workshop />} />
          <Route path="/Python-Based-Genetic-Optimization-16to17-Apr" element={<PythonBasedGeneticOptimization16to17Apr />} />
          <Route path="/AI-Driven-Decisions-18-Apr-2026" element={<AIDrivenDecisions />} />
          <Route path="/The-Power-Of-Innovation-And-IPR-28-Apr-2026" element={<ThePowerOfInnovationAndIPR28Apr2026 />} />
          <Route path="/Digital-Marketing-30-to-31-May-2026" element={<DigitalMarketing30to31May2026 />} />
          <Route path="/Data-Analytics-In-AI-4-May-2026" element={<DataAnalyticsInAI />} />


                            {/* Webinars  Links */}

          <Route path="/FutureofAI" element={<FutureofAI />} />

                           {/* Conferences  Links */}

          <Route path="/ICIRGI-30-May-2026" element={<ICIRGI30May2026 />} />
          <Route path="/ICGASETM-16-May-2026" element={<ICGASETM16May2026 />} />
          <Route 
            path="/login/*" 
            element={
              <div className="flex items-center justify-center min-h-[80vh] pt-20">
                <SignIn routing="path" path="/login" signUpUrl="/signup" />
              </div>
            } 
          />
          <Route 
            path="/signup/*" 
            element={
              <div className="flex items-center justify-center min-h-[80vh] pt-20">
                <SignUp routing="path" path="/signup" signInUrl="/login" />
              </div>
            } 
          />
          <Route path="/admin/login" element={<Navigate to="/login" replace />} />
          <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <WorkshopProvider>
        <ScrollToTop />
        <AppContent />
      </WorkshopProvider>
    </Router>
  );
}

export default App;
