import React from 'react';

const MenuItem2 = ({ item }) => {
  return (
    <div className="menu-item-2">
      <div className="item-image-2">
        <img src={item.image} alt={item.name} />
        <div className="price-bubble">${item.price.toFixed(2)}</div>
      </div>
      <div className="item-details-2">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem2;