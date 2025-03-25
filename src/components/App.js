import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const menuItems = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "pancakes.jpg" },
  { id: 2, name: "Omelette", category: "Breakfast", price: "$4", image: "omelette.jpg" },
  { id: 3, name: "Burger", category: "Lunch", price: "$8", image: "burger.jpg" },
  { id: 4, name: "Pasta", category: "Lunch", price: "$10", image: "pasta.jpg" },
  { id: 5, name: "Mango Shake", category: "Shakes", price: "$6", image: "mango_shake.jpg" },
  { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$7", image: "choco_shake.jpg" }
];

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="app-container">
      <h1>Menu</h1>
      <div className="category-buttons">
        {['All', 'Breakfast', 'Lunch', 'Shakes'].map(category => (
          <button key={category} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <Menu items={filteredMenu} />
    </div>
  );
};

export default App;
