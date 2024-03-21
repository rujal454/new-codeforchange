import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Slideshow from "./components/Slideshow";
import LoginPage from "./components/loginc";
import Campaign from "./components/Campaign";
import Camp from "./components/Camp";
import DonatePage from "./components/donate";
function App() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Home />
      <Campaign />
      <Camp />
      <Experience />
      <Contact/>
    
    </div>
  );
}

export default App;
