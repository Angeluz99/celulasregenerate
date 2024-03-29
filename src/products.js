import React, { useState } from 'react';

const ProductAccordion = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isImageTapped, setIsImageTapped] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHover = (index) => {
    setIsHovered(index);
  };

  const handleLeave = () => {
    setIsHovered(null);
  };

  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  const handleImageTap = () => {
    setIsImageTapped(!isImageTapped);
  };

  return (
    <div className='accordions-container'>
      {products.map((product, index) => (
        <div
          key={index}
          className={`accordion ${index === activeIndex ? 'active' : ''}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <h5
            className={`d-flex justify-content-between`}
            onClick={() => toggleAccordion(index)}
          >
            <p>
              <i className={`fa-solid ${product.icon}`}></i> {product.title}
            </p>
            {isHovered === index && (
              <span className="presentaciones-tooltip">
                <strong>{product.presentaciones}</strong>
              </span>
            )}
            <i className={`bi ${index === activeIndex ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></i>
          </h5>
          <div
            className={`accordion-content cascade-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleImageTap()}
          >
            <p>
              <strong> <i className="bi bi-body-text"></i></strong> {product.description}
            </p>
            <div
              // className="img-container"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <img
                src={process.env.PUBLIC_URL + product.imageUrl}
                alt={product.title}
                loading="lazy"
                className={isImageTapped ? 'scaleImage' : '' }
              />
              {isImageHovered && (
                <span className="img-message">*Imagen de referencia. <strong>Contáctanos para reibir nuestros catálogos.</strong></span>
              )}
            </div>
            <p className='productPresentaciones' >
              <strong> <i className="bi bi-prescription2"></i> {product.presentaciones}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


const Products = () => {
  // Sample data for 14 products
  const productsData = [
    { icon: 'fa-cookie', title: 'Células Madre', presentaciones: "Disponible", description: 'Las células madre mesenquimales son capaces de auto renovarse. Tienen propiedades inmunomodulatorias, debido a que secretan citoquinas y receptores que son capaces de modificar el microambiente inmune del huésped.', imageUrl: '/images/product1.jpg' },
    { icon: 'fa-syringe', title: 'Implantes', presentaciones: "Disponible", description: 'El implante liofilizado de placenta apoya a la homeostasis del organismo, es decir, a mantener el equilibrio natural del cuerpo. Como resultado, el proceso de envejecimiento se hace más lento y se mejora la producción de colágeno y elastina.', imageUrl: '/images/product2.jpg' },
    { icon: 'fa-thermometer', title: 'Fibroblastos', presentaciones: "Disponible", description: 'Los fibroblastos son las principales células productoras de colágeno y elastina en nuestro cuerpo. Son esenciales en el rejuvenecimiento de la piel.', imageUrl: '/images/product3.jpg' },
    { icon: 'fa-virus-covid', title: 'Exosomas', presentaciones: "Disponible", description: 'Los Exosomas son pequeñas vesículas, que provienen de las células, con un alto contenido en proteínas, lípidos, ARN mensajero, ARN mitocondrial, ADN y distintos factores de crecimiento.', imageUrl: '/images/product4.jpg' },
    { icon: 'fa-vial-virus', title: 'Factor de Transferencia', presentaciones: "Disponible", description: 'El Factor de Transferencia es un producto que consta de moléculas mensajeras que llevan información al sistema inmunológico de un individuo (Inmunomodulador) para incrementar sus defensas y su función.', imageUrl: '/images/product5.jpg' },
    { icon: 'fa-viruses', title: 'NK', presentaciones: "Disponible", description: 'Las células asesinas naturales (natural killer cells [NK]) son un tipo de linfocitos producidos en la médula ósea, cuya función efectora está mediada por la producción de citocinas y su actividad citotóxica.', imageUrl: '/images/product6.jpg' },
    { icon: 'fa-vials', title: 'Factores de Crecimiento', presentaciones: "Disponible", description: 'Los factores de crecimiento plasmático son proteínas que se encuentran en los tejidos y se encargan de la reparación de tejido dañado, en enfermedades como tendinopatías, lesiones meniscales o úlceras corneales y vasculares, o alopecia, entre otras.', imageUrl: '/images/product7.jpg' },
    { icon: 'fa-seedling', title: 'Extracto Proteico', presentaciones: "Disponible", description: 'Actúa como una potente terapia reguladora del organismo humano y energizante general, gracias a su gran contenido de factores de crecimiento, nutrientes y proteínas.', imageUrl: '/images/product8.jpg' },
    { icon: 'fa-flask', title: 'Mixture', presentaciones: "Disponible", description: 'Mixture combina las terapias más novedosas de la medicina regenerativa lo que lo convierte en el producto más completo de la industria estética. ', imageUrl: '/images/product10.jpg' },
    { icon: 'fa-tablets', title: 'Pellet', presentaciones: "Disponible", description: 'Los pellets hormonales son el futuro de la terapia hormonal. Es un tratamiento de terapia hormonal bioidéntica. Contamos con pellet de DHEA-Testosterona y pellet de progesterona.', imageUrl: '/images/product11.jpg' },
    { icon: 'fa-face-kiss-wink-heart', title: 'Suero Facial', presentaciones: "Disponible", description: 'El principal ingrediente de nuestro suero facial sonlos factores de crecimiento de las células troncales mesenquimales.', imageUrl: '/images/product12.jpg' },
    { icon: 'fa-bottle-water', title: 'Sueroterapia', presentaciones: "Disponible", description: 'Amplia gama de sueros terapéuticos, contáctanos para compartirte nuestro catálogo.', imageUrl: '/images/product13.jpg' },
    { icon: 'fa-bottle-droplet', title: 'Mix de Sueros', presentaciones: "Disponible", description: 'Viales de sueroterapia unidosis con las concentraciones necesarias de nutrientes, funcionan como adyuvantes en el tratamiento de diversas patologías crónico degenerativas, inmunológicas, neurodegenerativas y de envejecimiento.', imageUrl: '/images/product14.jpg' },
    { icon: 'fa-head-side-virus', title: 'Kit de Alopecia', presentaciones: "Disponible", description: 'Tratamiento capilar contra la Alopecia que contiene factores de crecimiento de las Células Madre Mesenquimales, con resultados clínicamente comprobados.', imageUrl: '/images/product15.jpg' },
    { icon: 'fa-face-grin-stars', title: 'Línea Estética', presentaciones: "Disponible", description: 'De la linea Science Beauty: -Skin Perfection. -Neocollagen. -Clear Skin Cell. -Dustasterida.', imageUrl: '/images/product16.jpg' },



  ];

  return (
    <section className='allProducts-container'>
      <h2><i className="bi bi-cookie"></i> Tratamientos</h2>
      <p>
        La medicina regenerativa ofrece tratamientos avanzados que <strong>aprovechan las propias capacidades
        curativas del cuerpo para acelerar la regeneración de tejidos</strong>, reducir el tiempo de
        recuperación y mejorar la calidad de vida de los pacientes.
      </p>
      <div className="productItemsContainer">     
         <ProductAccordion products={productsData} />
      </div>

    </section>
  );
};

export default Products;