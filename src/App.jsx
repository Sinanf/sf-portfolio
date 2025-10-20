// src/App.jsx

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HireModal from "./components/HireModal";

export default function App() {

  const [hireOpen, setHireOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header onHireClick={() => setHireOpen(true)} />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </main>
  );
}

