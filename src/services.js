import React, { useState } from 'react';

const ServiceAccordion = ({ services }) => {
  const [isImageTapped, setIsImageTapped] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false); // Add state for managing alert visibility

  const handleImageTap = () => {
    setIsImageTapped(!isImageTapped);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        showAlert(`Copiado en el portapapeles`);
      })
      .catch((error) => {
        console.error('Failed to copy code to clipboard:', error);
        showAlert('Failed to copy code to clipboard. Please try again.');
      });
  };

  const showAlert = (message, duration = 1000) => {
    setIsAlertVisible(true);
    setAlertMessage(message);

    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage('');
    }, duration);
  };

  return (
    <div className='accordions-container'>
      {services.map((service, index) => (
        <div key={index} className={`accordion ${index === activeIndex ? 'active' : ''}`}>
          <h5 className='d-flex justify-content-between' onClick={() => toggleAccordion(index)}>
            <p><i className={`fa-solid ${service.icon}`}></i> {service.title}</p>
            <i className={`bi ${index === activeIndex ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></i>
          </h5>
          <div className={`accordion-content cascade-item ${index === activeIndex ? 'active' : ''}`}>
            <p><i className="bi bi-search-heart"></i> {service.description}</p>
            {/* <p>Impartido por <strong>{service.ponente}</strong></p> */}
            <div
              // onClick={() => handleImageTap()}
              // className={isImageHovered ? 'scaleImageServices' : ''}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}>
              <img
                src={process.env.PUBLIC_URL + service.imageUrl}
                alt={service.title}
                loading="lazy"
                className={isImageTapped ? 'scaleImageServices' : ''}
                id='serviceimages'
              />
            </div>
            <p className='d-flex justify-content-end mt-1'>
              <strong> <i className="bi bi-calendar-heart"></i> {service.presentaciones}</strong>
            </p>
            {/* <a href={service.linkZoom} target="_blank" rel="noopener noreferrer">
              <p className='border border-success d-flex justify-content-end'><i className="fa-solid fa-video"></i>{service.lugar} </p>
            </a>
            <h6 className='d-flex justify-content-end'>
              Código: {service.code}{' '}
              <i className="codeLink fa-regular fa-copy" onClick={() => handleCopyCode(service.code)}></i>
            </h6> */}
            {isAlertVisible && (
        <div className="alert">{alertMessage}</div>
      )}
          </div>

        </div>
      ))}

    </div>
  );
};

const Services = () => {
  const servicesData = [
    { icon: 'fa-play', title: 'Plan Mini', presentaciones: "$800", lugar: "Hotel Baruk, GDL", description: 'Facebook con una publicación por semana + promoción pagada mensual', ponente: 'Varios Expertos', imageUrl: '/images/service0.jpg', linkZoom: '', code: '' },
    { icon: 'fa-forward-step', title: 'Plan Medio', presentaciones: "$1000", lugar: "Via Zoom", description: 'Facebook con 2 publicaciones por semana + 1 promoción pagada al mes, además perfil en Instagram con contenido ligado', ponente: 'Andrés Castañeda Luna', imageUrl: '/images/service0.jpg', linkZoom: 'https://us06web.zoom.us/rec/share/Uwp-qWRW6RrpBwd7N54wjeWNM67v3jfBRzj68T4WbWOYalbkfLQygtCr_bGXV9Hy._kBmDC5P9Yoq3rQ5', code: '@zN7gCh=' },
    { icon: 'fa-forward-fast', title: 'Plan Grande', presentaciones: "$1200", lugar: "Via Zoom", description: 'Facebook con 3 publicaciones por semana + 2 promociones pagadas al mes, además perfil en Instagram con contenido ligado. Y Whatsapp empresarial con imagen de perfil', ponente: 'Dr. Alexis Monge', imageUrl: '/images/service0.jpg', linkZoom: 'https://us06web.zoom.us/rec/share/4ui9kNBMlMj68XsJSdau-ZuUVx4cLii3scoSkCfs2-HZAE1bwsmGDywHH5Jkjzwz.hhcnPENeP3wMiDk7', code: 'zd#l3e%%' },

  ];

  return (
    <section className='allServices-container'>
      <img
        src={process.env.PUBLIC_URL + '/images/bannermid.jpg'}
        alt="Interactuar"
        loading="lazy"
        className='bannermid'
      />      
      <h2><i className="bi bi-people-fill"></i> Redes</h2>
      <p>
      Posiciona tu marca o negocio a través de redes sociales. Conoce los planes de manejo de redes que tenemos para ti.
      </p>

      <ServiceAccordion services={servicesData} />
    </section>
  );
};

export default Services;
