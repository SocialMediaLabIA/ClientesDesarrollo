import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import RoadMap from "./views/RoadMap";
import Admin from "./views/Admin";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<LoginView />} />
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
