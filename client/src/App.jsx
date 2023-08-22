import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import RoadMap from "./views/RoadMap";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<LoginView />} />
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<RoadMap />} />
      </Routes>
    </>
  );
}

export default App;
