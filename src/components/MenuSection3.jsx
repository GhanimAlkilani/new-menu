import React from 'react';
import MenuItem3 from './MenuItem3';

const MenuSection3 = ({ section, products }) => {
  return (
    <section className="menu-section-3">
      <div className="section-header-3">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className="menu-items-3">
        {products.map(product => (
          <MenuItem3 key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection3;