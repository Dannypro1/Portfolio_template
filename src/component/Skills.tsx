import  { useState, useEffect } from 'react';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      });
    });

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: '#e53e3e',
      icon: '🎨',
      skills: [
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'React', level: 75, icon: '⚛️' },
        { name: 'TypeScript', level: 70, icon: '📘' },
        { name: 'HTML5', level: 98, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 65, icon: '💨' },
        { name: 'Vue.js', level: 65, icon: '💚' },
        { name: 'Sass/SCSS', level: 82, icon: '🎯' }
      ]
    },
    {
      title: 'Backend Development',
      color: '#4299e1',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚀' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'GraphQL', level: 60, icon: '🔗' },
        { name: 'REST APIs', level: 70, icon: '🔌' },
        { name: 'Microservices', level: 78, icon: '🏗️' }
      ]
    },
    {
      title: 'DevOps & Tools',
      color: '#48bb78',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: '📝' },
        { name: 'Docker', level: 80, icon: '🐳' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'CI/CD', level: 78, icon: '🔄' },
        { name: 'Linux', level: 90, icon: '🐧' },
        { name: 'Webpack', level: 85, icon: '📦' },
        { name: 'Jest/Testing', level: 88, icon: '🧪' },
        { name: 'Firebase', level: 80, icon: '🔥' }
      ]
    },
    {
      title: 'Design & UI/UX',
      color: '#9f7aea',
      icon: '🎭',
      skills: [
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'Adobe XD', level: 78, icon: '🖌️' },
        { name: 'Photoshop', level: 90, icon: '📸' },
        { name: 'Responsive Design', level: 82, icon: '📱' },
        { name: 'User Research', level: 70, icon: '🔍' },
        { name: 'Prototyping', level: 80, icon: '⚡' },
        { name: 'Wireframing', level: 82, icon: '📐' },
        { name: 'Design Systems', level: 78, icon: '🧩' }
      ]
    }
  ];

  const getSkillLevel = (level:number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelColor = (level:number) => {
    if (level >= 90) return '#48bb78';
    if (level >= 80) return '#4299e1';
    if (level >= 70) return '#f6ad55';
    return '#e53e3e';
  };

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

      <section id="skill" className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4" style={{ 
            background: 'linear-gradient(135deg, #e53e3e, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            My Skills
          </h2>
          <div style={{
            height: '4px',
            background: 'linear-gradient(90deg, #e53e3e, #ff6b6b, #4299e1)',
            width: '100px',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }}></div>
          <p className="lead" style={{ color: '#a0aec0', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="row g-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-6 col-md-12">
              <div 
                className="skill-category h-100"
                style={{
                  background: 'rgba(45, 55, 72, 0.6)',
                  borderRadius: '25px',
                  padding: '30px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease',
                  animation: `slideInUp ${0.5 + categoryIndex * 0.1}s ease-out`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = `0 15px 30px ${category.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Category Header */}
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="category-icon me-3"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}, ${category.color}cc)`,
                      width: '50px',
                      height: '50px',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      boxShadow: `0 8px 16px ${category.color}40`
                    }}
                  >
                    {category.icon}
                  </div>
                  <h4 className="mb-0 fw-bold" style={{ color: 'white' }}>
                    {category.title}
                  </h4>
                </div>

                {/* Skills List */}
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <span className="me-2" style={{ fontSize: '16px' }}>{skill.icon}</span>
                          <span className="fw-semibold" style={{ color: 'white', fontSize: '15px' }}>
                            {skill.name}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span 
                            className="badge me-2"
                            style={{
                              backgroundColor: `${getSkillLevelColor(skill.level)}20`,
                              color: getSkillLevelColor(skill.level),
                              fontSize: '11px',
                              padding: '4px 8px'
                            }}
                          >
                            {getSkillLevel(skill.level)}
                          </span>
                          <span style={{ color: '#a0aec0', fontSize: '13px', minWidth: '35px' }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div 
                        className="progress-container"
                        style={{
                          height: '6px',
                          backgroundColor: 'rgba(45, 55, 72, 0.8)',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <div 
                          className="progress-bar"
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                            borderRadius: '10px',
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transition: `width 1.5s ease-out ${skillIndex * 0.1}s`,
                            boxShadow: `0 0 10px ${category.color}60`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div 
              className="summary-card text-center p-5"
              style={{
                background: 'rgba(45, 55, 72, 0.6)',
                borderRadius: '25px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(15px)'
              }}
            >
              <h4 className="mb-3" style={{ color: 'white' }}>
                Continuous Learning Journey
              </h4>
              <p style={{ color: '#a0aec0', fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                Technology evolves rapidly, and so do I. I'm constantly updating my skills, 
                learning new frameworks, and staying current with industry best practices. 
                My passion for technology drives me to explore emerging trends and implement 
                innovative solutions in my projects.
              </p>
              <div className="mt-4">
                <div className="row justify-content-center">
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-stat">
                      <h5 style={{ color: '#e53e3e', fontSize: '2rem', marginBottom: '5px' }}>32+</h5>
                      <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0 }}>Technologies</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-stat">
                      <h5 style={{ color: '#4299e1', fontSize: '2rem', marginBottom: '5px' }}>5+</h5>
                      <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0 }}>Years Experience</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-stat">
                      <h5 style={{ color: '#48bb78', fontSize: '2rem', marginBottom: '5px' }}>4</h5>
                      <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0 }}>Main Categories</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="summary-stat">
                      <h5 style={{ color: '#9f7aea', fontSize: '2rem', marginBottom: '5px' }}>100+</h5>
                      <p style={{ color: '#a0aec0', fontSize: '14px', margin: 0 }}>Projects Built</p>
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default Skills;