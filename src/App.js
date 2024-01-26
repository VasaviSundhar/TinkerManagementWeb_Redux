import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Header } from "./shared/Header1";
import { Footer } from "./shared/Footer";
import { Home } from "./Pages/Home/Home2";
import  AddClient  from "./Pages/Client/AddClient.jsx";
import Booking from "./Pages/Booking/Booking.jsx";
import Login from "./Pages/Dashboard/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientRegistration" element={<AddClient />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App;
