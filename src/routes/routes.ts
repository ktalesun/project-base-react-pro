import { lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { Route } from "./interfaceRoute";


/**
 * Para usar el lazy load se invoca la función lazy() de react. Esta lo que hace es importar el componente
 * el cual se quiere que se cargue de forma diferida a través de una importación
 * NOTA: Para que el Lazy pueda funcionar el componente que se quiere cargar debe ser exportado por defecto
 * o tener una exportación por defecto
 */
const lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    }
]