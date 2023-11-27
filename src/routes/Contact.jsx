import Hero from "../components/Hero/Hero";
import Navbar from './../components/NavBar/Navbar';
import AboutImg from "./../assets/4.jpg";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
    <Navbar />
    <Hero
     
     cName="hero-mid"
     heroImg={AboutImg}
     title="Nuestro Servicio"
     btnClass="hidden"
     
     />
    <ContactForm />
    <Footer />
    </>
  );
}

export default Contact;
