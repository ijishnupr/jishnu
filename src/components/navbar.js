import { useState, useEffect } from 'react';
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
  const [hovered, setHovered]       = useState(null);
  const [active, setActive]         = useState('');

  /* scroll progress bar */
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
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      {/* Thin scroll-progress line */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Floating pill */}
      <header className="navbar">
        <motion.div
          className="navbar-pill"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <a href="#home" className="navbar-logo">Jishnu PR</a>

          {/* Divider */}
          <span className="navbar-divider" />

          {/* Links with magic-move hover pill */}
          <ul
            className="navbar-links"
            onMouseLeave={() => setHovered(null)}
          >
            {LINKS.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <li
                  key={link.label}
                  className="navbar-link-wrap"
                  onMouseEnter={() => setHovered(link.label)}
                >
                  {/* Sliding background pill */}
                  {hovered === link.label && (
                    <motion.span
                      className="navbar-link-bg"
                      layoutId="nav-hover"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.38 }}
                    />
                  )}
                  <a
                    href={link.href}
                    className={`navbar-link${isActive ? ' active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <span className="navbar-divider" />

          {/* Resume CTA */}
          <a href={resume} download="Jishnu_PR_Resume.pdf" className="navbar-cta">
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            className={`nav-mobile-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </motion.div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
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
              style={{ marginTop: '16px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
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
