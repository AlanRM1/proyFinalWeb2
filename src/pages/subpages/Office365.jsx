import React, { StrictMode, useState } from 'react';
import Cajas from '../../components/Cajas';
import imgOffice from '../../assets/img/microsoft365.png';

const Office = () => {
    return <div>
        <div>
        <StrictMode>
            <Cajas
                titulo="Microsoft 365: La Plataforma Integral de Productividad (antes Office)"
                imagen={imgOffice}
                texto="Microsoft 365 es una suite completa de aplicaciones y servicios que transforman la
                    productividad en el lugar de trabajo. Desde su lanzamiento, ha evolucionado para incluir
                    herramientas esenciales como Word, Excel, PowerPoint, y Outlook, además de servicios en
                    la nube como OneDrive y Teams. Microsoft 365 no solo mejora la colaboración y comunicación
                    entre equipos, sino que también ofrece soluciones avanzadas de seguridad y gestión, adaptándose
                    a las necesidades de empresas y usuarios individuales. Con actualizaciones constantes y nuevas
                    funciones, Microsoft 365 sigue siendo una pieza clave para la eficiencia y la innovación en un
                    mundo digital en constante cambio."
                borderColor="#72DCEB"
                backgroundColor="#C4E0FA"
                />
            </StrictMode>
        </div>
    </div>
    
}

export default Office