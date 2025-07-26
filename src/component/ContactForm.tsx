import React, { useState, useEffect } from 'react';
import { Phone, Mail, Linkedin, Send, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      });
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const contactMethods = [
    {
      title: 'WhatsApp',
      description: 'Message me instantly',
      icon: <Phone className="w-8 h-8" />,
      href: 'https://wa.me/250790951505',
      color: '#25d366',
      bgGradient: 'linear-gradient(135deg, #25d366, #128c7e)',
      emoji: '💬'
    },
    {
      title: 'Email',
      description: 'Professional inquiries',
      icon: <Mail className="w-8 h-8" />,
      href: 'mailto:himanadanny@gmail.com',
      color: '#ea4335',
      bgGradient: 'linear-gradient(135deg, #ea4335, #fbbc04)',
      emoji: '📧'
    },
    {
      title: 'LinkedIn',
      description: 'Professional network',
      icon: <Linkedin className="w-8 h-8" />,
      href: 'https://www.linkedin.com/in/hategekimana-danny-17b227377/',
      color: '#0077b5',
      bgGradient: 'linear-gradient(135deg, #0077b5, #00a0dc)',
      emoji: '💼'
    },
    {
      title: 'GitHub',
      description: 'Quick messaging',
      icon: <Send className="w-8 h-8" />,
      href: 'https://github.com/dannypro1',
      color: '#0088cc',
      bgGradient: 'linear-gradient(135deg, #0088cc, #229ed9)',
      emoji: '🐱'
    },
    {
      title: 'Location',
      description: 'Kigali, Rwanda',
      icon: <MapPin className="w-8 h-8" />,
      href: 'https://goo.gl/maps/your-location-linkhttps://share.google/Pg85lfZ2BEWnDvcJ3',
      color: '#e53e3e',
      bgGradient: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
      emoji: '📍'
    },
    {
      title: 'Schedule Call',
      description: 'Book a meeting',
      icon: <MessageCircle className="w-8 h-8" />,
      href: 'https://calendly.com/yourusername',
      color: '#9f7aea',
      bgGradient: 'linear-gradient(135deg, #9f7aea, #b794f6)',
      emoji: '📅'
    }
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
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 80%, rgba(229, 62, 62, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(66, 153, 225, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(72, 187, 120, 0.05) 0%, transparent 50%)
        `,
        zIndex: 0
      }} />

      <section id="contact" className="container py-5 position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <div 
              style={{
                background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                width: '60px',
                height: '60px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginRight: '15px',
                boxShadow: '0 10px 30px rgba(229, 62, 62, 0.3)',
                animation: animateCards ? 'bounceIn 0.8s ease-out' : 'none'
              }}
            >
              📞
            </div>
            <h2 className="display-4 fw-bold mb-0" style={{ 
              background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Let's Connect
            </h2>
          </div>
          
          <div style={{
            height: '4px',
            background: 'linear-gradient(90deg, #e53e3e, #ff6b6b, #4299e1)',
            width: '120px',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }}></div>
          
          <p className="lead" style={{ 
            color: '#a0aec0', 
            maxWidth: '700px', 
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Ready to bring your ideas to life? I'm always excited to discuss new projects, 
            creative opportunities, or just have a friendly chat about technology and innovation.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="row g-4 mb-5">
          {contactMethods.map((method, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card text-decoration-none d-block h-100"
                style={{
                  background: 'rgba(45, 55, 72, 0.6)',
                  borderRadius: '25px',
                  padding: '30px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: animateCards ? `slideInUp ${0.6 + index * 0.1}s ease-out` : 'none',
                  transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  borderColor: hoveredCard === index ? method.color : 'rgba(255,255,255,0.1)',
                  boxShadow: hoveredCard === index ? `0 20px 40px ${method.color}30` : '0 5px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Content */}
                <div className="d-flex align-items-start">
                  {/* Icon Container */}
                  <div 
                    className="contact-icon me-4"
                    style={{
                      background: hoveredCard === index ? method.bgGradient : 'rgba(45, 55, 72, 0.8)',
                      width: '70px',
                      height: '70px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: hoveredCard === index ? 'white' : method.color,
                      transition: 'all 0.3s ease',
                      boxShadow: hoveredCard === index ? `0 10px 25px ${method.color}40` : 'none',
                      transform: hoveredCard === index ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                    }}
                  >
                    {React.cloneElement(method.icon, {
                      style: { 
                        filter: hoveredCard === index ? 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'none'
                      }
                    })}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center mb-2">
                      <h4 
                        className="mb-0 fw-bold"
                        style={{ 
                          color: hoveredCard === index ? method.color : 'white',
                          fontSize: '1.2rem',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {method.title}
                      </h4>
                      <span className="ms-2" style={{ fontSize: '1.2rem' }}>
                        {method.emoji}
                      </span>
                    </div>
                    
                    <p 
                      className="mb-0"
                      style={{ 
                        color: hoveredCard === index ? '#e2e8f0' : '#a0aec0',
                        fontSize: '0.95rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {method.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div 
                      className="d-flex align-items-center mt-2"
                      style={{
                        opacity: hoveredCard === index ? 1 : 0,
                        transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span style={{ color: method.color, fontSize: '0.85rem', fontWeight: '500' }}>
                        Connect now
                      </span>
                      <ExternalLink 
                        className="ms-1" 
                        style={{ width: '14px', height: '14px', color: method.color }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: `radial-gradient(circle, ${method.color}10 0%, transparent 70%)`,
                    borderRadius: '0 25px 0 0',
                    opacity: hoveredCard === index ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="row">
          <div className="col-12">
            <div 
              className="cta-section text-center p-5"
              style={{
                background: 'rgba(45, 55, 72, 0.6)',
                borderRadius: '25px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* CTA Background Effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `
                  radial-gradient(circle, rgba(229, 62, 62, 0.03) 0%, transparent 50%),
                  radial-gradient(circle, rgba(66, 153, 225, 0.03) 0%, transparent 50%)
                `,
                animation: 'rotate 20s linear infinite'
              }} />

              <div className="position-relative">
                <h3 className="mb-3 fw-bold" style={{ color: 'white', fontSize: '1.8rem' }}>
                  Ready to Start Something Amazing?
                </h3>
                <p style={{ color: '#a0aec0', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Whether it's a new project, collaboration opportunity, or just a tech discussion, 
                  I'm here and ready to connect. Let's turn your vision into reality!
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href="mailto:himanadanny@gmail.com"
                    className="btn px-4 py-2 fw-semibold text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(229, 62, 62, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(229, 62, 62, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(229, 62, 62, 0.3)';
                    }}
                  >
                    <Mail className="me-2" style={{ width: '18px', height: '18px' }} />
                    Send Email
                  </a>
                  
                  <a
                    href="https://wa.me/250790951505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-4 py-2 fw-semibold text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #25d366, #128c7e)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    <Phone className="me-2" style={{ width: '18px', height: '18px' }} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes bounceIn {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .contact-card {
          position: relative;
          cursor: pointer;
        }
        
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 25px;
          padding: 1px;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .contact-card:hover::before {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .display-4 { font-size: 2.5rem !important; }
          .contact-card { padding: 20px !important; }
          .contact-icon { width: 60px !important; height: 60px !important; }
          .cta-section { padding: 30px 20px !important; }
        }
        
        @media (max-width: 576px) {
          .display-4 { font-size: 2rem !important; }
          .contact-card { padding: 15px !important; }
          .contact-icon { width: 50px !important; height: 50px !important; margin-right: 15px !important; }
          .d-flex.flex-wrap.gap-3 { flex-direction: column !important; align-items: center !important; }
          .btn { width: 200px !important; }
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

export default Contact;