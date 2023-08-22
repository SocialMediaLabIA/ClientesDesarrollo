import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./views/Home";


function App() {
  return (
<>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
</>
  );
}

export default App;
