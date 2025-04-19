import React from 'react';
import SymbolIcon from './SymbolIcon';

const MenuItem4 = ({ item }) => {
  return (
    <div className="menu-item-4">
      <div className="item-image-4">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details-4">
        <h3>
          {item.name}
          <span className="item-price-4"><SymbolIcon />{item.price.toFixed(2)}</span>
        </h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem4;