import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Get current page from URL to set active section
    const currentPath = window.location.pathname;
    const pathToSection = {
      '/': 'About',
      '/about': 'about',
      '/skills': 'skills',
      '/experience': 'experience',
      '/projects': 'projects',
      '/contact': 'contact'
    };
    setActiveSection(pathToSection[currentPath as keyof typeof pathToSection] || 'About');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: '👨‍💻', path: '#about' },
    { id: 'skills', label: 'Skills', icon: '🚀', path: '#skills' },
    { id: 'experience', label: 'Experience', icon: '💼', path: '#experience' },
    { id: 'projects', label: 'Projects', icon: '🎯', path: '#projects' },
    { id: 'contact', label: 'Contact', icon: '📧', path: '#contact' }
  ];

  interface HandleNavClick {
    (sectionId: string): void;
  }

  const handleNavClick: HandleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Navigate to the page
    if (sectionId !== window.location.pathname) {
      window.location.href = sectionId;
    } else {
      // If already on the page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.44)' : 'rgb(10, 10, 10)',
          backdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1000,
        }}
      >
        <div className="container">
          {/* Brand/Logo */}
          <a 
            className="navbar-brand fw-bold d-flex align-items-center"
            href="/"
            style={{
              color: 'white',
              fontSize: '1.5rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'linear-gradient(135deg, #e53e3e, #ff6b6b)';
              (target.style as HTMLElement['style'])['webkitBackgroundClip'] = 'text';
              (target.style as HTMLElement['style'])['webkitTextFillColor'] = 'transparent';
              target.style.backgroundClip = 'text';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'none';
              (target.style as CSSStyleDeclaration).webkitTextFillColor = 'white';
            }}
          >
            <img src="/vite.svg" alt="Logo" className="me-2" style={{ paddingRight: '-20px', width: '30px', height: '30px' }} />
            anny Pro
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            title="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'rgba(229, 62, 62, 0.2)',
              borderRadius: '10px',
              padding: '8px 12px'
            }}
          >
            <div 
              className="hamburger-menu"
              style={{
                width: '24px',
                height: '18px',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <span style={{
                display: 'block',
                position: 'absolute',
                height: '2px',
                width: '100%',
                background: 'white',
                borderRadius: '1px',
                opacity: isMobileMenuOpen ? 0 : 1,
                left: 0,
                transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
                transition: '0.25s ease-in-out',
                top: isMobileMenuOpen ? '8px' : '0'
              }}></span>
              <span style={{
                display: 'block',
                position: 'absolute',
                height: '2px',
                width: '100%',
                background: 'white',
                borderRadius: '1px',
                left: 0,
                top: '8px',
                transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'none',
                transition: '0.25s ease-in-out'
              }}></span>
              <span style={{
                display: 'block',
                position: 'absolute',
                height: '2px',
                width: '100%',
                background: 'white',
                borderRadius: '1px',
                opacity: isMobileMenuOpen ? 0 : 1,
                left: 0,
                transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
                transition: '0.25s ease-in-out',
                bottom: 0
              }}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item mx-2">
                  <button
                    className="nav-link btn border-0 px-4 py-2 d-flex align-items-center"
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: activeSection === item.id 
                        ? 'linear-gradient(135deg, #e53e3e, #ff6b6b)' 
                        : 'transparent',
                      color: 'white',
                      borderRadius: '25px',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: activeSection === item.id 
                        ? 'none' 
                        : '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        const target = e.target as HTMLElement;
                        target.style.background = 'rgba(229, 62, 62, 0.2)';
                        target.style.borderColor = '#e53e3e';
                        target.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        const target = e.target as HTMLElement;
                        target.style.background = 'transparent';
                        target.style.borderColor = 'rgba(255,255,255,0.1)';
                        target.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <span className="me-2">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CV Download Button */}
          <div className="d-none d-lg-block">
            <button
              className="btn px-4 py-2 fw-semibold"
              style={{
                background: 'linear-gradient(135deg, #4299e1, #63b3ed)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(66, 153, 225, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 8px 25px rgba(66, 153, 225, 0.4)';
                target.style.background = 'linear-gradient(135deg, #3182ce, #4299e1)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 4px 15px rgba(66, 153, 225, 0.3)';
                target.style.background = 'linear-gradient(135deg, #4299e1, #63b3ed)';
              }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf'; // Update this path
                link.download = 'DannyPro_CV.pdf';
                link.click();
              }}
            >
              <span className="me-2" onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf'; // Update this path
                link.download = 'DannyPro_CV.pdf';
                link.click();
              }}>📄</span>
              Download CV
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className="mobile-menu d-lg-none"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            maxHeight: isMobileMenuOpen ? '400px' : '0',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
        >
          <div className="container py-3">
            <ul className="list-unstyled mb-0">
              {navItems.map((item, index) => (
                <li key={item.id} className="mb-2">
                  <button
                    className="btn w-100 text-start px-3 py-3 d-flex align-items-center"
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: activeSection === item.id 
                        ? 'rgba(229, 62, 62, 0.2)' 
                        : 'transparent',
                      color: 'white',
                      border: 'none',
                      borderRadius: '15px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      opacity: isMobileMenuOpen ? 1 : 0,
                      transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <span className="me-3" style={{ fontSize: '20px' }}>{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-3">
                <button
                  className="btn w-100 px-3 py-3 fw-semibold d-flex align-items-center justify-content-center"
                  onClick={() => {
                    // Replace with your actual CV file path
                    const link = document.createElement('a');
                    link.href = '/path/to/your/cv.pdf'; // Update this path
                    link.download = 'DannyPro_CV.pdf';
                    link.click();
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #4299e1, #63b3ed)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    transitionDelay: `${navItems.length * 0.1}s`
                  }}
                >
                  <span className="me-2">📄</span>
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div style={{ height: '80px' }}></div>

      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
    </>
  );
};

export default Navbar;