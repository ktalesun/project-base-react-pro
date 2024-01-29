import { CSSProperties, useContext } from "react";

import styles from "../styles/styles.module.css";
import "../styles/custom-styles.css"
import { contextProduct } from "../context/ProductContext";

export interface Props  {
    title?: string
    className?: string
    style?: CSSProperties
}


export const ProductTitle = ({ title , className, style } : Props) => {
    const {product} = useContext(contextProduct);
    
    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
            >
            { title ? title : product.title}
        </span>
    )
}