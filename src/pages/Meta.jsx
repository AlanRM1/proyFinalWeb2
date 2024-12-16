import { StrictMode } from 'react'
import Cajas from '../components/Cajas'
import '../css/Meta.css'
import Footer from '../components/Footer';
import imgFb from '../assets/img/facebook.webp'
import imgWa from '../assets/img/whatsapp.jpg'
import imgIg from '../assets/img/instagram.png'

const Meta=()=>{
    return <div className='prinMeta'>
        <h1 className='titFace'>Meta (antes Facebook)</h1>
        <p>
            Meta Platforms, Inc. (anteriormente conocido como Facebook, Inc.), cuyo nombre comercial es Meta,
            es un conglomerado estadounidense de tecnología y redes sociales con sede en California.
            Es la empresa matriz de Facebook, Instagram, WhatsApp, Messenger Live y Threads.
        </p>
        <StrictMode>
        <Cajas titulo="Facebook" imagen={imgFb} texto="Es un sitio web de origen estadounidense dedicado a
            compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos
            musicales, así como contenidos amateur como videoblogs. Las personas que crean contenido para esta 
            plataforma generalmente son conocidas como youtubers." 
            borderColor="black" 
            backgroundColor="#2683E5"/>

        <Cajas titulo="WhatsApp" imagen={imgWa} texto="​WhatsApp Messenger —o simplemente WhatsApp— es una
            aplicación de mensajería instantánea para teléfonos inteligentes (también cuenta con versiones para
            computadora), propiedad de la empresa estadounidense Meta. La aplicación permite enviar y recibir
            mensajes mediante Internet, además de imágenes, videos, audios, grabaciones de audio (notas de voz),
            documentos, ubicaciones, contactos, gifs, stickers, así como llamadas y videollamadas con varios
            participantes a la vez, entre otras funciones." 
            borderColor="black" 
            backgroundColor="#59cf62"/>

        <Cajas titulo="Instagram" imagen={imgIg} texto="Instagram (comúnmente abreviado como IG o Insta) es una
            aplicación y red social propiedad de Meta. Creada por Kevin Systrom y Mike Krieger, fue lanzada el 6
            de octubre de 2010. Ganó rápidamente popularidad, llegando a tener más de 100 millones de usuarios
            activos en abril de 2012 y más de 300 millones en diciembre de 2014." 
            borderColor="black" 
            backgroundColor="#a84798"/>
        </StrictMode>
        <Footer />
    </div>
}

export default Meta