import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/common/GlobalStyle";
import ScrollToTop from "./components/common/ScrollToTop";
import ConstructionHomePage from "./pages/ConstructionHomePage";
import VerticalPage from "./pages/VerticalPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ConstructionHomePage />} />
        <Route path="/civil-construction" element={<VerticalPage slug="civil-construction" />} />
        <Route path="/prefabricated-buildings" element={<VerticalPage slug="prefabricated-buildings" />} />
        <Route path="/sports-infrastructure" element={<VerticalPage slug="sports-infrastructure" />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}