import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Destinos Populares</h1>
      <p>Descubre la belleza y encanto de nuestros destinos, donde la naturaleza se fusiona con la cultura para ofrecerte experiencias inolvidables.</p>
    
    <DestinationData
    className="first-des"
    heading = "San Carlos de Bariloche"
    text = "San Carlos de Bariloche, en la Patagonia argentina, es famoso por sus paisajes alpinos, lagos cristalinos y montañas nevadas. En invierno, es un destino de esquí destacado, mientras que en verano ofrece actividades al aire libre como senderismo y pesca. La ciudad combina una arquitectura encantadora con una próspera escena gastronómica, destacando por su producción de chocolate y cerveza artesanal. Bariloche es un lugar atractivo durante todo el año, atrayendo a viajeros con su belleza natural y actividades diversas."
    img1={Mountain2}
    img2={Mountain1}
    />
    <DestinationData
    className="first-des-reverse"
    heading = "La Quebrada de Humahuaca"
    text = "La Quebrada de Humahuaca, ubicada en la provincia de Jujuy, Argentina, es un espectacular paisaje montañoso declarado Patrimonio Mundial de la Humanidad. Conformada por profundos cañones y coloridas formaciones geológicas, la quebrada revela la rica historia cultural de la región a través de sus pueblos originarios y arquitectura colonial. Cada rincón de este enclave muestra una mezcla única de tradiciones, con mercados artesanales, festivales coloridos y paisajes que cambian de tonalidad a lo largo del día, ofreciendo a los visitantes una experiencia visual y cultural inolvidable."
    img1={Mountain4}
    img2={Mountain3}
    />
    
    </div>
  );
};

export default Destination;
