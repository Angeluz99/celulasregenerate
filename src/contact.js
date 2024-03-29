import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container text-center'>
      {/* Add content for the bottom section */}
      <footer>
        <h3><i className="bi bi-send-arrow-up"></i>  ¡Contáctanos para asesorías y pedidos!</h3>
        <div className='contact-info text-center'>
        <h6>Escríbenos via <a className='whatsAppfoot' href="https://wa.me/523345165088/?text=Quisiera%20saber%20más%20de%20sus%20productos`" target="_blank" rel="noopener noreferrer">
          <i className=" bi bi-whatsapp">WhatsApp.</i> </a> <br />
          O visita nuestras redes sociales para enterarte de las últimas promociones: <a href="https://www.facebook.com/profile.php?id=61551370328412" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"> Facebook,</i>
          </a> <br />     
           <a href="https://www.instagram.com/regeneratecelulasmadre/" target="_blank" rel="noopener noreferrer"> 
            <i className="bi bi-instagram"> Instagram.</i></a><br />
            También puedes contactar via <a href="mailto:regeneratecelulasmadre@gmail.com">regeneratecelulasmadre@gmail.com</a><br />
             O llamar al <a href="tel:3345165088">33 4516 5088</a> en horario de oficina.</h6>
      </div>
      </footer>
    </div>
  );
};

export default Contact;