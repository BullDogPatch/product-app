import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useAxios } from '../Hooks/Http';

function Home() {
  const url = `https://5f0864ce9464ba0016dd3b24.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useAxios(url);

  let content = null;

  if (products.error) {
    content = (
      <p>There was an error getting this data. Better luck next time</p>
    );
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map(product => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
}
export default Home;
