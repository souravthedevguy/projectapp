import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import ProductLoader from './ProductLoader';
import Product from './Product';

const Products = () => {

  const { loading, products, handleAddToCart } = useGlobalContext();

  return (
    <div className="d-flex justify-content-around flex-wrap">
        { loading && <ProductLoader/> }
        { products.map( product => <Product 
        key={product.id} 
        id={product.id}
        actionAddToCart={handleAddToCart}
        { ...product } /> ) }
    </div>
  );
};

export default Products;
