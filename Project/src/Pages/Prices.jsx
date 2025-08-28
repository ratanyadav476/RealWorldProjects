
///////////////////////////////////////////////////////////////////
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiApothecary } from "react-icons/gi";
import { FaPlateWheat } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";

const Prices = () => {
    const data = [
        { recipe: "Poha", Price: "Rs-40" },
        { recipe: "Idli+Chutney+Sambhar", Price: "Rs-50" },
        { recipe: "Plain Paratha with Aloo Jeera", Price: "Rs-40" },
        { recipe: "Sattu Paratha", Price: "Rs-60" },
        { recipe: "Aloo Paratha", Price: "Rs-60" },
        { recipe: "Chana Dal Paratha", Price: "Rs-40" },
        { recipe: "Moong Dal Kachori with Chutney", Price: "Rs-70" },
        { recipe: "Urad Dal Kachori", Price: "Rs-60" },
        { recipe: "Aloo Kachuri", Price: "Rs-60" },
        { recipe: "French Fries", Price: "Rs-60" },
    ];

    const datas = [
        { recipe: "Rajma Chawal", Price: "Rs-80" },
        { recipe: "Chhole Chawal", Price: "Rs-50" },
        { recipe: "Kadhi Chawal", Price: "Rs-80" },
        { recipe: "Soya Biryani", Price: "Rs-50" },
    ];

    const date = [
        { recipe: "Rajma", Price: "Rs-60" },
        { recipe: "Chhole", Price: "Rs-60" },
        { recipe: "Kadhi", Price: "Rs-60" },
        { recipe: "Aloo Jeera", Price: "Rs-50" },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 w-full h-full bg-slate-600  rounded-2xl mt-20">
            {/* Breakfast & Snacks */}
            <div className="w-full lg:w-[350px] bg-gray-700 text-white p-4 rounded-xl">
                <h1 className="m-3 p-1 flex items-center justify-between text-[20px] font-semibold text-amber-600">
                    <FaSearch size={30} />
                    <span>Breakfast & Snacks</span>
                </h1>
                {data.map((item, index) => (
                    <div key={index}>
                        <h3 className="flex justify-between items-center p-3 m-2 bg-cyan-950 rounded-2xl">
                            <span className="text-[15px]">{item.recipe}</span>
                            <span className="bg-cyan-900 px-4 py-2 rounded-full">
                                {item.Price}
                            </span>
                        </h3>
                    </div>
                ))}
            </div>

            {/* Combos + Sabji Section + Thali */}
            <div className="w-full flex flex-col gap-5 bg-gray-700 text-white p-4 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Combos */}
                    <div className="bg-gray-700 text-white p-4 rounded-xl">
                        <h1 className="m-3 p-1 flex items-center justify-between text-2xl font-semibold text-amber-600 xs:text-[12px] ">
                            <GiApothecary size={30} />
                            <span>Combos</span>
                        </h1>
                        {datas.map((item, index) => (
                            <div key={index}>
                                <h3 className="flex justify-between items-center p-3 m-2 bg-cyan-950 rounded-2xl">
                                    <span>{item.recipe}</span>
                                    <span className="bg-cyan-900 px-4 py-2 rounded-full">
                                        {item.Price}
                                    </span>
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Sabji Section */}
                    <div className="bg-gray-700 text-white p-4 rounded-xl">
                        <h1 className="m-3 p-1 flex items-center justify-between text-2xl font-semibold text-amber-600 xs:text-[12px]">
                            <GiApothecary size={30} />
                            <span>Sabji Section</span>
                        </h1>
                        {date.map((item, index) => (
                            <div key={index}>
                                <h3 className="flex justify-between items-center p-3 m-2 bg-cyan-950 rounded-2xl">
                                    <span>{item.recipe}</span>
                                    <span className="bg-cyan-900 px-4 py-2 rounded-full">
                                        {item.Price}
                                    </span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Thali Section */}
                <div className="flex flex-col gap-5 bg-slate-600 p-4 rounded-2xl">
                    {/* Roti Thali */}
                    <div className="flex justify-between items-center text-amber-600 text-2xl font-bold  ">
                        <div className="flex items-center gap-2 xs:text-[12px] ">
                            <FaPlateWheat />
                            <h2>Roti Thali</h2>
                        </div>
                        <h3>Rs-100</h3>
                    </div>
                    <div className="bg-cyan-950 p-4 rounded-2xl">
                        <h2>Includes:-</h2>
                        <h3>4 Roti, Dal, Rice, Salad, Achar & 1 Sabji</h3>
                        <h3>Choice of: (Chhole / Rajma / Aloo Jeera)</h3>
                    </div>

                    {/* Paratha Thali */}
                    <div className="flex justify-between items-center text-amber-600 text-2xl font-bold text-[20px]">
                        <div className="flex items-center gap-2 ">
                            <FaPlateWheat />
                            <h2>Paratha Thali</h2>
                        </div>
                        <h3>Rs-100</h3>
                    </div>
                    <div className="bg-cyan-950 p-4 rounded-2xl">
                        <h2>Includes:-</h2>
                        <h3>4 Paratha, Dal, Rice, Salad, Achar & 1 Sabji</h3>
                        <h3>Choice of: (Chhole / Rajma / Aloo Jeera)</h3>
                    </div>

                    {/* Extras */}
                    <div className="bg-gray-800 p-5 rounded-2xl">
                        <div className="flex items-center justify-center gap-2 text-amber-600 mb-3">
                            <PiBowlFoodFill size={30} />
                            <h3>Extras</h3>
                        </div>
                        <h1 className="flex justify-between items-center p-3 m-2 bg-cyan-950 rounded-2xl">Roti - Rs 7</h1>
                        <h1 className="flex justify-between items-center p-3 m-2 bg-cyan-950 rounded-2xl">Paratha - Rs 15</h1>
                        <h1 className="flex justify-between items-center p-3 m-2 bg-cyan-950 rounded-2xl">Chawal - Rs 50</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;


