"use client";
import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("produce");

  const handleChange = (event) => {
    setName(event.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity("1");
    setCategory("produce");

    alert(`Added item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
  };

  return (
    <form className='text-black border font-bold text-md m-2 grid grid-cols-1 gap-4' onSubmit={handleSubmit}>
      <label className="mb-2">
        Item Name:
        <input type="text" placeholder="Enter the produce name" value={name} onChange={handleChange} className="border p-2" />
      </label>
     
      <label className="mb-2">
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="0" max="99" className="border p-2" />
      </label>
    
      <label className="mb-2">
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2">
        <option value="">Select Category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Food">Frozen Food</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </label>
    
      <input type="submit" value="Submit" className="bg-indigo-700 text-white p-2 rounded-md cursor-pointer" />
    </form>
  );
};

export default NewItem;
