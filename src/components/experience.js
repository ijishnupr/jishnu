import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

const EXPERIENCES = [
  {
    role: 'Senior Backend Developer',
    company: 'Regal Jewellers',
    location: 'Trivandrum, Kerala · Onsite',
    period: 'May 2024 — Present',
    stack: ['FastAPI', 'PostgreSQL', 'AWS Lambda', 'EventBridge', 'JWT', 'RBAC', 'Docker'],
    bullets: [
      <>Led backend architecture for a custom ERP platform using <strong>FastAPI</strong> and <strong>PostgreSQL</strong>, driving key decisions on system design, data modelling, and API structure across sales, inventory, HR, and billing modules.</>,
      <>Reduced report generation latency by <span className="metric">60%</span> through targeted SQL query optimization, indexing strategies, and execution plan analysis on complex multi-table queries.</>,
      <>Designed and built secure REST APIs for mobile clients, implementing <strong>Role-Based Access Control (RBAC)</strong> and <strong>JWT authentication</strong> to protect sensitive accounting and inventory data.</>,
      <>Replaced manual billing workflows with automated pipelines using <strong>AWS Lambda</strong> and <strong>EventBridge Scheduler</strong>, cutting operational overhead by <span className="metric">40%</span> and eliminating human error in gold transfer calculations.</>,
      <>Implemented ZPL-based label printing integration, enabling direct barcode and price-tag generation from within the ERP system — removing a previously manual step from daily store operations.</>,
      <>Mentored team members on backend engineering best practices, led code reviews, and established documentation standards that raised code quality and improved overall team delivery speed.</>,
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Shebirth',
    location: 'Remote · Health-Tech',
    period: 'May 2023 — May 2024',
    stack: ['Django', 'React', 'Redis', 'DigitalOcean', 'Nginx', 'Razorpay', 'Paysharp'],
    bullets: [
      <>Owned cloud infrastructure across <strong>4 production applications</strong> on DigitalOcean, maintaining <span className="metric">99.9% uptime</span> through Nginx configuration, load management, and proactive server monitoring.</>,
      <>Improved API response speeds by <span className="metric">35%</span> by refactoring legacy Django codebases and introducing Redis caching for high-frequency health data queries.</>,
      <>Integrated <strong>Razorpay</strong> and <strong>Paysharp</strong> payment gateways, enabling reliable subscription billing for thousands of active users with consistent transactional security.</>,
      <>Built a reusable React.js component library that reduced frontend development time for new features by <span className="metric">25%</span> and enforced UI consistency across the product suite.</>,
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Indira Gandhi National Open University (IGNOU)',
    location: 'Cochin',
    period: '2024 — 2026 (Expected)',
    note: 'Pursuing alongside full-time engineering work — deepening CS fundamentals while shipping production code.',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Institute of Technology',
    location: 'Thiruvananthapuram',
    period: '2020 — 2023',
    note: null,
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-tag">Where I've Worked</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i * 0.15}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-location">
                      <i className="fas fa-map-marker-alt" /> {exp.location}
                    </div>
                  </div>
                  <span className="timeline-badge">{exp.period}</span>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="timeline-bullet">{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-stack">
                  {exp.stack.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="section-header"
          style={{ marginTop: '88px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-tag">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="timeline">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i * 0.15}
            >
              <div className="timeline-dot" style={{ background: 'var(--purple)' }} />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <div className="timeline-company">{edu.school}</div>
                    <div className="timeline-location">
                      <i className="fas fa-map-marker-alt" /> {edu.location}
                    </div>
                  </div>
                  <span className="timeline-badge" style={{ borderColor: 'rgba(168,85,247,0.3)', color: 'var(--purple)', background: 'rgba(168,85,247,0.08)' }}>
                    {edu.period}
                  </span>
                </div>
                {edu.note && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '12px', fontStyle: 'italic' }}>
                    {edu.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
