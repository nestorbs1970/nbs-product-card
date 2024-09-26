import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({className, style}: Props) => {
    const {counter, minCount, maxCount, increaseBy} = useContext(ProductContext);
    const isMinReached = useCallback(
        () => counter === minCount, 
        [counter, minCount]
    );
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount, 
        [counter, maxCount]
    );
    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                disabled={isMinReached()}
                className={`${styles.buttonMinus} ${isMinReached() ? styles.disabledMinus : ''}`}
                onClick={() => increaseBy(-1)}
            > - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button
                disabled={isMaxReached()}
                className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabledAdd : ''}`}
                onClick={() => increaseBy(1)}
            > + </button>
            </div>
    )
};
