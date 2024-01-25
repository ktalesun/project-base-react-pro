import { ReactElement } from "react";

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
}


export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ContextProductProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardPropsHOC {
    ({ product, children }: Props) : JSX.Element;
    Title: ({ title }: { title?: string}) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element
}
