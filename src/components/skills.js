import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.4, 0, 0.2, 1] },
  }),
};

const CATEGORIES = [
  {
    icon: '⌨️',
    color: 'cyan',
    title: 'Languages',
    tags: [
      { name: 'Python', expert: true },
      { name: 'Go' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    icon: '🧩',
    color: 'purple',
    title: 'Frameworks',
    tags: [
      { name: 'FastAPI', expert: true },
      { name: 'Django', expert: true },
      { name: 'React' },
      { name: 'Redux Toolkit' },
    ],
  },
  {
    icon: '☁️',
    color: 'cyan',
    title: 'Cloud & DevOps',
    tags: [
      { name: 'AWS EC2' },
      { name: 'AWS S3' },
      { name: 'AWS Lambda' },
      { name: 'EventBridge' },
      { name: 'Docker' },
      { name: 'DigitalOcean' },
      { name: 'Nginx' },
      { name: 'Git' },
      { name: 'CI/CD' },
    ],
  },
  {
    icon: '🗄️',
    color: 'green',
    title: 'Databases',
    tags: [
      { name: 'PostgreSQL', expert: true },
      { name: 'Redis' },
      { name: 'MySQL' },
      { name: 'Firebase' },
    ],
  },
  {
    icon: '🏛️',
    color: 'purple',
    title: 'Architecture',
    tags: [
      { name: 'RESTful APIs' },
      { name: 'JWT / OAuth2' },
      { name: 'Microservices' },
      { name: 'RBAC' },
      { name: 'System Design' },
      { name: 'Serverless' },
    ],
  },
  {
    icon: '🔌',
    color: 'green',
    title: 'Integrations',
    tags: [
      { name: 'Razorpay' },
      { name: 'Paysharp' },
      { name: 'ZPL Printer' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-tag">Expertise</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-cat"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i * 0.08}
              whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.34, 1.56, 0.64, 1] } }}
            >
              <div className="skill-cat-header">
                <div className={`skill-cat-icon ${cat.color}`}>{cat.icon}</div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <span
                    key={tag.name}
                    className={`skill-tag${tag.expert ? ' expert' : ''}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
