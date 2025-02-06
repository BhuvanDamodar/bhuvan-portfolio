import React from "react";
import "./styles/Education.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Vidya Vardhaka College of Engineering",
    duration: "2018 - 2022",
  },
  // {
  //   degree: "Master of Science in Computer Science",
  //   institution: "University of Stuttgart",
  //   duration: "2025 - Present",
  // },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((education, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon-container">
                <FaGraduationCap className="education-icon" />
              </div>
              <div className="education-details">
                <h3 className="education-degree">{education.degree}</h3>
                <p className="education-institution">{education.institution}</p>
                <p className="education-duration">{education.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
