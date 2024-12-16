import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="piepag">
      <div className="titulo">Mundo tech</div>
      <div className="descri">
        Página dedicada a las empresas más importantes del software en la actualidad, su función,
        algunos de los servicios que ofrecen.
      </div>
      <div className="rrss">Redes Sociales y contacto</div>
      <a href="https://www.facebook.com/alan.rodriguezmendez/" className="rsfb">Facebook</a>
      <a href="https://twitter.com/Alan_RM369/" className="rstwitter">Twitter</a>
      <a href="mailto:arodriguezm@fcpn.edu.bo" className="rsemail">E-Mail</a>
      <div className="cc">2024 by Alan RM</div>
    </footer>
  );
};

export default Footer;
