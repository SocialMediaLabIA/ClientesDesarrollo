import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import RoadMap from "./views/RoadMap";

function App() {
  return (
<>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/roadmap" element={<RoadMap/>} />
      </Routes>
</>
  );
}

export default App;
