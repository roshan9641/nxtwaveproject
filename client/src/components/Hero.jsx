import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <>
      
      <header className="header">
        <div className="header-logo-icon">
          <img src="your-logo-icon.svg" alt="Logo Icon" />
        </div>
        <div className="header-center">
          <div className="header-logo">LOGO</div>
          <nav className="header-nav">
            <a href="#">SHOP</a>
            <a href="#">SKILLS</a>
            <a href="#">STORIES</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT US</a>
          </nav>
        </div>
        <div className="header-icons">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h14l1-5H6.4M7 13l-1.35 2.7A1 1 0 007 17h13M7 13L5.6 6M16 21a1 1 0 100-2 1 1 0 000 2zM9 21a1 1 0 100-2 1 1 0 000 2z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14a4 4 0 100-8 4 4 0 000 8zM6.343 17.657A8 8 0 1117.657 6.343 8 8 0 016.343 17.657z" /></svg>
          </button>
          <select>
            <option>ENG</option>
            <option>ESP</option>
            <option>FRA</option>
          </select>
        </div>
      </header>

      <section className="section-header">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet eu ut elementum dolor.</p>
      </section>

      
      <div className="subheader">
        <div>3425 ITEMS</div>
        <div className="filter-link">+ MORE FILTERS</div>
        <div>
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE LOW TO HIGH</option>
            <option>PRICE HIGH TO LOW</option>
          </select>
        </div>
      </div>

      <div className="main-container">
        
        <aside className="sidebar">
          <div>
            <label>
              <input type="checkbox" /> CUSTOMIZABLE
            </label>
          </div>
          {[
            'IDEAL FOR',
            'OCCASION',
            'WORK',
            'FABRIC',
            'SEGMENT',
            'SUITABLE FOR',
            'RAW MATERIALS',
            'PATTERN',
          ].map((label, index) => (
            <div key={index}>
              <h3>{label}</h3>
              <select>
                <option>All</option>
              </select>
            </div>
          ))}
        </aside>

       
        <section className="product-grid">
          {loading ? (
            <div>Loading products...</div>
          ) : (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
                <h4>{product.title.substring(0, 30)}...</h4>
                <p>${product.price}</p>
                <p>{product.category}</p>
              </div>
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default Hero;

