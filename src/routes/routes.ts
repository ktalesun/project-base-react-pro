import { lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { Route } from "./interfaceRoute";
import { NoLazy } from "../01-lazyload/pages/NoLazy";


/**
 * Para usar el lazy load se invoca la función lazy() de react. Esta lo que hace es importar el componente
 * el cual se quiere que se cargue de forma diferida a través de una importación
 * NOTA: Para que el Lazy pueda funcionar el componente que se quiere cargar debe ser exportado por defecto
 * o tener una exportación por defecto
 * Esta es un componente que está siendo cargado en forma perezosa
 * que tiene rutas hijas pero estas cargan de forma normal (no diferida)
 */
const lazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: lazyLayout,
        name: 'LazyLayout-Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]