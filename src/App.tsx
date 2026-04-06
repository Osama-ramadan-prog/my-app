import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Taxi from './pages/Taxi';
import Tourism from './pages/Tourism';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* الـ Navbar يظهر في كل الصفحات */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/tourism" element={<Tourism />} />
      </Routes>
    </Router>
    
  );
}

export default App;