import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
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
    };
  }, []);

  const projects = [
    {
      title: 'Car Everywhere',
      description: 'A comprehensive car rental platform featuring identity verification, seamless payment processing, and real-time communication for short-term rentals.',
      tech: ['Node.js', 'React', 'PostgreSQL', 'JWT', 'Docker'],
      link: '#',
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #e53e3e, #fc8181)',
      icon: '🚗',
    },
    {
      title: 'UmutungoBox',
      description: 'Advanced asset management system enabling institutions to efficiently monitor inventory, track usage patterns, and optimize maintenance schedules.',
      tech: ['Django', 'React', 'SQLite', 'Tailwind'],
      link: '#',
      color: '#4299e1',
      gradient: 'linear-gradient(135deg, #4299e1, #63b3ed)',
      icon: '📦',
    },
    {
      title: 'Fleet Management System',
      description: 'Centralized digital solution transforming fleet operations with vehicle monitoring, cost analysis, and operational efficiency optimization.',
      tech: ['Flask', 'MySQL', 'Bootstrap'],
      link: '#',
      color: '#48bb78',
      gradient: 'linear-gradient(135deg, #48bb78, #68d391)',
      icon: '🚛',
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
      title: 'INYANGE ZA MARIYA Website',
      description: 'Dynamic choir platform for music publishing, concert promotion, and multimedia content streaming with integrated video management.',
      tech: ['WordPress', 'Elementor', 'YouTube API'],
      link: '#',
      color: '#f6ad55',
      gradient: 'linear-gradient(135deg, #f6ad55, #fbb775)',
      icon: '🎵',
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(66, 153, 225, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(72, 187, 120, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(159, 122, 234, 0.05) 0%, transparent 50%)
        `,
        zIndex: 0
      }} />
      
      {/* Floating Particles */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 10 + 's'
            }}
          />
        ))}
      </div>

      <section style={{ 
        position: 'relative', 
        zIndex: 2, 
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
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
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
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
            fontSize: '1.125rem',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Explore my journey through innovative solutions and impactful digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
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
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: project.gradient,
                opacity: hoveredCard === index ? 1 : 0.7,
                transition: 'opacity 0.3s ease'
              }} />

              {/* Icon and Title */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginRight: '1rem',
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                }}>
                  {project.icon}
                </div>
                <h3 style={{ 
                  color: project.color,
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: 0,
                  letterSpacing: '-0.025em'
                }}>
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ 
                color: '#e2e8f0', 
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontWeight: '400'
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
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
                      e.target.style.backgroundColor = `${project.color}20`;
                      e.target.style.borderColor = `${project.color}40`;
                      e.target.style.color = project.color;
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.color = '#cbd5e0';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
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
                  padding: '0.875rem 1.5rem',
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
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 6px 20px 0 ${project.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = `0 4px 14px 0 ${project.color}40`;
                }}
              >
                Explore Project
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
          }
        }

        .project-card {
          opacity: 0;
          transform: translateY(40px);
        }

        .project-card.visible {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        .project-card:nth-child(5) { animation-delay: 0.5s; }

        @media (max-width: 768px) {
          .project-card {
            margin: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;