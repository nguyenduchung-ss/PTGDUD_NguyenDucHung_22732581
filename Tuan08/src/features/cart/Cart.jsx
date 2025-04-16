import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2> Shopping Cart</h2>
      <button onClick={() => dispatch(addItem({ id: 1, name: 'Apple', price: 5 }))}>Add Apple</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
            <button onClick={() => dispatch(removeItem(item.id))}>❌</button>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>➕</button>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>➖</button>
          </li>
        ))}
      </ul>
      <p>Total: {totalQuantity} items – ${totalPrice}</p>
    </div>
  );
}
