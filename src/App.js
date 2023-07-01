// import About from "./components/About";
// import Contact from "./components/Contact";
// import Experience from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Portfolio from "./components/Projects";
// import Services from "./components/Services";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <NavBar />
      <Home />
    
      <SocialLinks />
    </div>
  );
}

export default App;
