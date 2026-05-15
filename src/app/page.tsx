import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Expertise from "./components/Experties";
import SelectedWork from "./components/SelectedWork";


export default function Home() {
  return (
    <div className="bg-[#12110F]">
    <Navbar/>
    <Hero/>
    <Expertise/>
    <SelectedWork/>
    <About/>
    <Contact/>
    </div>
  );
}
