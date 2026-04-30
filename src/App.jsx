import './App.css'
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to UPZY PencilBitz</h1>
        <p className="text-gray-600">If you can see this, the app is rendering!</p>
      </div>
    </div>
  )
}

export default App
