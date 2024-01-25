

import { useProduct } from "../hooks/useProduct";
import { Props } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";
import { contextProduct } from "../context/ProductContext";

const { Provider } = contextProduct


//Primer paso del compount component pattern

export const ProductCard = ({ product, children }: Props) => {

    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }} >
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    
    )
}
