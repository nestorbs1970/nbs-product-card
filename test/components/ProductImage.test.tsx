import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('mostrar el componente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img='./coffee-mug.png' />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
