import { StrictMode } from 'react'
import Cajas from '../components/Cajas'
import '../css/Adobe.css'
import Footer from '../components/Footer';
import imgPs from '../assets/img/photoshop.jpeg'
import imgAi from '../assets/img/illustrator.jpg'
import imgAC from '../assets/img/acrobat-reader.png'

const Adobe=()=>{
    return <div>
            <div className='PrinAdobe'>
            <h1 className='titAd'>Adobe: Creatividad sin Límites</h1>
            <p className='adobp'>
                Fundada en 1982 por John Warnock y Charles Geschke, Adobe comenzó su andadura con la creación del
                lenguaje de descripción de páginas PostScript, que revolucionó la industria de la impresión. A lo largo
                de los años, Adobe ha evolucionado para convertirse en líder mundial en software de creatividad y
                multimedia. Sus productos icónicos, como Photoshop, Illustrator y Acrobat, han permitido a creativos y
                profesionales de todo el mundo dar vida a sus ideas y proyectos de manera innovadora y eficiente.
            </p>
            <p className='adobp'>
                Adobe ha jugado un papel crucial en la revolución de la creatividad digital. Sus herramientas
                han permitido a millones de personas expresar sus ideas y proyectos de maneras nuevas y emocionantes,
                estableciendo un estándar de excelencia en la industria del software creativo.
            </p>
            <StrictMode>
                <Cajas titulo="Photoshop: El Estándar de la Edición de Imágenes" imagen={imgPs} 
                texto="Lanzado en 1988, Photoshop se ha convertido en el software de edición de imágenes más popular y utilizado a nivel mundial. Es la herramienta preferida por fotógrafos, diseñadores gráficos y artistas digitales debido a su amplia gama de funciones y capacidad para realizar ediciones detalladas y complejas." 
                borderColor="black" 
                backgroundColor="#306dc9"/>

                <Cajas titulo="Illustrator: Creación de Gráficos Vectoriales" imagen={imgAi} 
                texto="Illustrator, lanzado en 1987, es el software líder en la creación de gráficos vectoriales. Es utilizado por diseñadores para crear logotipos, ilustraciones y gráficos complejos con precisión y escalabilidad." 
                borderColor="black"
                backgroundColor="#965e31"/>

                <Cajas titulo="Acrobat: Innovación en Documentos PDF" imagen={imgAC} 
                texto="Adobe Acrobat, lanzado en 1993, revolucionó la manera en que compartimos y manejamos documentos. Es la herramienta estándar para crear, editar y gestionar archivos PDF, asegurando que los documentos se vean y se impriman de manera consistente en cualquier dispositivo." 
                borderColor="black" 
                backgroundColor="#B30B0B"/>
            </StrictMode>
        </div>
        <Footer />
    </div>
    
}

export default Adobe