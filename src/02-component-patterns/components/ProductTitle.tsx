import { useContext } from "react";

import styles from "../styles/styles.module.css";
import { contextProduct } from "../context/ProductContext";


export const ProductTitle = ({ title } : { title?: string }) => {
    const {product} = useContext(contextProduct);
    
    return (
        <span className={styles.productDescription}>
            { title ? title : product.title}
        </span>
    )
}