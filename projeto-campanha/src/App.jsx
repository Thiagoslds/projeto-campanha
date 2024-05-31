import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/Sobre'
import Home from './pages/Home';
import RootLayout from './pages/Root';

const routerData = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> }
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
