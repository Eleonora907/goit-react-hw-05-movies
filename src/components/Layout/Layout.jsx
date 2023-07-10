import { NavBar } from 'components/NavBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
