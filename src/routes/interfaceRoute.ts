import { LazyExoticComponent } from "react";

// Tipo flexible para los Jsx Element
type JsxComponent = () => JSX.Element


export interface Route  {
    to: string,
    path: string,
    Component: LazyExoticComponent<JsxComponent> | JsxComponent, // El LazyExoticComponent es el tipado de los componentes que son cargados de forma diferida o perezosa. En este caso el tipo se definió para que cargue uno perezo o un componente ordinario
    name: string
}