import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./Pages/ProjectDisplay";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/Personal_Portfolio" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="/project/:id" element={<ProjectDisplay />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
