import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
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

        .whatsapp-btn {
          animation: slideIn 0.5s ease-out, float 3s ease-in-out infinite;
        }

        .whatsapp-btn.pulse {
          animation: slideIn 0.5s ease-out, float 3s ease-in-out infinite, pulse 1s ease-out;
        }
      `}</style>

      <a
        href="https://wa.me/250788123456" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-btn ${isPulse ? 'pulse' : ''}`}
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25d366',
          color: 'white',
          borderRadius: '50%',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 15px rgba(0,0,0,0.3)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          border: '3px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.transform = 'scale(1.15) rotate(10deg)';
          target.style.boxShadow = '0 5px 30px rgba(37, 211, 102, 0.8)';
          target.style.backgroundColor = '#20ba5a';
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.transform = 'scale(1)';
          target.style.boxShadow = '2px 2px 15px rgba(0,0,0,0.3)';
          target.style.backgroundColor = '#25d366';
        }}
        title="Chat on WhatsApp"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="white"
          style={{
            transition: 'transform 0.3s ease'
          }}
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.825.737 5.481 2.027 7.785L.007 32l8.37-2.191A15.926 15.926 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.515 0-4.895-.685-6.936-1.876l-.497-.295-5.156 1.35 1.376-5.027-.325-.515A13.402 13.402 0 012.545 16C2.545 8.558 8.558 2.545 16 2.545S29.455 8.558 29.455 16 23.442 29.455 16 29.455z"/>
          <path d="M23.205 19.387c-.387-.194-2.291-1.13-2.646-1.259-.355-.129-.614-.194-.873.194-.258.387-1.002 1.259-1.228 1.517-.226.259-.452.291-.84.097-.387-.194-1.634-.603-3.111-1.92-1.15-1.025-1.927-2.291-2.153-2.678-.226-.387-.024-.597.17-.79.174-.174.387-.452.581-.678.194-.226.258-.387.387-.646.129-.258.065-.484-.032-.678-.097-.194-.873-2.104-1.196-2.881-.314-.756-.633-.654-.873-.666-.226-.011-.484-.013-.743-.013s-.678.097-1.033.484c-.355.387-1.357 1.325-1.357 3.234s1.389 3.75 1.583 4.008c.194.259 2.735 4.176 6.627 5.856.926.399 1.649.637 2.212.816.929.295 1.774.253 2.443.153.745-.111 2.291-.937 2.614-1.841.323-.904.323-1.679.226-1.841-.097-.162-.355-.258-.743-.452z"/>
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
      </a>
    </>
  );
};

export default WhatsAppButton;