import React from "react";
import { motion } from "framer-motion";
import "./styles/Skills.css";

/* ── SVG icon components (monochrome, accent-coloured) ── */

const IconBackend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="category-icon">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const IconAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="category-icon">
    <path d="M12 2C8.7 2 6 4.7 6 8c0 2.2 1.2 4.1 3 5.1V15h6v-1.9c1.8-1 3-2.9 3-5.1 0-3.3-2.7-6-6-6z" />
    <path d="M9 15v2a3 3 0 0 0 6 0v-2" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <path d="M10 13h4" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="category-icon">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const IconDevOps = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="category-icon">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const IconFrontend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="category-icon">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconPractices = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="category-icon">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

/* ── Skill categories ── */

const categories = [
  {
    title: "Backend & APIs",
    icon: <IconBackend />,
    skills: ["Python", "Java", "FastAPI", "Spring Boot", "REST APIs", "Kafka", "SQLAlchemy"],
  },
  {
    title: "AI / ML & GenAI",
    icon: <IconAI />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNNs",
      "Generative AI",
      "RAG",
      "Gemini API",
      "Vector Embeddings",
      "pgvector",
      "Geometric Deep Learning / GNN concepts",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <IconDevOps />,
    skills: ["Docker", "GitHub Actions", "CI/CD", "Git", "Linux", "Kubernetes", "AWS", "Azure", "Datadog"],
  },
  {
    title: "Databases",
    icon: <IconDatabase />,
    skills: ["PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    title: "Frontend",
    icon: <IconFrontend />,
    skills: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Engineering Practices",
    icon: <IconPractices />,
    skills: ["Testing", "Debugging", "Agile / Scrum", "Software Engineering Best Practices"],
  },
];

/* ── Component ── */

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-category-grid">
          {categories.map((cat, i) => (
            <motion.div
              className="category-card glass-card"
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="category-header">
                {cat.icon}
                <h3 className="category-title">{cat.title}</h3>
              </div>
              <div className="category-pills">
                {cat.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="skills-additional-card">
          <span className="skills-additional-label">Additional Technologies</span>
          <span className="skills-additional-list">Node.js · Express.js · MongoDB · JWT</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
