import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";



const App = () => {
  
  return (
    
      
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    
    
  );
}

export default App;
