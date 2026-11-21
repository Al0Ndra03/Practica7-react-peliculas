import escudoCucei from "../img/escudo-cucei.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <img src={escudoCucei} alt="Escudo CUCEI" className="footer-logo" />
      <div className="footer-info">
        <p><strong>Integrante:</strong> Alondra Castillo</p>
        <p><strong>Profesor:</strong> Zeus Emanuel Gutierrez Cobian </p>
        <p><strong>Materia:</strong> Desarrolo de Aplicaciones Web en la Nube y Móviles</p>
        <p><strong>Calendario escolar:</strong> 2026B | Noviembre 2026</p>
        <p><strong>Institución:</strong> CUCEI – Universidad de Guadalajara</p>
      </div>
    </footer>
  );
}

export default Footer;