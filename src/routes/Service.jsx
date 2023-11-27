import Hero from "../components/Hero/Hero";
import Navbar from './../components/NavBar/Navbar';
import AboutImg from "./../assets/6.jpg";
import Footer from "../components/Footer/Footer";
import Trip from "../components/Trip/Trip";

function Service() {
  return (
    <>
    <Navbar />
    
    <Hero
     
     cName="hero-mid"
     heroImg={AboutImg}
     title="Nuestro Servicio"
     btnClass="hidden"
     
     />

      <Trip/>

    <Footer />
    </>
  );
}

export default Service;
