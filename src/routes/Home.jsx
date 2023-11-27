import Navbar from './../components/NavBar/Navbar';
import Hero from "./../components/Hero/Hero";
import heroImg from "./../assets/1.jpg";
import Destination from '../components/Destination/Destination';
import Footer from "../components/Footer/Footer";
import Trip from "../components/Trip/Trip";


function Home() {
  return (
    <>
    <Navbar />
     <Hero
     cName="hero"
     heroImg={heroImg}
     title="Tu siguiente viaje comienza con nosotros."
     text="Elegi tu destino favorito."
     buttonText="Contratanos"
     url="/"
     btnClass="show"
     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
  );
}

export default Home;
