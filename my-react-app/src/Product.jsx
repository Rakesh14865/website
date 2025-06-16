import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', inStock: true },
  { id: 2, name: 'Product 2', inStock: false },
  { id: 3, name: 'Product 3', inStock: true },
];
//pc k specs define kre 
const pcSpecs = {
  cpu: 'RYZEN 5',
  ram: '16GB',
  storage: '512GB ',
  gpu: 'NVIDIA 3050',
};
//id 1 ko map kiya hai

const Product = () => {
  const [showSpecs, setShowSpecs] = useState(false);

  const handleClick = (id) => {
    if (id === 1) {
      setShowSpecs(!showSpecs);
    }
   
  };

  return (
    <div className="product-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            {product.inStock ? (
              <button
                className="buy-now-button"
                onClick={() => handleClick(product.id)}
              >
                Buy Now
              </button>
            ) : (
              <button className="sold-out-button" disabled>
                Sold Out
              </button>
            )}
          </div>
        ))}
      </div>
      
      {showSpecs && (
        <div style={{ marginTop: '20px', border: '1px solid black', padding: '10px', maxWidth: '350px' }}>
          <h3>PC Specs</h3>
          <ul>
            <li>CPU: {pcSpecs.cpu}</li>
            <li>RAM: {pcSpecs.ram}</li>
            <li>Storage: {pcSpecs.storage}</li>
            <li>GPU: {pcSpecs.gpu}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Product;
