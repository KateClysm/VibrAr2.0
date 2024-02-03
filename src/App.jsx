import './App.css'
import Nav from './components/nav/Nav';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {

  const Layout = () => {
    return (
      <div className='window'> 
        <Nav />
        <Outlet />
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
            <>
              <HomePage/>
            </>
        },
        // {
        //   path: '/artist' ,
        //   element: <Project />
        // },
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