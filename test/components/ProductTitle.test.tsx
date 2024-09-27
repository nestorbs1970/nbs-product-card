import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
    test('mostrar el componente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' className='custom-class' />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
