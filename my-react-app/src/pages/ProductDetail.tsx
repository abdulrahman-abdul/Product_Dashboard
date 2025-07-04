import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Product Not Found</h1>
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={20} />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalStock = product.stocks.reduce((sum, stock) => sum + stock.quantity, 0);

  return (
    <div className="main-content">
      <div className="container">
        <Link to="/" className="btn btn-primary back-btn">
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>

        <div className="product-detail">
          <div className="product-detail-content">
            <div className="product-detail-image">
              <img 
                src={product.image} 
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
              />
            </div>
            
            <div className="product-detail-info">
              <h1 className="product-name" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {product.name}
              </h1>
              
              <div className="product-rate" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                ₹{product.rate.toLocaleString()}
              </div>
              
              <div className="stock-info">
                <div className="stock-title" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Stock Locations (Total: {totalStock} items)
                </div>
                
                <div className="stock-locations" style={{ gap: '1rem' }}>
                  {product.stocks.map((stock) => (
                    <div key={stock.id} className="stock-item" style={{ padding: '1rem' }}>
                      <div>
                        <div className="stock-name" style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem' }}>
                          {stock.name}
                        </div>
                        <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
                          {stock.quantity} items available
                        </div>
                      </div>
                      <span className="quantity-number" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        {stock.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;