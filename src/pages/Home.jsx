import React from 'react';
import { StrictMode } from 'react';
import Cajas from '../components/Cajas';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../css/Home.css';
import soft from '../assets/img/software.jpg';
import imgMicrosoft from '../assets/img/microsoft.png';
import imgMicrosoft2 from '../assets/img/microsoft.jpeg';
import imgAdobe from '../assets/img/adobe.png';
import imgAdobe2 from '../assets/img/adobe2.png';
import imgGoogle from '../assets/img/google.jpg';
import imgGoogle2 from '../assets/img/google2.webp';
import imgMeta2 from '../assets/img/meta.jpg';

const items = [
  {
    src: soft,
    altText: ' ', 
    caption: ' ',
    key: 1,
  },
  {
    src: imgAdobe,
    altText: ' ', 
    caption: ' ',
    key: 2,
  },
  {
    src: imgGoogle,
    altText: ' ', 
    caption: ' ',
    key: 3,
  },
  {
    src: imgMicrosoft,
    altText: ' ', 
    caption: ' ',
    key: 4,
  },
];

const Home = () => {
  return (
    <div>
      <div className="principal">
        <h1 className="titulop">Mundo Tech</h1>
        <CustomCarousel items={items} className='carousel'/>
        <h2 className='stit'>El Poder del Software en la Era Digital</h2>
        <p className='parrafoprin'>
          El software es el corazón que impulsa a cada equipo y dispositivo en nuestro mundo moderno.
          Desde simples aplicaciones móviles hasta complejas infraestructuras en la nube, el software es esencial
          para la innovación, la productividad y la conectividad global. Las empresas que destacamos en este sitio
          han jugado un papel crucial en la evolución tecnológica y se han convertido en pilares fundamentales de
          nuestra sociedad.
        </p>
        <h2 className='stit2'>La Revolución del Software</h2>
        <p className='parrafoprin2'>
          En las últimas décadas, hemos sido testigos de una transformación monumental en el mundo del software.
          Empresas visionarias como "Microsoft", "Google", "Meta" y "Adobe" han liderado esta revolución,
          ofreciendo soluciones que han cambiado la forma en que vivimos y trabajamos.
        </p>
        <StrictMode>
          <Cajas
            titulo="Microsoft: Un Coloso Tecnológico"
            imagen={imgMicrosoft2}
            texto="Desde el lanzamiento del sistema operativo Windows hasta la creación de la plataforma de juegos Xbox y los servicios en la nube de Azure, Microsoft ha dejado una huella imborrable en la industria tecnológica. Sus innovaciones han permitido a millones de personas y empresas alcanzar nuevas alturas de productividad y entretenimiento."
            borderColor="black"
            backgroundColor="#245e37"
            className='c1'
          />
          <Cajas
            titulo="Adobe: Creatividad sin Límites"
            imagen={imgAdobe2}
            texto="Adobe ha empoderado a creativos de todo el mundo con sus herramientas de diseño y multimedia, como Photoshop, Illustrator y Acrobat. Sus soluciones han dado vida a innumerables proyectos creativos, desde diseño gráfico hasta producción de videos y documentos interactivos."
            borderColor="black"
            backgroundColor="#D20103"
            className='c2'
          />
          <Cajas
            titulo="Google: Innovación al Alcance de Todos"
            imagen={imgGoogle2}
            texto="Google ha revolucionado la búsqueda de información, la comunicación y la tecnología móvil. Con productos como el motor de búsqueda de Google, Android y Google Cloud, esta empresa ha democratizado el acceso a la información y la tecnología, haciendo que sean accesibles para todos."
            borderColor="black"
            backgroundColor="#3289a8"
            className='c3'
          />
          <Cajas
            titulo="Meta: Conectando el Mundo"
            imagen={imgMeta2}
            texto="Meta, anteriormente conocida como Facebook, ha cambiado la forma en que nos conectamos y comunicamos. A través de sus plataformas como Facebook, Instagram y WhatsApp, Meta ha creado comunidades globales y ha llevado la interacción social a un nuevo nivel. Su visión del metaverso promete transformar aún más nuestro mundo digital."
            borderColor="blue"
            backgroundColor="#3289a8"
            className='c4'
          />
        </StrictMode>
      </div>
      <Footer className = 'piep'/>
    </div>
  );
};

export default Home;