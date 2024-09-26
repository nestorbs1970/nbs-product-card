import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        if (newValue < (initialValues?.count || newValue) || newValue > (initialValues?.maxCount || newValue)) return;
        setCounter(newValue);
        onChange && onChange({product, count: newValue});
    };
    const reset = () => {
        setCounter(initialValues?.count || value);
    };
    useEffect(() => {
        isMounted.current = true;
    }, []);
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(initialValues?.count || value);
    }, [initialValues?.count, value]);
    return {
        counter,
        minCount: initialValues?.count || value,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
        increaseBy,
        reset
    }
}
