import React, { useState, useEffect } from 'react';
import { loadMenuData } from './utils/loadMenuData';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import './App.css';

function App() {
  const [activeSectionId, setActiveSectionId] = useState(1);
  const [sections, setSections] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { sections, products } = await loadMenuData();
      setSections(sections);
      setProducts(products);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading menu...</div>;
  }

  const sectionProducts = products.filter(product => product.sectionId === activeSectionId);
  const activeSection = sections.find(section => section.id === activeSectionId);

  return (
    <div className="restaurant-menu-app">
      <header className="app-header">
        <h1>Gourmet Delight</h1>
        <p className="restaurant-description">Fine Dining Experience</p>
      </header>

      <main className="menu-container">
        <CategoryNav 
          sections={sections} 
          activeSectionId={activeSectionId}
          setActiveSectionId={setActiveSectionId}
        />

        <div className="menu-content">
          {activeSection && (
            <MenuSection 
              section={activeSection} 
              products={sectionProducts} 
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Gourmet Delight. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;