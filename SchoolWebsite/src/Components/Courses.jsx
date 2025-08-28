 const courses = [
        {
            title: "Mathematics",
          image:"https://cdn4.vectorstock.com/i/1000x1000/22/63/mathematics-circular-flat-vector-20232263.jpg",
            desc: "Learn numbers, algebra, geometry and problem-solving skills.",
            duration: "1 Year",
            fees: "₹12,000"
        },
        {
            title: "Science",
            image: "https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg",
            desc: "Explore Physics, Chemistry, and Biology with hands-on experiments.",
            duration: "1 Year",
            fees: "₹15,000"
        },
        {
            title: "Computer Science",
            image: "https://tse4.mm.bing.net/th/id/OIP.9QxyOnfV04aScQc9L124LQHaKe?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
            desc: "Learn coding, web development, and basic computer skills.",
            duration: "6 Months",
            fees: "₹10,000"
        },
        {
            title: "Music & Arts",
            image: "https://tse3.mm.bing.net/th/id/OIP.8NQAzcBZjLpBRINwTjzdKQHaEo?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
            desc: "Improve creativity through music, dance, and painting.",
            duration: "6 Months",
            fees: "₹8,000"
        }
    ];

export default function Courses() {
  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{course.desc}</p>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>📅 {course.duration}</span>
                <span>💰 {course.fees}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
