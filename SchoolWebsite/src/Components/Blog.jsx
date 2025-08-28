import React from "react";

function BlogCard({ image, title, author, date, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs">
          {date}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-500 transition-colors duration-300">
          {title}
        </h2>

        <p className="text-gray-600 text-sm flex-grow">
          {description.substring(0, 100)}...
        </p>

        {/* Author Info */}
        <div className="flex items-center mt-4">
          <img
            src={`https://ui-avatars.com/api/?name=${author}&background=random`}
            alt={author}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-gray-800 font-semibold">{author}</h3>
            <p className="text-xs text-gray-500">Author</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

// Example Usage
function Blogs() {
  const blogData = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "How to Stay Motivated in Coding",
      author: "Ritika Yadav",
      date: "Aug 12, 2025",
      description:
        "Learning to code can be challenging, but with the right mindset and techniques, you can stay consistent and reach your goals."
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      title: "Top 10 Tips for Frontend Developers",
      author: "Ratan Yadav",
      date: "Aug 10, 2025",
      description:
        "Frontend development is all about creating user-friendly interfaces. Here are the top 10 tips every frontend developer should know."
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogData.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
}

export default Blogs;
