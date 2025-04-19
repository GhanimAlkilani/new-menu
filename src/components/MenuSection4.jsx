import React from 'react';
import MenuItem4 from './MenuItem4';

const MenuSection4 = ({ section, products }) => {
  return (
    <section className="menu-section-4">
      <div className="section-header-4">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className="menu-items-4">
        {products.map(product => (
          <MenuItem4 key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection4;