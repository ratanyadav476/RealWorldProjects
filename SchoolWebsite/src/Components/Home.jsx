
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"

function Home() {
    return (
        <div className='bg-white w-full min-h-screen text-black flex flex-col md:flex-row items-center justify-center rounded-2xl p-6'>
            
            {/* Left Section */}
            <div className='left w-full md:w-1/2 flex items-start justify-center flex-col space-y-2'>
                <h3 className='text-3xl md:text-[44px] font-bold text-violet-300'>Best Learning</h3>
                <h3 className='text-3xl md:text-[44px] font-bold text-indigo-700'>Education Platform</h3>
                <h3 className='text-3xl md:text-[44px] font-bold text-indigo-500'>in The World</h3>

                <div className='flex flex-col font-serif text-[14px] md:text-[15px] text-gray-500 mt-4 rounded'>
                    <p>"Knowledge is power, and education is the key to success. Study with dedication</p>
                    <p>chase your dreams, stay focused, work hard, and never give up. Every effort today </p>
                    <p>builds your bright future, and success will surely follow you."</p>
                </div>

                {/* Search Bar */}
                <div className='flex flex-col mb-8 sm:flex-row items-center bg-gray-200 w-full sm:w-[490px] mt-4 rounded-2xl overflow-hidden'>
                    <div className='flex items-center w-full'>
                        <IoSearchSharp className="ml-3 text-gray-600" />
                        <input
                            className='w-full p-4 outline-none mx-2 bg-transparent'
                            type="text"
                            placeholder='What do you want to Learn'
                        />
                    </div>
                    <button className='bg-blue-600 text-white py-4 px-6 w-full sm:w-auto'>
                        Search Courses
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="right w-full md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-[150px] sm:w-[200px] md:w-[230px] h-[220px] sm:h-[260px] md:h-[300px] rounded-2xl'>
                        <img src={img2} alt="" className='w-full h-full rounded-2xl object-cover' />
                    </div>
                    <div className='w-[150px] sm:w-[200px] md:w-[230px] h-[220px] sm:h-[260px] md:h-[300px] relative'>
                        <img src={img1} alt="" className='w-full h-full rounded-2xl object-cover absolute bottom-10 md:bottom-20' />
                    </div>
                </div>

                {/* Offer Card */}
                <div className='relative mt-6 md:mt-0'>
                    <div className='bg-indigo-400 text-white w-[250px] sm:w-[280px] md:w-[300px] p-5 rounded-2xl mx-auto md:mx-0'>
                        <div className='flex items-center gap-4'>
                            <FaCheck />
                            <p>Get 30% off on every</p>
                        </div>
                        <p className='pl-7'>1st month</p>
                        <div className='flex items-center gap-4 mt-2'>
                            <FaCheck />
                            <p>Expert Teachers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


























/////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa6";
// import img1 from "../assets/img1.jpg"
// import img2 from "../assets/img2.jpg"
// function Home() {
//     return (
//         <div className='bg-white w-full h-[800px] text-black flex items-center justify-center rounded-2xl'>
//             <div className='left w-full flex items-start p-6 justify-center flex-col '>
//                 <h3 className='text-[44px] font-bold text-violet-300'>Best Learning</h3>
//                 <h3 className='text-[44px] font-bold text-indigo-700'>Education Plateform</h3>
//                 <h3 className='text-[44px] font-bold text-indigo-500' >in The World</h3>
//                 <div className='flex text-start flex-col font-serif  text-[15px] text-gray-500 m-4 rounded items-start'>
//                     <p>"Knowledge is power, and education is the key to success. Study with dedication</p>
//                     <p>chase your dreams, stay focused, work hard, and never give up. Every effort today </p>
//                     <p> builds your bright future, and success will surely follow you."</p>
//                 </div>
//                 <div className='flex items-center justify-center bg-gray-200 w-[490px]  m-4'>
//                     <IoSearchSharp />
//                     <input className='w-[230px] p-4 outline-none mx-2' type="text" placeholder=' What do you want to Learn ' />
//                     <h3 className='bg-blue-600 text-white py-4 pr-26 rounded-r-2xl pl-4' >Search Courses</h3>
//                 </div>
//             </div>
//             <div className="right w-full">
//                 <div className='w-full flex items-center gap-4'>
//                     <div className='w-[230px] h-[300px] rounded-2xl'>
//                         <img src={img2} alt="" className='w-full h-full rounded-2xl' />
//                     </div>
//                     <div className='w-[230px] h-[300px] relative'>
//                         <img src={img1} alt="" className='w-full h-full rounded-2xl absolute bottom-20' />
//                     </div>
//                 </div>
//                 <div className='relative'>
//                     <div className='bg-indigo-400 text-white w-[300px] p-5 rounded-2xl absolute bottom-3 left-43 ' >
//                         <div className='flex items-center gap-4'>
//                             <span><FaCheck /></span>
//                             <p> Get 30% off on every</p>
//                         </div>
//                         <p className='pr-30'>1st month</p>
//                         <div className='flex items-center gap-4'> <span><FaCheck /></span>
//                             <p> Expert Teachers</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home