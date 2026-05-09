import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { WorkshopProvider } from './context/WorkshopContext';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import InternationalConference from './pages/InternationalConference';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPanel from './pages/AdminPanel';
import Workshops from './pages/Workshops';
import NationalConference from './pages/NationalConference';
import WhatsAppButton from './pages/WhatsAppButton';
import './App.css';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#FF7A00]/30 border-t-[#FF7A00] rounded-full animate-spin"></div>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" replace />;
}

function AppContent() {
  const { user } = useAuth();

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/login" element={user ? <Navigate to="/admin" replace /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/admin" replace /> : <Signup />} />
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
      <AuthProvider>
        <WorkshopProvider>
          <AppContent />
        </WorkshopProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
