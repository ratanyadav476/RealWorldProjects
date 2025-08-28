import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pages() {
  const {pages}=useContext(AppContext)
  return (
    <div>
      <h1 className="text-center items-center font-bold text-indigo-950 text-2xl mt-12 ">More Information</h1>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pages.map((page, index) => (
        <div key={index} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 cursor-pointer flex flex-col items-center text-center">
          <div className="text-4xl text-blue-600 mb-3">{page.icon}</div>
          <h2 className="text-xl font-semibold">{page.title}</h2>
          <p className="text-gray-500 text-sm">{page.desc}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
