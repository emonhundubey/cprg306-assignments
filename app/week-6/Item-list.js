import { useState } from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {  
    setSortBy('category');
  };

  return (
    <div className="m-4">
      <div className="inline-flex items-center p-4">
        <h2 className="mr-2">Sort by:</h2>
        <button 
          onClick={handleSortByName}
          className={`bg-${sortBy === 'name' ? 'orange-500' : 'orange-700'} p-1 m-2 w-28 transition-colors`}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`bg-${sortBy === 'category' ? 'orange-500' : 'orange-700'} p-1 m-2 w-28 transition-colors`}
        >
          Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
};

export default ItemList;
