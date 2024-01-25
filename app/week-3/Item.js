const Item = ({ name, quantity, category }) => {
  return (
    <div className="bg-slate-900 p-2 m-4 max-w-sm">
      <div  className="font-bold text-xl">{name}</div>
      <div className="pb-2 text-sm">
        Buy {quantity} in {category}
      </div>
    </div>
  );
};

export default Item;
