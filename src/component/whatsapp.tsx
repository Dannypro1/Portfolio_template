import { useState, useEffect } from 'react';

const SwipeContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPulse, setIsPulse] = useState(true);

  useEffect(() => {
    // Pulse animation interval
    const pulseInterval = setInterval(() => {
      setIsPulse(true);
      setTimeout(() => setIsPulse(false), 1000);
    }, 3000);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-btn {
          animation: slideIn 0.5s ease-out, float 3s ease-in-out infinite;
        }

        .contact-btn.pulse {
          animation: slideIn 0.5s ease-out, float 3s ease-in-out infinite, pulse 1s ease-out;
        }
      `}</style>

      {/* Container */}
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {/* Email Button - slides in from left */}
        <a
          href="mailto:himanadanny@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: isExpanded ? '60px' : '0',
            height: '60px',
            backgroundColor: '#4299e1',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            textDecoration: 'none',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
            boxShadow: '2px 2px 15px rgba(0,0,0,0.3)',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = 'scale(1.15) rotate(10deg)';
            target.style.boxShadow = '0 5px 30px rgba(66, 153, 225, 0.8)';
            target.style.backgroundColor = '#3182ce';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = 'scale(1) rotate(0deg)';
            target.style.boxShadow = '2px 2px 15px rgba(0,0,0,0.3)';
            target.style.backgroundColor = '#4299e1';
          }}
          title="Send Email"
        >
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="white"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>

        {/* WhatsApp Button - main button */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`contact-btn ${isPulse ? 'pulse' : ''}`}
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#25d366',
              color: 'white',
              borderRadius: '50%',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '2px 2px 15px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.15) rotate(10deg)';
              target.style.boxShadow = '0 5px 30px rgba(37, 211, 102, 0.8)';
              target.style.backgroundColor = '#20ba5a';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1) rotate(0deg)';
              target.style.boxShadow = '2px 2px 15px rgba(0,0,0,0.3)';
              target.style.backgroundColor = '#25d366';
            }}
            title={isExpanded ? "Close menu" : "Open contact menu"}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="white"
              style={{
                transition: 'transform 0.3s ease',
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              {isExpanded ? (
                // X icon when expanded
                <path d="M8 8 L24 24 M24 8 L8 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                // WhatsApp icon when collapsed
                <>
                  <path d="M16 0C7.164 0 0 7.163 0 16c0 2.825.737 5.481 2.027 7.785L.007 32l8.37-2.191A15.926 15.926 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.515 0-4.895-.685-6.936-1.876l-.497-.295-5.156 1.35 1.376-5.027-.325-.515A13.402 13.402 0 012.545 16C2.545 8.558 8.558 2.545 16 2.545S29.455 8.558 29.455 16 23.442 29.455 16 29.455z"/>
                  <path d="M23.205 19.387c-.387-.194-2.291-1.13-2.646-1.259-.355-.129-.614-.194-.873.194-.258.387-1.002 1.259-1.228 1.517-.226.259-.452.291-.84.097-.387-.194-1.634-.603-3.111-1.92-1.15-1.025-1.927-2.291-2.153-2.678-.226-.387-.024-.597.17-.79.174-.174.387-.452.581-.678.194-.226.258-.387.387-.646.129-.258.065-.484-.032-.678-.097-.194-.873-2.104-1.196-2.881-.314-.756-.633-.654-.873-.666-.226-.011-.484-.013-.743-.013s-.678.097-1.033.484c-.355.387-1.357 1.325-1.357 3.234s1.389 3.75 1.583 4.008c.194.259 2.735 4.176 6.627 5.856.926.399 1.649.637 2.212.816.929.295 1.774.253 2.443.153.745-.111 2.291-.937 2.614-1.841.323-.904.323-1.679.226-1.841-.097-.162-.355-.258-.743-.452z"/>
                </>
              )}
            </svg>

            {/* Ripple effect circles */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid rgba(37, 211, 102, 0.5)',
                animation: 'pulse 2s ease-out infinite',
                animationDelay: '0s',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid rgba(37, 211, 102, 0.5)',
                animation: 'pulse 2s ease-out infinite',
                animationDelay: '1s',
                pointerEvents: 'none'
              }}
            />
          </button>

          {/* WhatsApp direct link overlay (visible when expanded) */}
          {isExpanded && (
            <a
              href="https://wa.me/250790951505"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                zIndex: 3,
                cursor: 'pointer'
              }}
              title="Chat on WhatsApp"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SwipeContactButton;