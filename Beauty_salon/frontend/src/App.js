import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Reservations from "./components/Reservations/Reservations";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
