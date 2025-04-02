import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const AboutMeSection = () => {
  const [aboutMeData, setAboutMeData] = useState(null);

  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        const docRef = doc(db, "aboutMe", "5gwH7rgguGIawbtxuHTI"); // Replace "content" with your document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAboutMeData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching About Me data:", error);
      }
    };

    fetchAboutMeData();
  }, []);

  if (!aboutMeData) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <section id="about" className="w-full bg-black px-8 py-16 flex items-center justify-center">
      <div className="max-w-3xl text-left sm:text-center">
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">{aboutMeData.title}</h2>
        <p className="text-base sm:text-lg text-white leading-relaxed">{aboutMeData.description}</p>
      </div>
    </section>
  );
};

export default AboutMeSection;