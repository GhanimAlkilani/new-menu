import React from "react";
import SymbolIcon from './SymbolIcon';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">
        <SymbolIcon />
          {item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
