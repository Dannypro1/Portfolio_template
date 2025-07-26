import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleItems(prev => [...new Set([...prev, index])]);
        }
      });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise web applications and managing a team of 5 developers. Architected scalable solutions serving 100k+ users.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led migration from monolith to microservices architecture',
        'Mentored junior developers and established coding standards',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'],
      color: '#e53e3e',
      icon: '🚀'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Co.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications for various clients including e-commerce platforms, corporate websites, and custom business solutions.',
      achievements: [
        'Delivered 25+ client projects on time and within budget',
        'Improved client satisfaction scores by 35%',
        'Built reusable component library used across projects',
        'Reduced code review time by implementing automated testing'
      ],
      technologies: ['JavaScript', 'Vue.js', 'PHP', 'MySQL', 'Tailwind CSS', 'Firebase'],
      color: '#4299e1',
      icon: '💻'
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Contract',
      description: 'Specialized in creating modern, responsive user interfaces for startup companies. Collaborated with design teams to implement pixel-perfect designs.',
      achievements: [
        'Converted 15+ Figma designs to production-ready code',
        'Improved website loading speed by 50% through optimization',
        'Implemented responsive design supporting all device sizes',
        'Established frontend development workflow and best practices'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Sass', 'Git'],
      color: '#48bb78',
      icon: '🎨'
    },
    {
      title: 'Junior Web Developer',
      company: 'Creative Media Lab',
      location: 'New York, NY',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey developing websites and learning modern web technologies. Worked on various small to medium-sized projects.',
      achievements: [
        'Successfully completed 20+ website projects',
        'Learned modern JavaScript frameworks and tools',
        'Collaborated with designers and project managers',
        'Maintained and updated existing client websites'
      ],
      technologies: ['HTML', 'CSS', 'jQuery', 'WordPress', 'PHP', 'MySQL'],
      color: '#9f7aea',
      icon: '🌱'
    },
    {
      title: 'Web Development Intern',
      company: 'Innovation Hub',
      location: 'Boston, MA',
      period: '2017 - 2018',
      type: 'Internship',
      description: 'Gained hands-on experience in web development while studying. Worked on internal tools and contributed to open-source projects.',
      achievements: [
        'Built internal dashboard for project management',
        'Contributed to 3 open-source JavaScript libraries',
        'Learned version control and collaborative development',
        'Received outstanding intern performance rating'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB'],
      color: '#f6ad55',
      icon: '📚'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '7+', color: '#e53e3e' },
    { label: 'Projects Completed', value: '120+', color: '#4299e1' },
    { label: 'Companies Worked', value: '5', color: '#48bb78' },
    { label: 'Team Members Led', value: '15+', color: '#9f7aea' }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      minHeight: '100vh', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 80%, rgba(229, 62, 62, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(66, 153, 225, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(72, 187, 120, 0.05) 0%, transparent 50%)
        `,
        zIndex: -1
      }} />

      <section className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4" style={{ 
            background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Professional Experience
          </h2>
          <div style={{
            height: '4px',
            background: 'linear-gradient(90deg, #e53e3e, #ff6b6b, #4299e1)',
            width: '120px',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }}></div>
          <p className="lead" style={{ color: '#a0aec0', maxWidth: '700px', margin: '0 auto' }}>
            My professional journey through various roles, companies, and the growth 
            that shaped me into the developer I am today.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="row mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div 
                className="stat-card text-center p-4"
                style={{
                  background: 'rgba(45, 55, 72, 0.6)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease',
                  animation: `slideInUp ${0.5 + index * 0.1}s ease-out`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = stat.color;
                  e.currentTarget.style.boxShadow = `0 15px 30px ${stat.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 className="mb-2 fw-bold" style={{ color: stat.color, fontSize: '2.5rem' }}>
                  {stat.value}
                </h3>
                <p className="mb-0" style={{ color: '#a0aec0', fontSize: '14px' }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="row">
          <div className="col-12">
            <div className="timeline-container position-relative">
              {/* Timeline Line */}
              <div 
                className="timeline-line d-none d-md-block"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '0',
                  bottom: '0',
                  width: '4px',
                  background: 'linear-gradient(180deg, #e53e3e, #4299e1, #48bb78, #9f7aea, #f6ad55)',
                  transform: 'translateX(-50%)',
                  borderRadius: '2px',
                  zIndex: 1
                }}
              ></div>

              {/* Mobile Timeline Line */}
              <div 
                className="timeline-line-mobile d-md-none"
                style={{
                  position: 'absolute',
                  left: '30px',
                  top: '0',
                  bottom: '0',
                  width: '4px',
                  background: 'linear-gradient(180deg, #e53e3e, #4299e1, #48bb78, #9f7aea, #f6ad55)',
                  borderRadius: '2px',
                  zIndex: 1
                }}
              ></div>

              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`timeline-item row mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                  data-index={index}
                  style={{
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease ${index * 0.1}s`
                  }}
                >
                  <div className="col-md-6">
                    <div 
                      className={`experience-card p-4 ${index % 2 === 0 ? 'ms-md-0 me-md-4' : 'ms-md-4 me-md-0'}`}
                      style={{
                        background: 'rgba(45, 55, 72, 0.6)',
                        borderRadius: '25px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(15px)',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        marginLeft: index % 2 === 0 ? '0' : '60px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.borderColor = exp.color;
                        e.currentTarget.style.boxShadow = `0 20px 40px ${exp.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Timeline Dot */}
                      <div 
                        className="timeline-dot d-none d-md-block"
                        style={{
                          position: 'absolute',
                          top: '30px',
                          [index % 2 === 0 ? 'right' : 'left']: '-47px',
                          width: '20px',
                          height: '20px',
                          background: exp.color,
                          borderRadius: '50%',
                          border: '4px solid #0a0a0a',
                          zIndex: 2,
                          boxShadow: `0 0 0 4px ${exp.color}40`
                        }}
                      ></div>

                      {/* Mobile Timeline Dot */}
                      <div 
                        className="timeline-dot-mobile d-md-none"
                        style={{
                          position: 'absolute',
                          top: '30px',
                          left: '-47px',
                          width: '20px',
                          height: '20px',
                          background: exp.color,
                          borderRadius: '50%',
                          border: '4px solid #0a0a0a',
                          zIndex: 2,
                          boxShadow: `0 0 0 4px ${exp.color}40`
                        }}
                      ></div>

                      {/* Experience Header */}
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center mb-2">
                            <span className="me-2" style={{ fontSize: '24px' }}>{exp.icon}</span>
                            <h4 className="mb-0 fw-bold" style={{ color: 'white' }}>
                              {exp.title}
                            </h4>
                          </div>
                          <h6 className="mb-1" style={{ color: exp.color, fontWeight: '600' }}>
                            {exp.company}
                          </h6>
                          <p className="mb-0" style={{ color: '#a0aec0', fontSize: '14px' }}>
                            📍 {exp.location}
                          </p>
                        </div>
                        <div className="text-end">
                          <span 
                            className="badge"
                            style={{
                              backgroundColor: `${exp.color}20`,
                              color: exp.color,
                              fontSize: '12px',
                              padding: '6px 12px',
                              marginBottom: '8px',
                              display: 'block'
                            }}
                          >
                            {exp.period}
                          </span>
                          <span 
                            className="badge"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              color: '#cbd5e0',
                              fontSize: '11px',
                              padding: '4px 8px'
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p style={{ color: '#a0aec0', lineHeight: '1.6', fontSize: '15px', marginBottom: '20px' }}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h6 className="mb-3" style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
                          Key Achievements:
                        </h6>
                        <ul className="list-unstyled">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="mb-2 d-flex align-items-start">
                              <span style={{ color: exp.color, marginRight: '8px', fontSize: '12px' }}>
                                ▶
                              </span>
                              <span style={{ color: '#cbd5e0', fontSize: '14px', lineHeight: '1.5' }}>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h6 className="mb-2" style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
                          Technologies Used:
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="badge"
                              style={{
                                backgroundColor: 'rgba(45, 55, 72, 0.8)',
                                color: '#cbd5e0',
                                fontSize: '12px',
                                padding: '4px 10px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '15px'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12">
            <div 
              className="cta-card text-center p-5"
              style={{
                background: 'rgba(45, 55, 72, 0.6)',
                borderRadius: '25px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(15px)'
              }}
            >
              <h4 className="mb-3" style={{ color: 'white' }}>
                Ready for the Next Challenge
              </h4>
              <p style={{ color: '#a0aec0', fontSize: '16px', maxWidth: '600px', margin: '0 auto 20px' }}>
                I'm always excited about new opportunities to create innovative solutions 
                and contribute to meaningful projects. Let's build something amazing together!
              </p>
              <button 
                className="btn px-4 py-3 fw-semibold"
                style={{
                  background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(229, 62, 62, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(229, 62, 62, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(229, 62, 62, 0.3)';
                }}
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .experience-card::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 0;
          height: 0;
          border-style: solid;
          transform: translateY(-50%);
        }
        
        .timeline-item:nth-child(odd) .experience-card::before {
          right: -15px;
          border-width: 15px 0 15px 15px;
          border-color: transparent transparent transparent rgba(45, 55, 72, 0.6);
        }
        
        .timeline-item:nth-child(even) .experience-card::before {
          left: -15px;
          border-width: 15px 15px 15px 0;
          border-color: transparent rgba(45, 55, 72, 0.6) transparent transparent;
        }
        
        @media (max-width: 768px) {
          .display-4 { font-size: 2.5rem !important; }
          .experience-card { margin-left: 60px !important; }
          .timeline-item { flex-direction: column !important; }
          .experience-card::before { display: none !important; }
          .stat-card { margin-bottom: 20px !important; }
        }
        
        @media (max-width: 576px) {
          .display-4 { font-size: 2rem !important; }
          .experience-card { padding: 20px !important; margin-left: 40px !important; }
          .timeline-line-mobile { left: 20px !important; }
          .timeline-dot-mobile { left: -37px !important; }
          .cta-card { padding: 30px 20px !important; }
        }
      `}</style>

      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
    </div>
  );
};

export default Experience;