import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Admin from "./views/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
