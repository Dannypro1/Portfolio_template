import  { useState, useEffect } from 'react';



const About = () => {
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, satisfaction: 0, experience: 0 });

  useEffect(() => {
    // Animate stats on page load
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          projects: Math.floor(5 * progress),
          satisfaction: Math.floor(95 * progress),
          experience: Math.floor(4 * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
        }
      });
    });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  const skills = ['HTML5', 'CSS3', 'JavaScript', 'Python' ,'Node.js', 'React', 'Git', 'GitHub', 'TypeScript', 'MongoDB','Postgresql', 'Express.js','Kali linux OS','pentest'];
  const services = [
    { icon: '💻', title: 'Website and System Development', color: '#e53e3e', desc: 'Custom web solutions with modern frameworks' },
    { icon: '🔐', title: 'Penetration Testing', color: '#4299e1', desc: 'Vulnerability testing of systems' },
    { icon: '☁️', title: 'Website Hosting', color: '#48bb78', desc: 'Reliable cloud hosting solutions' },
    { icon: '🎨', title: 'UI/UX Design', color: '#9f7aea', desc: 'User-centered design experiences' },
    { icon: '⚡', title: 'Performance Optimization', color: '#f6ad55', desc: 'Speed and efficiency improvements' },
    { icon: '🔧', title: 'Maintenance & Support', color: '#38b2ac', desc: '24/7 technical support and updates' }
  ];

  const education = [
    { year: '2021-2026', degree: 'currently studying information technology in Year 4', institution: 'University of Rwanda', gpa: '3.8/4.0' },
    { year: '2023', degree: 'Ethical hacker and certificate in cyber security essentials', institution: 'Cisco', gpa: 'Certified' },
    { year: '2024', degree: 'Certificate in .NET Development', institution: 'Meta Professional Certificate', gpa: 'Certified' }
  ];

  const experience = [
    { year: '2025-Present', role: 'intermediate Software Developer', company: 'Binary Hub', desc: 'Supporting the development team in building scalable web applications' },
    { year: '2020-2022', role: 'Penetration tester', company: '-', desc: 'Conducted security assessments and vulnerability testing' },
    { year: '2019-2020', role: 'Junior Developer', company: 'Personal Projects', desc: 'Developed and maintained personal websites' }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      minHeight: '100vh', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '-18px',
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 80%, rgba(229, 62, 62, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(66, 153, 225, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(72, 187, 120, 0.05) 0%, transparent 50%)
        `,
        zIndex: -1
      }} />

      {/* About Hero Section */}
      <section id="about">
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="about-content" style={{ animation: 'slideInLeft 1s ease-out' }}>
                <h1 className="display-2 fw-bold mb-4 lh-1">
                  <span style={{ 
                    display: 'block',
                    background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    About Me
                  </span>
                </h1>
                
                <h2 className="h3 mb-4" style={{ color: '#cbd5e0' }}>
                  HATEGEKIMANA Danny - Software Developer & Ethical Hacker - penetester
                </h2>
                
                <div className="mb-4" style={{ color: '#a0aec0', lineHeight: '1.8', fontSize: '16px' }}>
                  <p className="mb-3">
                    I began my journey into software through photography..a craft that taught me to appreciate storytelling, 
                    detail, and visual balance. That creative foundation naturally evolved into a passion for building bold digital experiences. 
                    Today,I’m not only a software developer, but also an ethical hacker and penetration tester. 
                    I thrive on the challenge of both creating and securing systems—whether 
                    I’m building something from scratch or breaking it apart to understand its weaknesses. 
                    The process of turning ideas into functional, 
                    secure realities keeps me constantly inspired.
                  </p>
                  
                  <p className="mb-0">
                   When I'm not coding, you'll find me exploring new technologies, performing penetration tests, 
                   contributing to open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
                
                {/* Skills */}
                <div className="skills-section">
                  <h5 className="mb-3" style={{ color: '#e53e3e', fontSize: '16px', fontWeight: 'bold' }}>
                    Technical Skills
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="badge"
                        style={{ 
                          backgroundColor: 'rgba(45, 55, 72, 0.8)', 
                          color: '#cbd5e0', 
                          padding: '8px 16px',
                          fontSize: '13px',
                          fontWeight: '500',
                          borderRadius: '20px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = 'rgba(229, 62, 62, 0.2)';
                          target.style.borderColor = '#e53e3e';
                          target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.backgroundColor = 'rgba(45, 55, 72, 0.8)';
                          target.style.borderColor = 'rgba(255,255,255,0.1)';
                          target.style.transform = 'translateY(0)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12 text-center order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="profile-section" style={{ animation: 'slideInRight 1s ease-out' }}>
                <div className="position-relative d-inline-block">
                  <div 
                    className="profile-circle mx-auto"
                    style={{
                      width: '350px',
                      height: '350px',
                      background: 'linear-gradient(135deg, #e53e3e, #ff6b6b, #4299e1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      animation: 'rotate 20s linear infinite',
                      boxShadow: '0 20px 40px rgba(229, 62, 62, 0.3)'
                    }}
                  >
                    <div 
                      className="profile-inner"
                      style={{
                        width: '320px',
                        height: '320px',
                        backgroundColor: '#1a202c',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #1a202c, #2d3748)',
                        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
                      }}
                    >
                      <img src="public/danny.jpg" alt="Profile" style={{ width: '95%', height: '95%',borderRadius: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="floating-elements">
                    <div style={{
                      position: 'absolute',
                      top: '15%',
                      right: '5%',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                      transform: 'rotate(45deg)',
                      borderRadius: '10px',
                      animation: 'float 3s ease-in-out infinite',
                      boxShadow: '0 10px 20px rgba(229, 62, 62, 0.3)'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '5%',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4299e1, #63b3ed)',
                      animation: 'float 4s ease-in-out infinite reverse',
                      boxShadow: '0 10px 20px rgba(66, 153, 225, 0.3)'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '-10%',
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #48bb78, #68d391)',
                      borderRadius: '50%',
                      animation: 'float 2.5s ease-in-out infinite',
                      boxShadow: '0 10px 20px rgba(72, 187, 120, 0.3)'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h3 className="mb-4" style={{ color: '#e53e3e', fontSize: '20px', fontWeight: 'bold' }}>
              My Achievements
            </h3>
            <div id="stats-section" className="row justify-content-center">
              {[
                { value: animatedStats.projects, suffix: '+', label: 'Completed\nProjects', color: '#48bb78' },
                { value: animatedStats.satisfaction, suffix: '%', label: 'Client\nSatisfaction', color: '#4299e1' },
                { value: animatedStats.experience, suffix: '+', label: 'Years of\nExperience', color: '#e53e3e' }
              ].map((stat, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
                  <div 
                    className="stat-card p-4"
                    style={{
                      background: 'rgba(45, 55, 72, 0.6)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = stat.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <h3 className="mb-2 fw-bold" style={{ 
                      color: stat.color, 
                      fontSize: '2.2rem'
                    }}>
                      {stat.value}<span style={{ color: '#e53e3e' }}>{stat.suffix}</span>
                    </h3>
                    <p style={{ 
                      color: '#a0aec0', 
                      fontSize: '13px',
                      lineHeight: '1.4',
                      margin: 0,
                      whiteSpace: 'pre-line'
                    }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h3 className="mb-4 text-center" style={{ color: '#e53e3e', fontSize: '24px', fontWeight: 'bold' }}>
              What I Offer
            </h3>
          </div>
          <div className="col-12">
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div 
                    className="service-card h-100"
                    style={{
                      background: 'rgba(45, 55, 72, 0.6)',
                      borderRadius: '20px',
                      padding: '25px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = `0 15px 30px ${service.color}40`;
                      e.currentTarget.style.borderColor = service.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="service-icon mx-auto mb-3"
                        style={{ 
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                          width: '70px', 
                          height: '70px', 
                          borderRadius: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '28px',
                          boxShadow: `0 8px 16px ${service.color}40`
                        }}
                      >
                        {service.icon}
                      </div>
                      <h5 className="mb-2 fw-bold" style={{ color: 'white' }}>{service.title}</h5>
                      <p className="mb-0" style={{ color: '#a0aec0', fontSize: '14px' }}>{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="mb-4" style={{ color: '#e53e3e', fontSize: '24px', fontWeight: 'bold' }}>
              Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item mb-4">
                  <div 
                    className="timeline-card p-4"
                    style={{
                      background: 'rgba(45, 55, 72, 0.6)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderLeft: `4px solid #e53e3e`
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="fw-bold mb-0" style={{ color: 'white' }}>{edu.degree}</h6>
                      <span 
                        className="badge"
                        style={{ 
                          backgroundColor: 'rgba(229, 62, 62, 0.2)',
                          color: '#e53e3e',
                          fontSize: '12px'
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                    <p className="mb-1" style={{ color: '#a0aec0', fontSize: '14px' }}>{edu.institution}</p>
                    <p className="mb-0" style={{ color: '#cbd5e0', fontSize: '13px' }}>{edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-6">
            <h3 className="mb-4" style={{ color: '#e53e3e', fontSize: '24px', fontWeight: 'bold' }}>
              Experience
            </h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item mb-4">
                  <div 
                    className="timeline-card p-4"
                    style={{
                      background: 'rgba(45, 55, 72, 0.6)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderLeft: `4px solid #4299e1`
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="fw-bold mb-0" style={{ color: 'white' }}>{exp.role}</h6>
                      <span 
                        className="badge"
                        style={{ 
                          backgroundColor: 'rgba(66, 153, 225, 0.2)',
                          color: '#4299e1',
                          fontSize: '12px'
                        }}
                      >
                        {exp.year}
                      </span>
                    </div>
                    <p className="mb-2" style={{ color: '#a0aec0', fontSize: '14px' }}>{exp.company}</p>
                    <p className="mb-0" style={{ color: '#cbd5e0', fontSize: '13px' }}>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Custom Styles */}
      

      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      {/* Bootstrap JS CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default About;