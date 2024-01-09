import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Pricing from './pages/pricing';
import ProjectDetail from './pages/projectDetail';


function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },

  {
    path: "/pricing",
    element: <Pricing/> ,
  },
  {
    path : '/projectDetail',
    element : <ProjectDetail/>
  },
  
]);


  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
