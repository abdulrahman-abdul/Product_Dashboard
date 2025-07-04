import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { products as initialProducts } from '../data/products';
import type { Product } from '../data/products';

const MainDashboard: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => 
    sum + product.stocks.reduce((stockSum, stock) => stockSum + stock.quantity, 0), 0
  );

  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Product Dashboard</h1>
          <p className="page-subtitle">
            Manage your inventory across multiple locations
          </p>
          <div style={{ marginTop: '1rem', color: '#64748b' }}>
            {totalProducts} products • {totalStock} total items in stock
          </div>
        </div>

        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;