// Logo Animation Utility
export const applyLogoAnimations = () => {
  // Find all logo images
  const logos = document.querySelectorAll('img[src*="logo"]');
  
  logos.forEach((logo, index) => {
    // Add base animation classes
    logo.classList.add('logo-animate');
    
    // Determine animation type based on context
    let animationType = 'entrance';
    
    if (logo.src.includes('navbar') || logo.closest('.navbar')) {
      animationType = 'slide';
      logo.classList.add('navbar-logo', 'logo-shine');
    } else if (logo.src.includes('hero') || logo.closest('.hero-section')) {
      animationType = 'float';
      logo.classList.add('hero-logo', 'logo-3d');
    } else if (logo.src.includes('about') || logo.closest('.about-section')) {
      animationType = 'reveal';
      logo.classList.add('about-logo', 'logo-morph');
    } else if (logo.src.includes('footer') || logo.closest('.footer')) {
      animationType = 'glow';
      logo.classList.add('footer-logo', 'logo-pulse');
    }
    
    // Add entrance animation with delay
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(20px) scale(0.9)';
    logo.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Trigger animation after a delay
    setTimeout(() => {
      logo.style.opacity = '1';
      logo.style.transform = 'translateY(0) scale(1)';
    }, index * 200);
    
    // Add hover effects
    logo.addEventListener('mouseenter', () => {
      logo.style.transform = 'scale(1.1) rotate(2deg)';
      logo.style.filter = 'brightness(1.2) drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15))';
    });
    
    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'scale(1) rotate(0deg)';
      logo.style.filter = 'brightness(1)';
    });
    
    // Add 3D tilt effect for hero logos
    if (animationType === 'float') {
      logo.addEventListener('mousemove', (e) => {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      
      logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    }
  });
};

// Apply animations when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLogoAnimations);
  } else {
    applyLogoAnimations();
  }
}
