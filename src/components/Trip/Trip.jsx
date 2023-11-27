import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../assets/10.jpg";
import Trip2 from "../../assets/3.jpg";
import Trip3 from "../../assets/img.jpg";

function Trip() {
  return (
    <div className="trip">
<h1>Nuestros Viajes Recientes</h1>
<p>Explora nuestras experiencias más recientes, donde cada destino cuenta una historia única llena de aventuras, cultura y momentos inolvidables.</p>
    <div className="tripcard">
      <TripData
      image={Trip1}
      heading= "Buenos Aires"
      text="Buenos Aires, la capital de Argentina, es una ciudad vibrante que fusiona la elegancia europea con la pasión latina. Conocida por su arquitectura magnífica, como el icónico Obelisco y el Teatro Colón, la ciudad ofrece una rica escena cultural, desde tango en las calles de San Telmo hasta galerías de arte en el barrio de Palermo. La gastronomía porteña es incomparable, con parrillas que sirven deliciosas carnes y cafés históricos donde se puede disfrutar de un auténtico mate. Buenos Aires es también hogar de parques extensos, como el Bosque de Palermo, que brindan espacios verdes para relajarse y disfrutar de la vida cosmopolita de la ciudad."
      />
      <TripData
      image={Trip2}
      heading= "Ushuaia"
      text="Ushuaia, conocida como (La Ciudad del Fin del Mundo) , se encuentra en el extremo sur de Argentina, en Tierra del Fuego. Rodeada por majestuosas montañas y el Canal Beagle, Ushuaia ofrece paisajes impresionantes y una atmósfera única. Es la puerta de entrada a la Antártida y cuenta con el Parque Nacional Tierra del Fuego, donde se pueden realizar excursiones para explorar la belleza natural y la diversidad de la fauna. Además, Ushuaia tiene una rica historia vinculada a antiguos presidios, que se puede descubrir en el Museo Marítimo y en el antiguo Presidio de Ushuaia. La ciudad también ofrece oportunidades para actividades al aire libre, como senderismo, navegación y avistamiento de fauna marina."
      />
      <TripData
      image={Trip3}
      heading= "Misiones"
      text="Misiones, en el noreste de Argentina, es una provincia rica en historia y naturaleza. Con las famosas Ruinas de San Ignacio, declaradas Patrimonio de la Humanidad, la región revela el legado jesuita en Sudamérica. El Parque Nacional Iguazú, hogar de las imponentes Cataratas del Iguazú, ofrece una experiencia natural incomparable con su exuberante selva tropical y fauna diversa. La provincia también presenta la Mesopotamia argentina, una región de ríos y arroyos que invita a explorar la biodiversidad única. Misiones es una fusión de cultura, historia y belleza natural, proporcionando a los visitantes una experiencia completa y enriquecedora."
      />
    </div>

    </div>
  );
}

export default Trip;
