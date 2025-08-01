import { useEffect, useState } from 'react';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [designModalOpen, setDesignModalOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(120deg); }
        66% { transform: translateY(10px) rotate(240deg); }
      }

      .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .project-card.visible {
        opacity: 1;
        transform: translateY(0);
      }

      @keyframes slideInUp {
        from {
          transform: translateY(10px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .scroll-top-btn {
        animation: slideInUp 0.3s ease-out;
      }

      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: calc(200px + 100%) 0; }
      }

      .design-preview {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        background-size: 200px 100%;
        animation: shimmer 2s infinite;
      }

      @keyframes modalFadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }

      .modal-content {
        animation: modalFadeIn 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      document.head.removeChild(style);
    };
  }, []);

  const designProjects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      preview: '/tekinova.png',
      description: 'Complete brand identity package including logos, color palettes, and typography systems.'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX',
      category: 'UI/UX Design',
      preview: '/ui.jpg',
      description: 'Modern mobile application interfaces with focus on user experience and accessibility.'
    },
    {
      id: 3,
      title: 'Social Media Graphics',
      category: 'Social Media',
      preview: '/gaspard.jpg',
      description: 'Engaging social media content designs for various platforms and campaigns.'
    },
    {
      id: 4,
      title: 'Web Design Mockups',
      category: 'Web Design',
      preview: '/web.png',
      description: 'Creative website layouts and interface designs for modern web applications.'
    }
  ];

  const projects = [
    {
      title: 'Car Everywhere',
      description: 'A comprehensive car rental platform featuring identity verification, seamless payment processing, and real-time communication for short-term rentals.',
      tech: ['Node.js', 'React', 'PostgreSQL', 'Express', 'JWT', 'Docker'],
      link: 'https://car-e-sigma.vercel.app/',
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #e53e3e, #fc8181)',
      icon: '🚗',
    },
    {
      title: 'CertChain',
      description: 'A secure blockchain-based certification system designed to verify, issue, and manage digital certificates with full transparency and immutability.',
      tech: ['Node.js', 'React', 'MongoDB', 'Solidity', 'Tailwind'],
      link: 'https://github.com/dannypro1',
      color: '#805ad5',
      gradient: 'linear-gradient(135deg, #805ad5, #9f7aea)',
      icon: '🔗'
    },
    {
      title: 'AgriChain',
      description: 'A smart agriculture supply chain platform that ensures transparency, traceability, and efficiency from farm to market using modern digital tools.',
      tech: ['Flask', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/dannypro1',
      color: '#38a169',
      gradient: 'linear-gradient(135deg, #38a169, #68d391)',
      icon: '🌾'
    },
    {
      title: 'Events Management System',
      description: 'Sophisticated platform for academic and social events featuring role-based access, intelligent booking systems, and real-time notifications.',
      tech: ['Laravel', 'Vue.js', 'Firebase'],
      link: '#',
      color: '#9f7aea',
      gradient: 'linear-gradient(135deg, #9f7aea, #b794f6)',
      icon: '🎭',
    },
    {
      title: 'Portfolio Platform',
      description: 'Personal portfolio platform showcasing professional experience, featured projects, skills, and contact information with responsive and modern UI.',
      tech: ['React', 'Tailwind CSS','bootstrap', 'Framer Motion', 'Node.js'],
      link: 'https://dannypro1.com',
      color: '#f6ad55',
      gradient: 'linear-gradient(135deg, #f6ad55, #fbb775)',
      icon: '💼',
    }
  ];

  const openDesignModal = (designId: number) => {
    setSelectedDesign(designId);
    setDesignModalOpen(true);
  };

  const closeDesignModal = () => {
    setDesignModalOpen(false);
    setSelectedDesign(null);
  };

  return (
      <div style={{
        backgroundColor: '#0a0a0a',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `
          radial-gradient(circle at 20% 80%, rgba(66, 153, 225, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(72, 187, 120, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(159, 122, 234, 0.05) 0%, transparent 50%)
        `,
          zIndex: 0
        }} />

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          {[...Array(20)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.3)`,
                borderRadius: '50%',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 10 + 's'
              }} />
          ))}
        </div>

        <section id="project" style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              backgroundColor: 'rgba(66, 153, 225, 0.1)',
              border: '1px solid rgba(66, 153, 225, 0.3)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              color: '#4299e1',
              fontWeight: '600',
              letterSpacing: '0.05em'
            }}>
              ✨ PORTFOLIO SHOWCASE
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #4299e1 0%, #48bb78 50%, #9f7aea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Featured Projects
            </h1>

            <p style={{
              color: '#a0aec0',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              Explore my journey through innovative solutions and impactful digital experiences
            </p>
          </div>

          {/* Graphics Design Preview Section */}
          <div style={{
            marginBottom: '4rem',
            padding: '2rem',
            background: 'rgba(26, 32, 44, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #4299e1, #9f7aea, #48bb78)',
            }} />

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{
                fontSize: '2rem',
                marginRight: '1rem',
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
              }}>
                🎨
              </div>
              <h2 style={{
                color: '#4299e1',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '700',
                margin: 0,
                letterSpacing: '-0.025em'
              }}>
                Graphics Design Portfolio
              </h2>
            </div>

            <p style={{
              color: '#e2e8f0',
              fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
              lineHeight: '1.7',
              marginBottom: '2rem',
              fontWeight: '400'
            }}>
              Showcasing creative visual solutions across branding, UI/UX, and digital media
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '1.5rem'
            }}>
              {designProjects.map((design
              ) => (
                  <div
                      key={design.id}
                      style={{
                        background: 'rgba(45, 55, 72, 0.6)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.transform = 'translateY(-5px)';
                        target.style.boxShadow = '0 10px 25px rgba(66, 153, 225, 0.2)';
                        target.style.borderColor = 'rgba(66, 153, 225, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.transform = 'translateY(0)';
                        target.style.boxShadow = 'none';
                        target.style.borderColor = 'rgba(255,255,255,0.1)';
                      }}
                      onClick={() => openDesignModal(design.id)}
                  >
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '75%',
                      overflow: 'hidden'
                    }}>
                      <img
                          src={design.preview}
                          alt={design.title}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                      />
                    </div>

                    <div style={{ padding: '1rem' }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'rgba(66, 153, 225, 0.2)',
                        color: '#4299e1',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        borderRadius: '12px',
                        marginBottom: '0.75rem'
                      }}>
                        {design.category}
                      </div>

                      <h3 style={{
                        color: '#e2e8f0',
                        fontSize: '1rem',
                        fontWeight: '600',
                        margin: '0 0 0.5rem 0',
                        lineHeight: '1.3'
                      }}>
                        {design.title}
                      </h3>

                      <p style={{
                        color: '#a0aec0',
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                        margin: 0
                      }}>
                        {design.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1rem, 2.5vw, 2rem)',
            padding: '0 1rem'
          }}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-card ${visibleItems.includes(index) ? 'visible' : ''}`}
                    data-index={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      width: '100%',
                      maxWidth: '100%',
                      background: 'rgba(26, 32, 44, 0.4)',
                      backdropFilter: 'blur(20px)',
                      border: hoveredCard === index
                          ? `2px solid ${project.color}40`
                          : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '24px',
                      padding: '2rem',
                      position: 'relative',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                      boxShadow: hoveredCard === index
                          ? `0 25px 50px -12px ${project.color}30, 0 0 0 1px ${project.color}20`
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden'
                    }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '4px',
                    background: project.gradient,
                    opacity: hoveredCard === index ? 1 : 0.7,
                    transition: 'opacity 0.3s ease'
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginRight: '1rem',
                      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                      userSelect: 'none'
                    }}>
                      {project.icon}
                    </div>
                    <h3 style={{
                      color: project.color,
                      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                      fontWeight: '700',
                      margin: 0,
                      letterSpacing: '-0.025em'
                    }}>
                      {project.title}
                    </h3>
                  </div>

                  <p style={{
                    color: '#e2e8f0',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                    fontWeight: '400'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '2rem'
                  }}>
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              color: '#cbd5e0',
                              padding: '0.5rem 1rem',
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease',
                              cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                              const target = e.target as HTMLElement;
                              target.style.backgroundColor = `${project.color}20`;
                              target.style.borderColor = `${project.color}40`;
                              target.style.color = project.color;
                              target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              const target = e.target as HTMLElement;
                              target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              target.style.borderColor = 'rgba(255,255,255,0.1)';
                              target.style.color = '#cbd5e0';
                              target.style.transform = 'translateY(0)';
                            }}
                        >
                    {tech}
                  </span>
                    ))}
                  </div>

                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: project.gradient,
                        color: 'white',
                        padding: 'clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.5rem)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: `0 4px 14px 0 ${project.color}40`
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.transform = 'translateY(-2px)';
                        target.style.boxShadow = `0 6px 20px 0 ${project.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.transform = 'translateY(0)';
                        target.style.boxShadow = `0 4px 14px 0 ${project.color}40`;
                      }}
                  >
                    Explore Project
                    <span style={{ fontSize: '1.1rem' }}>→</span>
                  </a>
                </div>
            ))}
          </div>

          {/* Design Modal */}
          {designModalOpen && selectedDesign && (
              <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
                   onClick={closeDesignModal}
              >
                <div className="modal-content" style={{
                  background: 'rgba(26, 32, 44, 0.95)',
                  borderRadius: '24px',
                  padding: '2rem',
                  maxWidth: '600px',
                  width: '100%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative'
                }}
                     onClick={(e) => e.stopPropagation()}
                >
                  <button
                      onClick={closeDesignModal}
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        color: '#e2e8f0',
                        fontSize: '1.25rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                      }}
                  >
                    ×
                  </button>

                  {(() => {
                    const design = designProjects.find(d => d.id === selectedDesign);
                    return design ? (
                        <>
                          <div style={{
                            width: '100%',
                            height: '300px',
                            backgroundColor: '#1a202c',
                            borderRadius: '12px',
                            marginBottom: '1.5rem',
                            overflow: 'hidden'
                          }}>
                            <img
                                src={design.preview}
                                alt={design.title}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                            />
                          </div>

                          <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(66, 153, 225, 0.2)',
                            color: '#4299e1',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            borderRadius: '12px',
                            marginBottom: '1rem'
                          }}>
                            {design.category}
                          </div>

                          <h2 style={{
                            color: '#e2e8f0',
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            marginBottom: '1rem'
                          }}>
                            {design.title}
                          </h2>

                          <p style={{
                            color: '#a0aec0',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                            marginBottom: '1.5rem'
                          }}>
                            {design.description}
                          </p>

                          <div style={{
                            padding: '1rem',
                            backgroundColor: 'rgba(66, 153, 225, 0.1)',
                            borderRadius: '12px',
                            border: '1px solid rgba(66, 153, 225, 0.2)'
                          }}>
                            <p style={{
                              color: '#4299e1',
                              fontSize: '0.875rem',
                              margin: 0,
                              fontWeight: '500'
                            }}>
                              💡 This is a sample design preview. Click to explore more creative works in my graphics design portfolio.
                            </p>
                          </div>
                        </>
                    ) : null;
                  })()}
                </div>
              </div>
          )}
        </section>
      </div>
  );
};

export default Projects;