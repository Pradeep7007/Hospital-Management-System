import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Patient from './components/Patientnavbar.js';
import Appointment from './pages/Appointment.js';
import Rooms from './pages/Rooms.js';
import Appointmentform from './components/Appointmentform.js';
import Records from './pages/Records.js';
import Home from './pages/Home.js';

function App() {
  return (
    <BrowserRouter>
    <Patient/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/form" element={<Appointmentform />} />
        <Route path="/record" element={<Records />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
