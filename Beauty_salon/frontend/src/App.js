import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Reservations from "./components/Reservations/Reservations";
import UpdateClient from "./components/UpdateClient/UpdateClient";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/clients" element={<Reservations />} />
        <Route path="/clients/:id" element={<UpdateClient />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
