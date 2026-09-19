import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './styles/Projects.css';
import brieflyImg from '../resources/photos/briefly_dashboard.png';
import cancerImg from '../resources/photos/proj1.jpeg';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="projects-section">
      <div className={`projects-container ${isModalOpen ? 'blur-background' : ''}`}>
        <h2 className="section-title">Selected Projects</h2>

        {/* ======== Featured: Briefly.ai ======== */}
        <motion.div
          className="featured-card glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="featured-image-wrap">
            <img
              src={brieflyImg}
              alt="Briefly.ai dashboard screenshot"
              className="featured-image"
            />
          </div>
          <div className="featured-body">
            <span className="featured-label">Featured Project</span>
            <h3 className="featured-title">
              Briefly.ai - GenAI News Intelligence &amp; RAG Platform
            </h3>
            <p className="featured-dates">Mar 2026 - Sep 2026</p>
            <p className="featured-tech">
              Python | FastAPI | PostgreSQL | pgvector | Gemini | Next.js | Docker | GitHub Actions
            </p>
            <p className="featured-description">
              Full-stack GenAI news intelligence platform combining automated content
              ingestion, custom RAG, semantic retrieval and adaptive personalization.
            </p>
            <ul className="featured-highlights">
              <li>Custom RAG pipeline using Gemini embeddings and PostgreSQL/pgvector.</li>
              <li>95% Hit@5 and 92.5% Recall@5 on a curated retrieval benchmark.</li>
              <li>Production-oriented engineering with 90 automated tests, CI, Docker and telemetry.</li>
            </ul>
            <div className="featured-actions">
              <a
                href="https://briefly-ai-newsletter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/BhuvanDamodar/ai-newsletter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
              <button
                className="btn-text"
                onClick={handleOpenModal}
              >
                View Details →
              </button>
            </div>
          </div>
        </motion.div>

        {/* ======== Standard: Cancer Detection ======== */}
        <motion.div
          className="standard-card glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="standard-image-wrap">
            <img
              src={cancerImg}
              alt="Histopathologic tissue analysis - illustrative"
              className="standard-image"
            />
          </div>
          <div className="standard-body">
            <div className="standard-header">
              <h3 className="standard-title">
                Histopathologic Multi-Organ Cancer Detection in Lymph Node Tissues
              </h3>
              <span className="academic-badge">Bachelor's Final-Year Group Project</span>
            </div>
            <p className="standard-dates">Nov 2021 - Jun 2022</p>
            <p className="standard-tech">
              Deep Learning | CNN | Image Processing | ROC-AUC
            </p>
            <p className="standard-description">
              Developed a CNN-based deep-learning pipeline for detecting metastatic
              cancer in histopathology images using approximately 198,000
              samples. Implemented preprocessing, normalization and augmentation for
              large-scale image classification, achieving 0.94 ROC-AUC.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ======== Briefly.ai Detail Modal ======== */}
      {isModalOpen && (
        <div className="projects-modal">
          <div className="projects-modal-content" ref={modalRef}>
            <button
              type="button"
              className="close-button"
              onClick={handleCloseModal}
              aria-label="Close details"
            >
              &times;
            </button>
            <h2 className="modal-title">Briefly.ai - GenAI News Intelligence &amp; RAG Platform</h2>
            <p className="modal-intro">
              Briefly.ai is a production-oriented GenAI application that automatically
              curates AI news, provides conversational retrieval over the embedded news
              archive, and adapts recommendations using subscriber feedback.
            </p>

            <div className="modal-section">
              <h4 className="modal-section-heading">Data &amp; GenAI Pipeline</h4>
              <ul className="modal-section-list">
                <li>Ingests content from 6+ curated AI/technology sources</li>
                <li>Uses Gemini for structured summarization, relevance filtering and metadata extraction</li>
                <li>Automated daily ingestion and personalized email delivery</li>
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-heading">RAG Architecture</h4>
              <ul className="modal-section-list">
                <li>Custom RAG implementation without LangChain</li>
                <li>Gemini embeddings stored in PostgreSQL using pgvector</li>
                <li>Cosine-similarity retrieval with source-cited generation</li>
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-heading">Evaluation</h4>
              <ul className="modal-section-list">
                <li>95% Hit@5</li>
                <li>92.5% Recall@5</li>
                <li>~85 ms retrieval latency</li>
                <li>~2.2 s average end-to-end RAG latency</li>
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-heading">Production Engineering</h4>
              <ul className="modal-section-list">
                <li>90 automated tests</li>
                <li>Real PostgreSQL/pgvector integration testing</li>
                <li>Docker, GitHub Actions CI</li>
                <li>Structured logging, health telemetry and failure alerts</li>
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-heading">Adaptive Personalization</h4>
              <ul className="modal-section-list">
                <li>Secure 👍/👎 feedback workflow</li>
                <li>Signed, expiring feedback tokens</li>
                <li>60-day bounded tag-affinity scoring for future recommendations</li>
              </ul>
            </div>

            <div className="modal-actions">
              <a
                href="https://briefly-ai-newsletter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/BhuvanDamodar/ai-newsletter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
