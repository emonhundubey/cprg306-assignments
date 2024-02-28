"use client";
import { useState } from 'react';
import ItemList from './Item-List'; // Changed 'Item-List' to 'Item-list'
import itemsData from './items.json'; 
import NewItem from './NewItem';


const Page = (props) => {

    const [items, setItems] = useState(itemsData);

    const eventHandler = (newItem) => {
        setItems([...items, newItem]);
    }

  return (
    <main className="bg-slate-950">
      <h1 className="font-bold text-white text-3xl m-2">Shopping List</h1>

      <NewItem handleAddItem={eventHandler} />

      <ItemList items={items} />
    </main>
  );
};

export default Page;
