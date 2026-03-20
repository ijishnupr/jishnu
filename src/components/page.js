import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import resume from './img/resume.pdf';

const ROLES = [
  'Senior Backend Developer',
  'Python & Cloud Specialist',
  'FastAPI / Django Expert',
  'AWS Solutions Architect',
];

function useTypewriter(words, speed = 80, pause = 2200) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout;
    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(d => d.slice(0, -1)), speed / 2);
      } else {
        setWordIdx(i => i + 1);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words, speed, pause]);

  return display;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1], delay },
});

const STATS = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 60, suffix: '%', label: 'Faster Reporting' },
  { value: 40, suffix: '%', label: 'Less Overhead' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime Achieved' },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="grid-overlay" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      <div className="hero-content">
        {/* Name */}
        <motion.h1 className="hero-name" {...fadeUp(0.15)}>
          JISHNU PR
        </motion.h1>

        {/* Typewriter role */}
        <motion.div className="hero-role-wrap" {...fadeUp(0.28)}>
          {role}
          <span className="hero-cursor" />
        </motion.div>

        {/* Summary */}
        <motion.p className="hero-summary" {...fadeUp(0.38)}>
          Senior Backend Developer with <strong>3+ years</strong> building production-grade systems
          across accounting software and health-tech. Deep expertise in{' '}
          <strong>FastAPI</strong>, <strong>Django</strong>, and <strong>AWS</strong> — driving
          measurable performance improvements and end-to-end architectural decisions on every engagement.
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero-cta" {...fadeUp(0.48)}>
          <a href="#contact" className="btn-primary">
            <i className="fas fa-paper-plane" /> Get In Touch
          </a>
          <a href={resume} download="Jishnu_PR_Resume.pdf" className="btn-secondary">
            <i className="fas fa-download" /> Download Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div className="hero-stats" {...fadeUp(0.58)}>
          {STATS.map(s => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                  duration={2.2}
                />
              </span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
