import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import './App.css'
import Blog from './pages/blog';
import Contactus from './pages/contactUs';
import Error404 from './pages/Error404';
import Home from './pages/home';
import Pricing from './pages/pricing';
import ProjectDetail from './pages/projectDetail';
import Projects from './pages/projects';
import Services from './pages/services';

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
  {
    
      path : '/project',
      element : <Projects/>
  
  },
  {
      path : '/services',
      element : <Services/>
  
  },
  {
      path : '/contactus',
      element : <Contactus/>
  
  },
  {
      path : '/blog',
      element : <Blog/>
  
  },
  {
    
    path : '*',
    element : <Error404/>

  },

  
]);


  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
