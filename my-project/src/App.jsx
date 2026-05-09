import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Conference from "./pages/Conference";
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Categories from './pages/categories';
import Workshop from './pages/Workshop';
import Webinar from './pages/webinar';
import National from './pages/NationalConference';
import './App.css';
import NationalConference from './pages/NationalConference';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conference" element={<Conference />} />
          <Route path='/National' element={<NationalConference/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Categories' element={ <Categories/>}/>
          <Route path='/Workshop' element={<Workshop/>}/>
          <Route path='/webinar' element={<Webinar/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;