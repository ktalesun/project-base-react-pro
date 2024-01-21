import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import logo from "../assets/react.svg";
import { routes } from "./routes";
import { Suspense } from "react";

const Navigation = () => {
  return (

    /**
     * Para que el lazy load funcione se debe utilizar el suspense, basicamente el suspense
     * muestra un componente mientras el que se está cargando de forma perezosa termina. 
     * Para ello está la propiedad fallback en la cual se invoca el componente a mostrar
     * En este caso el suspense encierra a todo el browser router
     */
    // <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    {/* Cargando Navlinks de forma dinámica */}
                   {
                    routes.map(({to, name}) => {
                        return (
                            <li key={to}>
                                <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                   }

                   {/* Nav links de forma estática */}

                    {/* <li>
                        <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage3</NavLink>
                    </li> */}
                </ul>
            </nav>
            {/* Aqui el suspense simplemente encierra una parte del layout en donde se
            se renderizan las routes */}
            <Suspense fallback={<span>Loading...</span>}>
                <Routes>
                    {/* Cargando rutas de forma dinámica */}
                    
                    {
                        routes.map(({to ,path, Component}) => (
                            <Route key={to} path={path} element={ <Component /> } />
                        ))
                    }


                    {/* Routes de forma dinámica */}

                    {/* <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<LazyPage2 /> } />
                    <Route path="lazy3" element={<LazyPage3 />} /> */}

                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>
            </Suspense>
        </div>
    </BrowserRouter>
    // </Suspense>
    
  )
}

export default Navigation
