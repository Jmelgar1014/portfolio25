import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}
