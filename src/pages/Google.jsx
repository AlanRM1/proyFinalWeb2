import { StrictMode } from 'react'
import Cajas from '../components/Cajas'
import '../css/Google.css'
import Footer from '../components/Footer';
import imgYT from '../assets/img/youtube.jpg'
import imgGmail from '../assets/img/gmail.jpg'
import imgGSearch from '../assets/img/google-search.jpg'
import gmaps from '../assets/img/gmaps.jpg'

import CustomCarousel from '../components/Carousel';
const items = [
  {
    src: gmaps,
    altText: 'Google Maps', 
    caption: 'Aplicación de navegación y mapas que ofrece indicaciones y vistas de calles a nivel mundial.',
    key: 1,
  },
  {
    src: imgGmail,
    altText: 'Gmail', 
    caption: 'Servicio de correo electrónico gratuito y basado en la web con amplias capacidades de almacenamiento y seguridad.',
    key: 2,
  },
  {
    src: imgGSearch,
    altText: 'Google Search', 
    caption: 'Motor de búsqueda que permite a los usuarios encontrar información en la web de manera rápida y eficiente.',
    key: 3,
  },
  {
    src: imgYT,
    altText: 'YouTube', 
    caption: 'Plataforma de video donde los usuarios pueden ver, subir y compartir contenido audiovisual de todo tipo.',
    key: 4,
  },
];

const Google=()=>{
    return <div className='prinGoogle'>
        <h1 className='titGoogle'>Google: Innovación al Alcance de Todos</h1>
        <p className='googp'>
            Fundada en 1998 por Larry Page y Sergey Brin mientras eran estudiantes en la Universidad de Stanford,
            Google comenzó como un motor de búsqueda innovador que rápidamente se convirtió en la puerta de acceso
            a la información en Internet. Su misión de "organizar la información del mundo y hacerla universalmente
            accesible y útil" ha guiado a la empresa en su expansión a diversos campos tecnológicos. Hoy en día,
            Google es una parte fundamental de la vida diaria para miles de millones de personas, ofreciendo servicios
            que van desde la búsqueda en Internet hasta sistemas operativos móviles y soluciones en la nube.
        </p>
        <p className='googp'>
        Google ha tenido un impacto profundo en la forma en que accedemos a la información, nos comunicamos
        y realizamos negocios. Con productos y servicios innovadores, continúa siendo una fuerza dominante
        en la tecnología global, mejorando la vida de miles de millones de personas en todo el mundo.
        </p>

        <CustomCarousel items={items} className='carousel'/>

        <StrictMode>
            <Cajas titulo="Google Search" imagen={imgGSearch}
            texto="El motor de búsqueda de Google es conocido por su precisión, rapidez y facilidad de uso. Ha revolucionado la manera en que las personas acceden a la información y ha establecido el estándar para los motores de búsqueda en todo el mundo." 
            borderColor="black" 
            backgroundColor="#687795"/>
            
            <Cajas titulo="Youtube" imagen={imgYT} 
            texto="Es un sitio web de origen estadounidense dedicado a
            compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos
            musicales, así como contenidos amateur como videoblogs. Las personas que crean contenido para esta 
            plataforma generalmente son conocidas como youtubers." 
            borderColor="black" 
            backgroundColor="#bb5757"/>

            <Cajas titulo="Gmail" imagen={imgGmail} 
            texto="Es un servicio de correo electrónico proporcionado
            por la empresa estadounidense Google desde el 1 de abril de 2004. Tras más de cinco años en fase
            beta (de pruebas), el 7 de julio de 2009 Gmail pasó a ser considerado un producto terminado.
            Las cuentas básicas de Gmail son gratuitas pero Google se remunera mostrando anuncios al usuario
            mientras que la versión para empresas, de pago, está libre de publicidad." 
            borderColor="black" 
            backgroundColor="#57bb78"/>
        </StrictMode>
        <Footer />
    </div>
}

export default Google