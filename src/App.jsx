import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetails from "./componets/VideoDetails";
import SaveVideo from "./componets/SaveVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/save" element={<SaveVideo />} />
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
