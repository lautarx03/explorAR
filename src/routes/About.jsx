import Hero from "../components/Hero/Hero";
import Navbar from './../components/NavBar/Navbar';
import AboutImg from "./../assets/night.jpg";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs/AboutUs";

function About() {
  return (
    <>
    <Navbar />
    <Hero
     
     cName="hero-mid"
     heroImg={AboutImg}
     title="Sobre Nosotros"
     btnClass="hidden"
     
     />
     <AboutUs/>
    <Footer />
    </>
  );
}

export default About;
