import React from 'react';
import SymbolIcon from './SymbolIcon';

const MenuItem3 = ({ item }) => {
  return (
    <div className="menu-item-3">
      <div className="item-image-3">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details-3">
        <span className="item-price-3">        
        <SymbolIcon />
          {item.price.toFixed(2)}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem3;