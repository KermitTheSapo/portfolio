import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Components/header/header"
import Certificate from "./Components/certificate/certificates"
import Competence from "./Components/competence/competence"
import Contact from "./Components/contact/contact"
import Experience from "./Components/experience/experience"
import Footer from "./Components/footer/footer"
import Home from "./Components/home/Home"
import Projects from "./Components/projects/projects"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<h1>Erro</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}