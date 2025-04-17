import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ section, products }) => {
  return (
    <section className="menu-section">
      <h2 className="category-title">{section.title}</h2>
      <p className="category-description">{section.description}</p>
      <div className="menu-items">
        {products.map(product => (
          <MenuItem key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;