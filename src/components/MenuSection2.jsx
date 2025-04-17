import React from 'react';
import MenuItem2 from './MenuItem2';

const MenuSection2 = ({ section, products }) => {
  return (
    <section className="menu-section-2">
      <div className="section-header-2">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className="menu-items-2">
        {products.map(product => (
          <MenuItem2 key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection2;