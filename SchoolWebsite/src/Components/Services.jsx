import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Services() {

  const {services}=useContext(AppContext)
  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
          >
            <div className="text-5xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
