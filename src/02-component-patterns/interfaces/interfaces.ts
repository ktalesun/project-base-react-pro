import { CSSProperties, ReactElement } from "react";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
}


export interface Product {
    id: string;
    title: string;
    img?: string,
}

export interface ContextProductProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardPropsHOC {
    ({ product, children }: Props) : JSX.Element;
    Title: ( Props: ProductTitleProps ) => JSX.Element;
    Image: (Props: ProductImageProps ) => JSX.Element;
    Buttons: (Props: ProductButtonsProps ) => JSX.Element
}
