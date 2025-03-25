import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map(({ id, name, category, price, image }) => (
        <div key={id} className="menu-item">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{category}</p>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
