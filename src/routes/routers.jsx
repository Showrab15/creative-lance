import { createBrowserRouter } from "react-router-dom";

import WebDev from "../components/WebDev/WebDev";
import Layout from "../Layout/MainLayout";
import Home from "../pages/Home";
import VideoEditing from "../components/VideoEditing/VideoEditing.jsx";
import UIUXDesign from "../components/UIUXDesign/UIUXDesign";
import GraphicDesign from "../pages/GraphicDesign";
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  
    children: [
      {
        path : '/',
        element : <Home></Home>
      },  
      {
        path : 'video-editing',
        element : <VideoEditing/>
      },
      {
        path : 'ui-ix-design',
        element : <UIUXDesign/>
      },
      {
        path : 'graphic-design',
        element : <GraphicDesign/>
      },
      {
        path : 'web-design',
        element : <WebDev/>
      },
      {
        path : 'blogs',
        element : <Blogs/>
      },
     
    
    ]
  

  }


]);


export default router