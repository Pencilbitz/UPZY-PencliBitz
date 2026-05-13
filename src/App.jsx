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
import FullStackWebDevelopment from './pages/Workshop/Full-Stack-Web-Development';
import FutureofAI from './pages/Webinars/FutureofAI';
import InternationalDetails from './pages/Conference/InternationalDetails';
import NatinalDetails from './pages/Conference/NatinalDetails';
import WhatsAppButton from './pages/WhatsAppButton';
import ScrollToTop from './pages/ScrollToTop';
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
          <Route path="/Full-Stack-Web-Development" element={<FullStackWebDevelopment />} />
          <Route path="/FutureofAI" element={<FutureofAI />} />
          <Route path="/InternationalDetails" element={<InternationalDetails />} />
          <Route path="/NationalDetails" element={<NatinalDetails />} />
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
