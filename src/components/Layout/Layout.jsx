import NavBar from 'components/NavBar/NavBar';
import React, { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#a94da1"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
