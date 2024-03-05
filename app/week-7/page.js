"use client";
import React, {useEffect, useState} from 'react';
import ItemList from './Item-list';
import itemsData from './items.json';
import NewItem from './NewItem';

const Page = (props) => {

    const [items, setItems] = React.useState(itemsData);

    useEffect(() => {
        console.log('items', items);
    }, [items]);

    const eventHandler = (newItem) => {
        setItems([...items, newItem]);
    }

  return (
    <main className="bg-slate-950 p-2 m-2">
      <h1 className="font-bold text-white text-3xl mb-4">Shopping List</h1>
      <h3 className="text-xl font-bold">Add New Item</h3>
      <NewItem handleAddItem={eventHandler} />

      <ItemList items={items} />
     
    </main>
  );
};

export default Page;