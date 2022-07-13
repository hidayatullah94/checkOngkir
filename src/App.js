import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dasboard from "./pages/Dasboard";
import Register from "./component/Register";
import Login from "./component/Login";
import Navbar from "./parts/Navbar";
import Footer from "./parts/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/dashboard" element={<Dasboard />} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
