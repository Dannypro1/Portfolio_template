import  { useState } from 'react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: '🐙', 
      url: 'https://github.com/dannypor1',
      color: '#333'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/in/hategekimana-danny-17b227377',
      color: '#0077b5'
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/dannypro1',
      color: '#1da1f2'
    },
    { 
      name: 'Email', 
      icon: '📧', 
      url: 'mailto:himanadanny@gmail.com',
      color: '#e53e3e'
    },
    { 
      name: 'Portfolio', 
      icon: '🌐', 
      url: 'http://dannypro1.com',
      color: '#4299e1'
    },
    { 
      name: 'Instagram', 
      icon: '📸', 
      url: 'https://instagram.com/dannypro__',
      color: '#e4405f'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skill' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 1) 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 20%, rgba(229, 62, 62, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(66, 153, 225, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(72, 187, 120, 0.03) 0%, transparent 50%)
        `,
        zIndex: 0
      }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Top Border */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #e53e3e, #4299e1, #48bb78, transparent)',
          marginBottom: '3rem'
        }}></div>

        {/* Main Footer Content */}
        <div className="row py-5">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="mb-4">
              <h4 className="fw-bold mb-3 d-flex align-items-center">
                <img src="/vite.svg" alt="Vite Logo" style={{ width: '30px', marginRight: '10px' }} />
                <span style={{
                  background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Danny Pro
                </span>
              </h4>
              <p style={{ color: '#a0aec0', lineHeight: '1.6', fontSize: '15px',textAlign: 'justify' }}>
                Full Stack Developer and Penetration Tester passionate about creating innovative digital solutions. 
                Turning ideas into reality through clean code and modern design.
              </p>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="d-flex align-items-center mb-2">
                <span className="me-2" style={{ fontSize: '16px' }}>📧</span>
                <a 
                  href="mailto:himanadanny@gmail.com"
                  style={{ 
                    color: '#a0aec0', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#e53e3e')}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#a0aec0')}
                >
                  himanadanny@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <span className="me-2" style={{ fontSize: '16px' }}>📱</span>
                <span style={{ color: '#a0aec0', fontSize: '14px' }}>+(250) 790 951 505</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2" style={{ fontSize: '16px' }}>📍</span>
                <span style={{ color: '#a0aec0', fontSize: '14px' }}>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: 'white' }}>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="btn p-0 text-start"
                    style={{
                      color: '#a0aec0',
                      background: 'none',
                      border: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.color = '#e53e3e';
                      target.style.paddingLeft = '8px';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.color = '#a0aec0';
                      target.style.paddingLeft = '0';
                    }}
                  >
                    → {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Skills */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: 'white' }}>Services</h5>
            <ul className="list-unstyled">
              {[
                'Frontend Development',
                'Backend Development', 
                'UI/UX Design',
                'Mobile Development',
                'Web Consulting',
                'Penetration Testing',
                'Cybersecurity Solutions'

              ].map((service, index) => (
                <li key={index} className="mb-2">
                  <span style={{ color: '#a0aec0', fontSize: '14px' }}>
                    <span className="me-2" style={{ color: '#48bb78' }}>✓</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: 'white' }}>Stay Connected</h5>
            <p style={{ color: '#a0aec0', fontSize: '14px', marginBottom: '1rem' }}>
              Get updates about my latest projects and blog posts.
            </p>
            
            <div className="newsletter-form mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{
                    background: 'rgba(45, 55, 72, 0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '14px',
                    borderRadius: '25px 0 0 25px'
                  }}
                />
                <button
                  className="btn"
                  type="button"
                  style={{
                    background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '0 25px 25px 0',
                    fontSize: '14px',
                    padding: '8px 16px'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h6 className="fw-semibold mb-2" style={{ color: 'white', fontSize: '14px' }}>
                Follow Me
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: hoveredSocial === index 
                        ? `linear-gradient(135deg, ${social.color}, ${social.color}cc)`
                        : 'rgba(45, 55, 72, 0.6)',
                      border: `1px solid ${hoveredSocial === index ? social.color : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      transform: hoveredSocial === index ? 'translateY(-3px) scale(1.1)' : 'none',
                      boxShadow: hoveredSocial === index ? `0 8px 20px ${social.color}40` : 'none'
                    }}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-top py-4"
          style={{ 
            borderColor: 'rgba(255,255,255,0.1) !important',
            borderWidth: '1px !important'
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-2 mb-md-0">
              <p className="mb-0" style={{ color: '#a0aec0', fontSize: '14px' }}>
                &copy; {new Date().getFullYear()} DP. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0" style={{ color: '#a0aec0', fontSize: '14px' }}>
                Made By{' '}
                <span 
                  style={{ 
                    color: '#e53e3e', 
                    animation: 'heartbeat 1.5s ease-in-out infinite' 
                  }}
                >
                  <img src="/vite.svg" alt="Vite Logo" style={{ width: '16px', verticalAlign: 'middle', marginLeft: '4px', marginRight: '4px' }} />
                </span>
                {' '}--{' '}
                <span style={{ color: '#4299e1' }}>Danny Pro</span>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {/* <button
          className="back-to-top btn position-fixed"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            boxShadow: '0 4px 15px rgba(229, 62, 62, 0.3)',
            transition: 'all 0.3s ease',
            zIndex: 3000
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.transform = 'translateY(-3px) scale(1.1)';
            target.style.boxShadow = '0 8px 25px rgba(229, 62, 62, 0.4)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.transform = 'translateY(0) scale(1)';
            target.style.boxShadow = '0 4px 15px rgba(229, 62, 62, 0.3)';
          }}
        >
          ↑
        </button> */}
      </div>

      {/* Custom Styles */}
      <div style={{ height: '80px', minHeight: '80px', width: '100%' }}></div>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
    </footer>
   
  );
};

export default Footer;