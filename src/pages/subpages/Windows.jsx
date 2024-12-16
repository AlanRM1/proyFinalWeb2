import React, { StrictMode, useState } from 'react';
import Cajas from '../../components/Cajas';
import imgWin from '../../assets/img/windows.jpg';

const Windows = () => {
    return <div>
        <div>
        <StrictMode>
                <Cajas
                titulo="Windows: El Sistema Operativo Líder en escritorios"
                imagen={imgWin}
                texto="Windows es el sistema operativo más utilizado a nivel mundial.
                Desde su lanzamiento en 1985, ha pasado por numerosas iteraciones, cada una mejorando en
                funcionalidad y usabilidad. Algunas versiones emblemáticas incluyen Windows 95, Windows XP
                y el actual Windows 11. Windows ha sido fundamental para hacer la informática accesible y
                eficiente para millones de personas en todo el mundo."
                borderColor="black"
                backgroundColor="#a8392544"
                />
            </StrictMode>
            <p>
                
            </p>
        </div>
    </div>
}

export default Windows