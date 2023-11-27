import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Envianos un Mensaje!</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="mail" placeholder="Ingresa tu E-mail" />
        <input type="text" placeholder="Ingrese el Asunto" />
        <textarea placeholder="Escribe tu Mensaje" rows="4"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
