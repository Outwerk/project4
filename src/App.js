import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import HeroSecion from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Navbar />
      <HeroSecion />
      <About />
      <WhyChooseUs />
      <Services />
      <Footer />
    </>
  );
}

export default App;
