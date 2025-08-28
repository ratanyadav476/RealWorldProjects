import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';

function ProductCard({ meal }) {
  const dispatch = useDispatch();

  const handleOrder = () => {
    dispatch(addToCart(meal));
    toast.success("item added in cart to Order")
  };

  const deleteHandler=()=>{
     toast.success("Item Deleted from Cart ✅");
  }
  return (
    <div className='w-full h-full bg-slate-700 rounded-2xl p-4 shadow-lg shadow-indigo-500/35'>
      <div className="rounded-2xl shadow p-4">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-xl" />
        <h3 className="mt-3 font-semibold text-white">{meal.strMeal}</h3>
      </div>

      <div className='w-full h-auto p-2 m-2 flex items-center text-white justify-between sm:gap-5'>
        <button 
          onClick={handleOrder} 
          className='bg-slate-600 p-4 rounded-2xl w-[150px] shadow-lg shadow-indigo-300/50 hover:bg-amber-500 transition duration-300 ease-in-out'>
          Order Now
        </button>

        <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-full p-3' onClick={()=>deleteHandler()}>
          <MdDelete size={26} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard




