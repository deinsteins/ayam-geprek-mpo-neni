import ContactSection from "./components/ContactSection";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex flex-col px-48 py-4 bg-[#B21600]">
        <Hero />
      </div>
      <Content />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
