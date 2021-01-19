import React from 'react';
import { useSelector } from 'react-redux';

const SearchResult = ({ location }) => {
  const { products } = useSelector(({ productsReducer }) => {
    return {
      products: productsReducer.products,
    };
  });

  return (
    <div className='container'>
      {products.map((item) => (
        <div key={item.idproduct} className='mt-5'>
          <h5>{item.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
