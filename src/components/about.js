import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import resume from './img/resume.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

const STATS = [
  { icon: '🏗️', value: 1, suffix: '', label: 'Full-scale ERP system delivered live in production' },
  { icon: '☁️', value: 4, suffix: '', label: 'Production apps managed on cloud infrastructure' },
  { icon: '⚡', value: 60, suffix: '%', label: 'Report generation latency reduced' },
  { icon: '🔒', value: 99.9, decimals: 1, suffix: '%', label: 'Uptime maintained across all platforms' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0.1}
          >
            <p className="about-bio">
              I'm <strong>Jishnu PR</strong>, a Senior Backend Developer based in Trivandrum, Kerala,
              with <strong>3+ years</strong> of experience designing and shipping production-grade
              systems across accounting software and health-tech.
            </p>
            <p className="about-bio">
              My core expertise lies in{' '}
              <span className="inline-code">FastAPI</span> and{' '}
              <span className="inline-code">Django</span>, backed by strong command of cloud
              infrastructure on <span className="inline-code">AWS</span> and{' '}
              <span className="inline-code">DigitalOcean</span>. I've led backend development of a
              full-scale ERP platform — making architectural decisions from database schema design to
              serverless automation with Lambda and EventBridge.
            </p>
            <p className="about-bio">
              I thrive in collaborative environments, mentoring junior developers, leading code
              reviews, and taking end-to-end ownership of complex features. Currently pursuing an{' '}
              <strong>MCA from IGNOU</strong> while shipping production code every day.
            </p>

            <div className="about-actions">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-envelope" /> Let's Work Together
              </a>
              <a href={resume} download="Jishnu_PR_Resume.pdf" className="btn-secondary">
                <i className="fas fa-file-pdf" /> Resume
              </a>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="about-stats">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={i * 0.12}
              >
                <div className="stat-card-icon">{s.icon}</div>
                <div className="stat-card-value">
                  <CountUp
                    end={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals || 0}
                    enableScrollSpy
                    scrollSpyOnce
                    duration={2}
                  />
                </div>
                <div className="stat-card-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
