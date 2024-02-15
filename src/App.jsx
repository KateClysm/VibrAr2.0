import './App.css'
import Nav from './components/nav/Nav';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
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

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />,
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
          path: '/artista' ,
          element: <Artista />
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



