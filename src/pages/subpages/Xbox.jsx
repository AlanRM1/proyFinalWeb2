import React, { StrictMode, useState } from 'react';
import Cajas from '../../components/Cajas';
import imgXbox from '../../assets/img/xbox.jpg';

const Xbox = () => {
    return <div>
        <div>
        <StrictMode>
            <Cajas
                titulo="Xbox: Innovación y Entretenimiento en el Mundo del Software de Juegos"
                imagen={imgXbox}
                texto="Xbox es mucho más que una consola; es un ecosistema robusto de software que
                redefine la experiencia de los videojuegos. Desde su debut en 2001, Xbox ha ofrecido una
                plataforma que combina potentes capacidades gráficas con una interfaz de usuario intuitiva.
                Con servicios como Xbox Game Pass y Xbox Live, los jugadores tienen acceso a una vasta biblioteca
                de títulos y una comunidad global en línea. La integración con el sistema operativo Windows y
                tecnologías como Xbox Cloud Gaming permiten una experiencia de juego fluida y continua en múltiples
                dispositivos. Xbox sigue liderando la industria del entretenimiento interactivo, proporcionando
                innovación constante y una experiencia inmersiva para jugadores de todo el mundo."
                borderColor="black"
                backgroundColor="#2CC638"
                />
            </StrictMode>
        </div>
    </div>
}

export default Xbox