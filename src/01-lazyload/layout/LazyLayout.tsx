import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"


/**
 * 
 * Esta forma se diferencia en que carga el componente LazyLayout
 * de forma perezosa pero sus rutas hijas no.
 * Esta forma se considera más adecuada en vez de cargar cada componente
 * de forma perezosa, básicamente se carga un este modulo de forma
 * perezosa junto a sus rutas hijas.
 */

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        <ul>
            <li>
                <NavLink to="lazy1">Lazy1</NavLink>
            </li>
            <li>
                <NavLink to="lazy2">Lazy2</NavLink>
            </li>
            <li>
                <NavLink to="lazy3">Lazy3</NavLink>
            </li>
        </ul>

        {/* Rutas hijas van aqui estas no se va a cargar de forma perezosa
            pero el lazy layout en si se cargará de forma perezosa.
        */}

        <Routes>
            <Route path="lazy1" element={ <LazyPage1 /> } />
            <Route path="lazy2" element={ <LazyPage2 /> } />
            <Route path="lazy3" element={ <LazyPage3 /> } />

            {/* Ruta comodin que manda al usuario al lazy1 en caso de que 
            se encuentre una ruta ejemplo: /lazyload/lazy1312313 */}
            
            {/* <Route path="*" element={<h2>Not found</h2>} /> */}
            <Route path="*" element={<Navigate replace to="lazy1"  /> } />
        </Routes>
    </div>
  )
}

export default LazyLayout
