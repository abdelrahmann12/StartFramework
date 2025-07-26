
import './App.css'
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import About from './About/About';
import News from './News';
import Portfolio from './Portfolio/Portfolio';
import Line from './Line/Line';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';



function App() {
  let Routes = createBrowserRouter([
    {path:"/" ,
     element:<Layout></Layout>,
     children:[
    { path: "", element: <Home></Home>},   
    {path:"about" , element:<About></About>},
    {path:"portfolio" , element:<Portfolio></Portfolio>},
    {path:"contact" , element:<Contact></Contact>},
  ]}
    
  ])
  return(
    <>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </>
  )
  
}

export default App
