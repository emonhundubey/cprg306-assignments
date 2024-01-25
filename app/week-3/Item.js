const Item = ({ name, quantity, category }) => {
  return (
    <div className="">
      <div>{name}</div>
      <div>
        buy {quantity} in {category}
      </div>
    </div>
  );
};

export default Item;
