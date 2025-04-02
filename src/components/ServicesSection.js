import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "./Loader";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  if (!services.length) {
    return <p><Loader/></p>;
  }

  return (
    <section id="services" className="w-full bg-gray-100 px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;