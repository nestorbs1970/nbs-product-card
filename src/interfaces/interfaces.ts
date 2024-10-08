import { Props as ProductButtonsProps} from '../components/ProductButtons';
import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps} from '../components/ProductTitle';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    minCount?: number;
    maxCount?: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    (Props: ProductCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    minCount?: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
