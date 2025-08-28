
import { useContext, useEffect } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';

function AboutUs() {
    const { loading, items, TeachersData} = useContext(AppContext);

    useEffect(() => {
        TeachersData();
    }, []);

    return (
        <div className="p-4 ">
            <h1 className='text-center items-center text-2xl font-bold text-cyan-950'>Meet Our Staffs</h1>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <Spinner />
                ) : items.length === 0 ? (
                    <h1 className="text-center text-xl font-semibold">Data Not Found</h1>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center bg-sky-100 p-6 sm:p-8 rounded-2xl h-auto shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-500 mb-2 text-center">
                                {item.name}
                            </h2>
                            <img
                                src={item.image}
                                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-500 mb-2">
                                {item.job}
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 text-center">
                                {item.text.substring(0, 70) + "..."}
                            </p>
                            <button className="bg-indigo-400 px-4 py-2 rounded-xl text-white hover:bg-indigo-500 transition-colors duration-300">
                                View More
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AboutUs;

