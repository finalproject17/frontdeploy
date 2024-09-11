import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Products from "./Pages/Products/Products";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Values from "./Pages/AboutUs/Values/Values";
import Vision from "./Pages/AboutUs/Vision/Vision";
import ProductDetails from "./Pages/Products/ProductDetails";
import LoginLib from "./Pages/Login/LoginLib";
import AppLayout from "./AppLayout";

const routes=createBrowserRouter([
{path:"/",element:<AppLayout/>,children:[
  {index:true,element:<Home></Home>},
  {path:"about",element:<AboutUs></AboutUs>,children:[
  {index:true,element:<Values></Values>},
  {path:"vision",element:<Vision></Vision>}
 ]
},
  {path:"contact",element:<ContactUs></ContactUs>},
  {path:"products",element:<Products></Products>}
]},
{path:"*",element:<NotFound></NotFound>}
])


function App() {
  //v 6
  //v 6.4

  return <RouterProvider router={routes}>
    </RouterProvider>

}

export default App;
