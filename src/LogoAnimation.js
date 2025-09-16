import React, { useEffect, useRef } from 'react';

const LogoAnimation = ({ 
  src, 
  alt, 
  height, 
  className = "", 
  animationType = "float",
  style = {} 
}) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Add intersection observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(logo);

    // Mouse move effect for 3D tilt
    const handleMouseMove = (e) => {
      if (animationType === '3d') {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      }
    };

    const handleMouseLeave = () => {
      if (animationType === '3d') {
        logo.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      }
    };

    if (animationType === '3d') {
      logo.addEventListener('mousemove', handleMouseMove);
      logo.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      observer.disconnect();
      if (animationType === '3d') {
        logo.removeEventListener('mousemove', handleMouseMove);
        logo.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [animationType]);

  // Get animation classes based on type
  const getAnimationClasses = () => {
    const baseClasses = "logo-animate";
    const typeClasses = {
      'float': 'hero-logo',
      'slide': 'navbar-logo',
      'reveal': 'about-logo',
      'glow': 'footer-logo',
      '3d': 'logo-3d',
      'pulse': 'logo-pulse',
      'bounce': 'logo-bounce',
      'shine': 'logo-shine',
      'morph': 'logo-morph',
      'entrance': 'logo-entrance'
    };

    return `${baseClasses} ${typeClasses[animationType] || ''} ${className}`.trim();
  };

  // Get initial styles based on animation type
  const getInitialStyles = () => {
    const baseStyles = {
      opacity: 0,
      transform: 'translateY(20px) scale(0.9)',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      ...style
    };

    const typeStyles = {
      'float': { animation: 'heroLogoFloat 2s ease-in-out infinite alternate' },
      'slide': { animation: 'logoSlideIn 0.8s ease-out' },
      'reveal': { animation: 'aboutLogoReveal 1.2s ease-out' },
      'glow': { animation: 'footerLogoGlow 3s ease-in-out infinite' },
      '3d': { transformStyle: 'preserve-3d' },
      'pulse': { animation: 'logoPulse 2s ease-in-out infinite' },
      'bounce': { animation: 'logoBounce 1.5s ease-in-out infinite' },
      'shine': { position: 'relative', overflow: 'hidden' },
      'morph': { transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
      'entrance': { animation: 'logoEntrance 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
    };

    return { ...baseStyles, ...typeStyles[animationType] };
  };

  return (
    <img
      ref={logoRef}
      src={src}
      alt={alt}
      height={height}
      className={getAnimationClasses()}
      style={getInitialStyles()}
      onMouseEnter={(e) => {
        if (animationType === 'shine') {
          e.target.style.transform = 'scale(1.1) rotate(2deg)';
          e.target.style.filter = 'brightness(1.2) drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15))';
        }
      }}
      onMouseLeave={(e) => {
        if (animationType === 'shine') {
          e.target.style.transform = 'scale(1) rotate(0deg)';
          e.target.style.filter = 'brightness(1)';
        }
      }}
    />
  );
};

export default LogoAnimation;
