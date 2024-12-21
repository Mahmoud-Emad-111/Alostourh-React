import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from './Component/AboutPage/AboutPage';
import Services from './Component/Services/Services';
import Projects from './Component/Projects/Projects';
import Faqs from './Component/Faqs/Faqs';
import Contact from './Component/Contact/Contact';
import ContactPage from './Component/ContactPage/ContactPage';
import Jop from './Component/Jop/Jop';
let routers=createBrowserRouter([
  {
    // path:"",
    // element:<MainLayouts/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/",
        element:<Home/>
      },
    
     
      {
        path:"/About",
        element:<AboutPage/>
      },
    
      {
        path:"/Services",
        element:<Services/>
      },
      {
        path:"/Projects",
        element:<Projects/>
      },
      
      {
        path:"/Faqs",
        element:<Faqs/>
      },
      {
        path:"/Contact",
        element:<ContactPage/>
      },
    
      {
        path:"/Jop",
        element:<Jop/>
      },
    ]
    }
  ])
function App() {
  return (
    <div className="App">
       <RouterProvider router={routers}/>

    </div>
  );
}

export default App;
