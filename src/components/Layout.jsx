import React, { useState } from 'react';
import { Outlet, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Layout = () => {
  
  const location = useLocation();

  return (
    <div>
      <nav>
        <Nav tabs>
          <NavItem>
            <NavLink tag={RouterNavLink} end to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/microsoft" active={location.pathname === '/Microsoft'}>
              Microsoft
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/adobe" active={location.pathname === '/Adobe'}>
              Adobe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/google" active={location.pathname === '/Google'}>
              Google
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/meta" active={location.pathname === '/Meta'}>
              Meta
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
