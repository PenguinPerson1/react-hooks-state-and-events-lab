import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [sel,setSel] = useState("All")
  function handleSelect(event){
    setSel(event.target.value);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter(item => sel === "All" || sel === item.category).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
