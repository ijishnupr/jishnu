import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

const PROJECTS = [
  {
    folder: '💊',
    name: 'CureMart',
    desc: 'Medical-store management system with token-based user authentication and authorization. Full-featured inventory, billing, staff management, and prescription handling.',
    stack: ['Django', 'React', 'PostgreSQL', 'JWT', 'Bootstrap'],
    link: 'https://curemart.netlify.app/',
    github: null,
  },
  {
    folder: '📣',
    name: 'High on Buzz',
    desc: 'A platform connecting influencers with brands for collaboration — featuring role-based dashboards, real-time campaign management, and verified profiles.',
    stack: ['Django', 'React', 'REST API', 'Bootstrap'],
    link: 'https://highonbuzz.netlify.app/',
    github: null,
  },
  {
    folder: '📊',
    name: 'Sorting Visualizer',
    desc: 'Interactive visualization engine for sorting algorithms — Bubble Sort, Merge Sort, Quick Sort — with step-by-step animation and configurable speed controls.',
    stack: ['HTML', 'CSS', 'Vanilla JS'],
    link: 'https://ijishnupr.github.io/sorting-visualizer/',
    github: 'https://github.com/ijishnupr/sorting-visualizer',
  },
  {
    folder: '🌾',
    name: 'Agropedia',
    desc: 'Agricultural management platform designed for farmers to digitally manage crops, resources, inventory, and farm operations with an intuitive interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    link: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-tag">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i * 0.1}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
              onClick={() => p.link && window.open(p.link, '_blank')}
              style={{ cursor: p.link ? 'pointer' : 'default' }}
            >
              <div className="project-top">
                <span className="project-folder">{p.folder}</span>
                <div className="project-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                      onClick={e => e.stopPropagation()}
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github" />
                    </a>
                  )}
                  {p.link && (
                    <span className="project-link-icon">
                      <i className="fas fa-external-link-alt" />
                    </span>
                  )}
                </div>
              </div>

              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-stack">
                {p.stack.map(t => (
                  <span key={t} className="project-tech">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
