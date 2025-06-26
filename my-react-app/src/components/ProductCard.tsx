import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products'; // Adjust the import path as necessary
 // Adjust the import path as necessary

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const totalStock = product.stocks.reduce((sum, stock) => sum + stock.quantity, 0);

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rate">₹{product.rate.toLocaleString()}</div>
        
        <div className="stock-info">
          <div className="stock-title">Stock Locations (Total: {totalStock})</div>
          <div className="stock-locations">
            {product.stocks.map((stock) => (
              <div key={stock.id} className="stock-item">
                <span className="stock-name">{stock.name}</span>
                <span className="quantity-number">{stock.quantity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;