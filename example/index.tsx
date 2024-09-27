import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug',
};

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
