import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimationContextProvider from './Context/AnimationContextProvider.jsx'
import NavBarContextProvider from './Context/NavBarContextProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <NavBarContextProvider>
      <AnimationContextProvider>
        <App/>
      </AnimationContextProvider>
    </NavBarContextProvider>
  </React.StrictMode>,
)
