"use client";
import React, { useEffect, useState } from 'react';
import ItemList from './Item-list';
import itemsData from './items.json';
import NewItem from './NewItem';
import MealIdeas from './Meal-ideas';


const Page = () => {
  const [items, setItems] = React.useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // useEffect(() => {
  //   console.log('items', items);
  // }, [items]);

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedItemName);
  };

  const eventHandler = (newItem) => {
    setItems([...items, newItem]);
  }

  return (
    <main className="bg-slate-950 p-2 m-2 flex">
      <div className="flex-1 p-2">
        <h1 className="font-bold text-white text-3xl mb-4">Shopping List</h1>
        <div className="max-w-sm m-2">
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem handleAddItem={eventHandler} />
        </div>
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1 p-2">
        <h3 className="text-xl font-bold">Meal Ideas</h3>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;