import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-brand">
            <Package size={24} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Product Dashboard
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Main Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={location.pathname === '/products' ? 'active' : ''}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;