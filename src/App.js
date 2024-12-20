import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
