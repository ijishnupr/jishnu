import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-inner">
        <span className="footer-brand">Jishnu PR</span>

        <p className="footer-copy">
          © {new Date().getFullYear()} Jishnu PR &nbsp;·&nbsp; Built with React &nbsp;·&nbsp; Deployed on Vercel
        </p>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/jishnupr/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/ijishnupr"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="mailto:ijishnupr@gmail.com"
            className="footer-social"
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
