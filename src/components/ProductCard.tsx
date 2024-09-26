import React, { createContext, CSSProperties } from 'react';
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    const {counter, minCount, maxCount, isMaxCountReached, increaseBy, reset} = useProduct({onChange, product, value, initialValues});
    return (
        <Provider value={{counter, product, minCount, maxCount, increaseBy}}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        minCount,
                        maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )
};
