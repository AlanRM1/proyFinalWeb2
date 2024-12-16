import React, { StrictMode, useState } from 'react';
import Footer from '../components/Footer';
import '../css/Microsoft.css';
import microsoftlogo from '../assets/img/microsoftlogo.png';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RouterNavLink, Outlet } from 'react-router-dom';

const Microsoft = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
        <div className='prinMic'>
            <h1 className='titMic'>Microsoft</h1>
            <p className='micp'>
                Fundada en 1975 por Bill Gates y Paul Allen, Microsoft ha sido una fuerza motriz en la revolución
                tecnológica. Comenzaron con el objetivo de poner una computadora en cada hogar y en cada escritorio.
                Su primer gran éxito fue el desarrollo del sistema operativo MS-DOS, que luego evolucionaría para
                convertirse en el icónico Windows. A lo largo de los años, Microsoft ha diversificado su oferta,
                abarcando desde software de productividad hasta hardware de juegos y servicios en la nube. Hoy en día,
                Microsoft sigue siendo una de las empresas más influyentes y valiosas del mundo.
            </p>
            <p className='micp'>
                Microsoft ha dejado una huella imborrable en el mundo de la tecnología. Desde la informática personal
                hasta el entretenimiento y la innovación en la nube, sigue siendo un líder indiscutible en la industria,
                sus diversos servicios son muy importantes para el mundo actual, su seguridad y confiabilidad de estos
                son algo que muchas empresas y usuarios valoran.
            </p>
            <Navbar color="faded" light>
                <NavbarBrand tag={RouterNavLink} to="/microsoft" className="me-auto">
                Descubre los productos principales aqui:  →
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink tag={RouterNavLink} to="/microsoft/windows">
                        Windows
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={RouterNavLink} to="/microsoft/office">
                        Office 365
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={RouterNavLink} to="/microsoft/xbox">
                        Xbox Studios
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={RouterNavLink} to="/microsoft/azure">
                        Azure
                    </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            <Outlet />
            <img src={microsoftlogo} className='microsoftlogo'></img>
        </div>
        <Footer />
    </div>
    
  );
};

export default Microsoft;
