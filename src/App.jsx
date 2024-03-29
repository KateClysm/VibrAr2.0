import './App.css'
import Nav from './components/nav/Nav';
import React, { useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.jsx';
import Footer from './components/footer/Footer.jsx';
import Eventos from './pages/eventos/Eventos.jsx';
import Nosotros from './pages/nosotros/Nosotros.jsx';
import Noticias from './pages/noticias/Noticias.jsx';
import Artista from './pages/artista/Artista.jsx';

function App() {

  const Layout = () => {
    return (
      <div className='layout'> 
        <div className="window">
          <Nav />
          <Outlet />
        </div>
        <Footer/>
      </div>
    );
  };

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };


  const router = createBrowserRouter([
    {
      path: '/', 
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
      children: [
        {
          path: '/',
          element: 
            <HomePage/>
        },
        {
          path: '/eventos' ,
          element: <Eventos />
        },
        {
          path: '/nosotros' ,
          element: <Nosotros />
        },
        {
          path: '/noticias' ,
          element: <Noticias />
        },
        {
          path: '/artista/:nombre_artista',
          element: <Artista />,
        },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;



