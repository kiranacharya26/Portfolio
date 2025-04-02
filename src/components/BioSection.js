import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiShopify, SiRedux, SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";

const iconMap = {
  FaReact: <FaReact size={40} className="text-blue-500" />,
  FaHtml5: <FaHtml5 size={40} className="text-orange-500" />,
  FaCss3Alt: <FaCss3Alt size={40} className="text-blue-400" />,
  FaJs: <FaJs size={40} className="text-yellow-500" />,
  SiShopify: <SiShopify size={40} className="text-green-500" />,
  SiTailwindcss: <SiTailwindcss size={40} className="text-teal-500" />,
  SiRedux: <SiRedux size={40} className="text-purple-600" />,
  SiNextdotjs: <SiNextdotjs size={40} className="text-black" />,
  FaNodeJs: <FaNodeJs size={40} className="text-green-600" />,
  SiMysql: <SiMysql size={40} className="text-blue-600" />,
};

const BioSection = () => {
  const [bioData, setBioData] = useState(null);
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    const fetchBioData = async () => {
      try {
        const docRef = doc(db, "bioSection", "ZPJglHJjwZu8zQyGbZ2a"); // Replace with your document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setBioData({
            title: data.title,
            name: data.name,
            subtitle: data.subtitle,
          });
          setTechStack(data.techStack || []);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching BioSection data:", error);
      }
    };

    fetchBioData();
  }, []);

  if (!bioData || !techStack.length) {
    return <p>Loading...</p>;
  }

  return (
    <section className="w-full h-[90vh] flex flex-col lg:flex-row items-center bg-gray-100 px-8 py-16">
      {/* Left Side: Text */}
      <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
        <p className="text-4xl lg:text-6xl font-light mb-4">{bioData.title}</p>
        <p className="text-4xl lg:text-6xl font-bold mb-4">{bioData.name},</p>
        <p className="text-4xl lg:text-6xl font-light">{bioData.subtitle}</p>
      </div>

      {/* Right Side: Tech Stack */}
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center items-center gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gradient-to-r from-white to-transparent bg-opacity-40 border border-white rounded-full shadow-lg flex justify-center items-center
                    w-12 h-12 sm:w-20 sm:h-20"
            style={{
              backdropFilter: "blur(5px)",
            }}
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {iconMap[tech.icon]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BioSection;