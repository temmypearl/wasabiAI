import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home " // Fixed trailing space
import Submit from "./pages/submit";
import Gallery from "./pages/gallery";

function App() {
  return (
    <>
      <Navbar />
      {/* Optional: Wrapping element to globally offset the fixed Navbar layout */}
      <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
      <main className="pt-16"> 
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/submit" element={<Submit/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;