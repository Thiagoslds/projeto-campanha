import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/Sobre'
import Home from './pages/Home';
import RootLayout from './pages/Root';
import ComoAjudar from './pages/ComoAjudar';
import Parceiros from './pages/Parceiros';
import FaleConosco from './pages/FaleConosco';

const routerData = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/ajude', element: <ComoAjudar /> },
      { path: '/parceiros', element: <Parceiros /> },
      { path: '/faleconosco', element: <FaleConosco /> }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={routerData} />
    </>
  )
}

export default App
