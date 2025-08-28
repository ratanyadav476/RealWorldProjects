
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from Cart ✅");
  }

  return (
    <div className="p-6 bg-gray-900 text-white relative">
      <h2 className="text-2xl font-bold mb-4 text-shadow-lg">Your Cart</h2>

      <h3 className='absolute right-20 top-6'>
        <FaShoppingCart size={40} />
        <span className='absolute -top-6 text-white bg-red-600 p-2 animate-bounce rounded-full'>
          {cartItems.length}
        </span>
      </h3>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.idMeal} className="flex items-center justify-between bg-slate-700 p-4 rounded-xl mb-3">
            <div className="flex items-center gap-4">
              <img src={item.strMealThumb} alt={item.strMeal} className="w-20 rounded-lg" />
              {/* <h3>{item.strMeal}</h3> */}
            </div>
            <button
              onClick={() => handleRemove(item.idMeal)}
              className="bg-amber-600 hover:shadow-lg shadow-white px-4 py-2 rounded-lg">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
