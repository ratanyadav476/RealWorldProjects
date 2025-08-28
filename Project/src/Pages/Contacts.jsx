// import React from 'react'
// import image2 from "../images/image2.jpeg"
// import backgroundimg from "../images/backgroundimg.jpeg"
// function Contacts() {
//     // Restaurant Staff Numbers
//     const staffNumbers = [
//         "+91 9794125136",
//         "+91 7307821246",
//         "sadhanaskitchen6@gmail.com"

//     ];
//     return (
//         <div className='mt-50 flex '>
//             <div className="h-[500px] w-[500px] flex justify-center items-center rounded-2xl  ">
//                 <img src={backgroundimg} alt="backgroundimg" className='rounded-2xl' />

//             </div>
//             <div className="flex flex-col mx-auto">
//                 {/* Map Section */}
//                 <div className="w-full max-w-lg h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 ease-in-out">
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3645.9318186896044!2d83.08737537552865!3d26.762330376737175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1756192032767!5m2!1sen!2sin"
//                         className="w-full h-full border-0"
//                         loading="lazy"
//                         title="restaurant-location"
//                     ></iframe>
//                 </div>
//                 {/* Staff Contact Numbers */}
//                 <div className=" bg-slate-800 w-full max-w-lg h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 ease-in-out">
//                     <div className="mt-6">
//                         <h3 className="text-lg font-semibold mb-2">📞 Contact for Order Now </h3>
//                         <ul className="space-y-2">
//                             {staffNumbers.map((num, i) => (
//                                 <li key={i}>
//                                     <a
//                                         href={`tel:${num}`}
//                                         className="text-blue-400 hover:underline"
//                                     >
//                                         {num}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="text-center">
//                         <h3>Location :Near Soni Hotel </h3>
//                         <h3>Mirchi Dhaba</h3>
//                     </div>
//                     <div className="w-[100px] h-[100px] mx-auto rounded-full">


//                         <img src={image2} alt="" width={100} height={100} className="rounded-full" />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Contacts


import React from "react";
import image2 from "../images/image2.jpeg";
import backgroundimg from "../images/backgroundimg.jpeg";

function Contacts() {
  // Restaurant Staff Numbers
  const staffNumbers = [
    "+91 9794125136",
    "+91 7307821246",
    "sadhanaskitchen6@gmail.com",
  ];

  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-6 items-center justify-center p-4 bg-gray-800">
      {/* Left Side - Background Image */}
      <div className="w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[800px] flex justify-center items-center rounded-2xl overflow-hidden shadow-lg">
        <img
          src={backgroundimg}
          alt="backgroundimg"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Side - Map + Contact Info */}
      <div className="flex flex-col gap-6 w-full lg:w-[500px]">
        {/* Map Section */}
        <div className="w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 ease-in-out">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3645.9318186896044!2d83.08737537552865!3d26.762330376737175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1756192032767!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            title="restaurant-location"
          ></iframe>
        </div>

        {/* Staff Contact Numbers */}
        <div className="bg-slate-800 w-full h-auto p-6 rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 ease-in-out text-white">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">
              📞 Contact for Order Now
            </h3>
            <ul className="space-y-2">
              {staffNumbers.map((num, i) => (
                <li key={i}>
                  {num.includes("@") ? (
                    <a
                      href={`mailto:${num}`}
                      className="text-blue-400 hover:underline"
                    >
                      {num}
                    </a>
                  ) : (
                    <a
                      href={`tel:${num}`}
                      className="text-blue-400 hover:underline"
                    >
                      {num}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-4">
            <h3>📍 Location : Near Soni Hotel</h3>
            <h3>Mirchi Dhaba</h3>
          </div>

          <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden shadow-md">
            <img
              src={image2}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

