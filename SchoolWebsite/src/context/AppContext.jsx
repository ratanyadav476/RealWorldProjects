import { createContext } from "react";
import { useState } from "react";
import { FaBus, FaFutbol, FaMusic, FaFlask, FaLaptop, FaUtensils, FaUsers, FaHome, FaBook, FaChalkboardTeacher, FaCalendarAlt, FaPhone, FaImages } from "react-icons/fa";

export const AppContext = createContext();
function AppContextProvider({ children }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    function TeachersData() {
        setLoading(true);
        try {


            console.log(Teachersdata);
            setItems(Teachersdata);
        } catch (error) {
            console.log("error during data fetch", error);
        }
        setLoading(false);
    }
    console.log(items);


    const services = [
        { title: "Academic Programs", icon: <FaBook />, desc: "Comprehensive curriculum for all grades." },
        { title: "Transport Facility", icon: <FaBus />, desc: "Safe and reliable school buses." },
        { title: "Sports & Games", icon: <FaFutbol />, desc: "Indoor & outdoor sports for fitness." },
        { title: "Music & Arts", icon: <FaMusic />, desc: "Music, dance & creative arts classes." },
        { title: "Science Labs", icon: <FaFlask />, desc: "Well-equipped Physics, Chemistry, Biology labs." },
        { title: "Computer Lab", icon: <FaLaptop />, desc: "Modern technology for digital learning." },
        { title: "Healthy Meals", icon: <FaUtensils />, desc: "Nutritious and hygienic cafeteria food." },
        { title: "Counselling", icon: <FaUsers />, desc: "Guidance & emotional support for students." },
    ];

    const pages = [
        { title: "Home", icon: <FaHome />, desc: "Welcome to our school" },
        { title: "Academics", icon: <FaBook />, desc: "Curriculum & Subjects" },
        { title: "Teachers", icon: <FaChalkboardTeacher />, desc: "Meet our teachers" },
        { title: "Events", icon: <FaCalendarAlt />, desc: "Annual & Monthly Events" },
        { title: "Gallery", icon: <FaImages />, desc: "School photos" },
        { title: "Contact Us", icon: <FaPhone />, desc: "Get in touch" },
    ];

  const Teachersdata = [
  {
    id: 1,
    name: "Raman Yadav",
    job: "Computer Teacher",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I have had the pleasure of working with this team on several projects, and I am consistently impressed with their technical expertise and ability to deliver quality solutions on time and within budget. They are a true partner and an asset to any project.",
  },
  {
    id: 2,
    name: "krishna k",
    job: " Biology Teacher",
    image: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
  },
  {
    id: 3,
    name: "Rama Chaturvedi",
    job: "Maths Teacher",
    image: "https://tse2.mm.bing.net/th/id/OIP.jGkkOMWT1fwzij2JMqwNyAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
  },
  {
    id: 4,
    name: "Pritee Yadav",
    job: "Science Teacher",
    image: "https://tse4.mm.bing.net/th/id/OIP.2Ecc2kJaDoiau98cs8wETgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "I have worked with many content creators over the years, but none have impressed me as much as this team. They have a knack for crafting compelling and engaging content that resonates with our audience and drives real results. I highly recommend them!",
  },
  {
    id: 5,
    name: "Hari ratan",
    job: "Sanskrit Specilist",
    image: "https://avatars.githubusercontent.com/u/93366359?v=4",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
  },
];

    const value = {
        loading,
        setLoading,
        items, setItems,
        TeachersData,
        services,
        pages,
        
    

    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider;