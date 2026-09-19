import React from "react";
import "./styles/Education.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Stuttgart",
    place: "Stuttgart, Germany",
    duration: "2025 – Present",
    focus: "Focus: Software Engineering, Applied AI & Machine Learning",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Vidyavardhaka College of Engineering",
    place: "Mysore, India",
    duration: "2018 – 2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((education, index) => (
            <div className="education-card glass-card" key={index}>
              <div className="education-icon-container">
                <FaGraduationCap className="education-icon" />
              </div>
              <div className="education-details">
                <h3 className="education-degree">{education.degree}</h3>
                <p className="education-institution">{education.institution}</p>
                <p className="education-place">{education.place}</p>
                <p className="education-duration">{education.duration}</p>
                {education.focus && (
                  <p className="education-focus">{education.focus}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
