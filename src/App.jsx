import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Pricing from './pages/pricing';


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
]);


  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
