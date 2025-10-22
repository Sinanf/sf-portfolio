import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HireModal from "./components/HireModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { toggleLanguage } from "./store/languageSlice";


export default function App() {
  const [hireOpen, setHireOpen] = useState(false);
  const dispatch = useDispatch();


  return (
    <main className="min-h-screen bg-surface text-foreground">
      <Header
        onHireClick={() => setHireOpen(true)}
        onLangToggle={() => dispatch(toggleLanguage())}
      />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
      <ToastContainer position="top-right" autoClose={2500} />
    </main>
  );
}
