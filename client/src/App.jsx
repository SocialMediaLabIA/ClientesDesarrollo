import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import LoginView from "./views/LoginView";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<LoginView />} />
      </Routes>
    </>
  );
}

export default App;
