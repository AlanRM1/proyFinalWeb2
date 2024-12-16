import React, { StrictMode, useState } from 'react';
import Cajas from '../../components/Cajas';
import imgAzure from '../../assets/img/Azure.webp';

const Azure = () => {
    return <div>
        <div>
        <StrictMode>
            <Cajas
                titulo="Azure: La Plataforma Líder en Computación en la Nube"
                imagen={imgAzure}
                texto="Azure es la plataforma de computación en la nube de Microsoft, diseñada para construir,
                    desplegar y gestionar aplicaciones y servicios a través de una red global de centros de datos.
                    Desde su lanzamiento, Azure ha evolucionado para ofrecer una amplia gama de soluciones que
                    incluyen inteligencia artificial, análisis de datos, Internet de las cosas (IoT) y desarrollo
                    de aplicaciones. Con servicios como Azure DevOps y Azure Machine Learning, los desarrolladores
                    pueden crear aplicaciones más rápido y con mayor precisión. Azure garantiza altos niveles de
                    seguridad, escalabilidad y disponibilidad, convirtiéndose en una opción preferida tanto para
                    startups como para grandes empresas. La flexibilidad y la innovación de Azure continúan
                    impulsando la transformación digital en todo el mundo."
                borderColor="#72DCEB"
                backgroundColor="#FFFFFF"
                />
            </StrictMode>
        </div>
    </div>
}

export default Azure