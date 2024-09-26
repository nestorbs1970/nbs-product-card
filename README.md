# nbs-product-card

Paquete de pruebas de despliegue en NPM

### Nestor Sanchez

## Ejemplo

```
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from 'nbs-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 5,
        maxCount: 10,
    }}
>
    {
        ({count, isMaxCountReached, minCount, maxCount, product, increaseBy, reset}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
