import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimationContextProvider from './Context/AnimationContextProvider.jsx'
import NavBarContextProvider from './Context/NavBarContextProvider.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NavBar, Photos } from './Components/index.js'
import Bye from './Components/Bye/Bye';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
    
      <Route path='/' element={<App/>} />
      <Route path='/*' element={<Photos />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <NavBarContextProvider>
      <AnimationContextProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AnimationContextProvider>
    </NavBarContextProvider>
  </React.StrictMode>,
)
