import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>ExplorAR</h1>
          <p>Te ayudamos a elegir tu mejor aventura </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Nuestros Proyectos</h4>
          <a href="/">Nuestros destinos</a>
          <a href="/">Licencia de Uso</a>
          <a href="/">Terminos y Condiciones</a>
          <a href="/">Nuestro Equipo</a>
        </div>
        <div>
          <h4>Comunidad</h4>
          <a href="/">Experiencias con Nosotros</a>
          <a href="/">Costos y Reservas</a>
          <a href="/">Destinos Populares</a>
          <a href="/">Queres trabajar con nosotros?</a>
        </div>
        <div>
          <h4>Ayuda</h4>
          <a href="/">Contactanos</a>
          <a href="/">Envianos un Mensaje</a>
          <a href="/">Llamanos</a>
          <a href="/">Nuestro Equipo</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
