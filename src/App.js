import React, { useState, useEffect } from 'react';
import { loadMenuData } from './utils/loadMenuData';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import CategoryNav2 from './components/CategoryNav2';
import MenuSection2 from './components/MenuSection2';
import './App.css';
import './App2.css'; // New design styles

function App() {
  const [activeSectionId, setActiveSectionId] = useState(1);
  const [sections, setSections] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [designVersion, setDesignVersion] = useState(1); // 1 or 2

  useEffect(() => {
    const fetchData = async () => {
      const { sections, products } = await loadMenuData();
      setSections(sections);
      setProducts(products);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading menu...</div>;

  const sectionProducts = products.filter(p => p.sectionId === activeSectionId);
  const activeSection = sections.find(s => s.id === activeSectionId);

  return (
    <div className={`restaurant-menu-app design-${designVersion}`}>
      <header className="app-header">
        <h1>Gourmet Delight</h1>
        <div className="design-toggle">
          <button 
            onClick={() => setDesignVersion(1)} 
            className={designVersion === 1 ? 'active' : ''}
          >
            Design 1
          </button>
          <button 
            onClick={() => setDesignVersion(2)} 
            className={designVersion === 2 ? 'active' : ''}
          >
            Design 2
          </button>
        </div>
      </header>

      <main className="menu-container">
        {designVersion === 1 ? (
          <>
            <CategoryNav 
              sections={sections} 
              activeSectionId={activeSectionId}
              setActiveSectionId={setActiveSectionId}
            />
            <div className="menu-content">
              <MenuSection 
                section={activeSection} 
                products={sectionProducts} 
              />
            </div>
          </>
        ) : (
          <>
            <CategoryNav2 
              sections={sections} 
              activeSectionId={activeSectionId}
              setActiveSectionId={setActiveSectionId}
            />
            <div className="menu-content">
              <MenuSection2 
                section={activeSection} 
                products={sectionProducts} 
              />
            </div>
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Gourmet Delight</p>
      </footer>
    </div>
  );
}

export default App;