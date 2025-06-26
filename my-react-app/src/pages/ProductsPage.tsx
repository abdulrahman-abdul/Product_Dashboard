import React, { useState } from 'react';
import { Package } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { products as initialProducts } from '../data/products';
import type { Product } from '../data/products';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdateStock = (productId: string, stockId: string, change: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? {
              ...product,
              stocks: product.stocks.map(stock =>
                stock.id === stockId
                  ? { ...stock, quantity: Math.max(0, stock.quantity + change) }
                  : stock
              )
            }
          : product
      )
    );
  };

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
          <h1 className="page-title">All Products</h1>
          <p className="page-subtitle">
            {totalProducts} products • {totalStock} total items in stock
          </p>
        </div>

        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onUpdateStock={handleUpdateStock}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <Package className="no-results-icon" size={48} />
            <h3>No products found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;