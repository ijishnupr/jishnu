import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

const CONTACT_ITEMS = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'ijishnupr@gmail.com',
    href: 'mailto:ijishnupr@gmail.com',
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+91 97783 69032',
    href: 'tel:+919778369032',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Trivandrum, Kerala, India',
    href: null,
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jishnupr',
    href: 'https://www.linkedin.com/in/jishnupr/',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: 'github.com/ijishnupr',
    href: 'https://github.com/ijishnupr',
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm('mbjvlpjv');

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Left: info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
          >
            <p className="contact-tagline">
              I'm always open to discussing new projects, technical challenges, or opportunities
              to build great products. Whether you have a project in mind or just want to say
              hi — my inbox is always open.
            </p>

            <div className="contact-items">
              {CONTACT_ITEMS.map(item => {
                const Tag = item.href ? 'a' : 'div';
                return (
                  <Tag
                    key={item.label}
                    href={item.href || undefined}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      <i className={item.icon} />
                    </div>
                    <div>
                      <div className="contact-text-label">{item.label}</div>
                      <div className="contact-text-value">{item.value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="contact-form-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0.2}
          >
            {state.succeeded ? (
              <div className="form-success">
                <span className="form-success-icon">✅</span>
                Message sent! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="you@example.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
