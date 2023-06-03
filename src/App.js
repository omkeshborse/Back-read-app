// import logo from './logo.svg';
import Aboutus from './component/Aboutus';
import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Tours from './component/Tours'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Aboutus/>
    <Services/>
    <Tours/>
    <Footer/>
    </>
  );
}

export default App;
