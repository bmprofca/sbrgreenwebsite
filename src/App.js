import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteProvider } from "./SiteContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  );
}

export default App;
