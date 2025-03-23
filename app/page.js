'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
    </div>
  );
}
