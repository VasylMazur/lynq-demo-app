import React, { useState } from 'react';

export const CartItem = ({ item = {}, removeItem, changePrice }) => {
  // const [itemsCount, setItemsCount] = useState(item.count);
  console.log(item.price, )
  return (
    <div className="cart__item">
      <span>{item.name}</span>
      <div>
        <button
          onClick={() => {
            if (item.count > 1) {

              changePrice(-item.price, item.id, false);
            }
          }}
          className="decrement"
        >
          -
        </button>
        <span>{item.count}</span>
        <button
          onClick={() => {
            changePrice(item.price, item.id, true);
          }}
          className="increment"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(item.id, item.count * item.price)}
        className="remove"
      >
        remove
      </button>
    </div>
  );
};
