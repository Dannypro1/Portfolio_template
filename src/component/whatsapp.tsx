import { useState, useEffect } from 'react';
import { MessageCircle, Mail, X } from 'lucide-react';

const WhatsAppButton = () => {
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
          <Mail size={28} strokeWidth={2} />
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
            <div
              style={{
                transition: 'transform 0.3s ease',
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isExpanded ? (
                <X size={32} strokeWidth={2.5} />
              ) : (
                <MessageCircle size={32} strokeWidth={2} />
              )}
            </div>

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

export default WhatsAppButton;