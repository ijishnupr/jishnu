import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import resume from './img/resume.pdf';

const LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState('');
  // pill: { left, width } — always in DOM, opacity driven by hovering
  const [pill, setPill]             = useState({ left: 0, width: 0, visible: false });
  const ulRef                       = useRef(null);

  /* scroll progress */
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const handleEnter = (e) => {
    const li = e.currentTarget;
    setPill({ left: li.offsetLeft, width: li.offsetWidth, visible: true });
  };

  const handleLeave = () => {
    setPill(p => ({ ...p, visible: false }));
  };

  return (
    <>
      {/* Scroll progress line */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Floating pill navbar */}
      <header className="navbar">
        <motion.div
          className="navbar-pill"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <a href="#home" className="navbar-logo">Jishnu PR</a>

          <span className="navbar-divider" />

          {/* Links — single pill slides under hovered item */}
          <ul
            ref={ulRef}
            className="navbar-links"
            onMouseLeave={handleLeave}
          >
            {/* The sliding pill — always mounted, opacity/position animated */}
            <motion.span
              className="navbar-hover-pill"
              animate={{
                opacity:  pill.visible ? 1 : 0,
                left:     pill.left,
                width:    pill.width,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />

            {LINKS.map(link => {
              const id = link.href.slice(1);
              return (
                <li
                  key={link.label}
                  className="navbar-link-item"
                  onMouseEnter={handleEnter}
                >
                  <a
                    href={link.href}
                    className={`navbar-link${active === id ? ' active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <span className="navbar-divider" />

          {/* Resume CTA */}
          <a href={resume} download="Jishnu_PR_Resume.pdf" className="navbar-cta">
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className={`nav-mobile-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </motion.div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="nav-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={resume}
              download="Jishnu_PR_Resume.pdf"
              className="btn-primary"
              style={{ marginTop: '20px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
