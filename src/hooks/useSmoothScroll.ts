import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const isScrolling = useRef(false);
  const sections = ['home', 'about', 'projects', 'contact'];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't prevent default - let natural scrolling happen
      if (isScrolling.current) return;

      // Get current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Find which section we're currently in
      let currentSectionIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(`${sections[i]}-section`);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionBottom - windowHeight / 2) {
            currentSectionIndex = i;
            break;
          }
        }
      }

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentSectionIndex + direction));

      // Only scroll if we're moving to a different section
      if (nextIndex !== currentSectionIndex) {
        isScrolling.current = true;
        
        const targetSection = document.getElementById(`${sections[nextIndex]}-section`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          
          // Reset scrolling flag after animation
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      let direction = 0;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        direction = 1;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        direction = -1;
      }

      if (direction !== 0) {
        e.preventDefault();
        
        // Get current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Find which section we're currently in
        let currentSectionIndex = 0;
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(`${sections[i]}-section`);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionBottom - windowHeight / 2) {
              currentSectionIndex = i;
              break;
            }
          }
        }

        const nextIndex = Math.max(0, Math.min(sections.length - 1, currentSectionIndex + direction));

        if (nextIndex !== currentSectionIndex) {
          isScrolling.current = true;
          
          const targetSection = document.getElementById(`${sections[nextIndex]}-section`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
              isScrolling.current = false;
            }, 1000);
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const startY = touch.clientY;
      
      const handleTouchEnd = (e: TouchEvent) => {
        const touch = e.changedTouches[0];
        const endY = touch.clientY;
        const diffY = startY - endY;
        
        if (Math.abs(diffY) > 50) { // Minimum swipe distance
          const direction = diffY > 0 ? 1 : -1;
          
          // Get current scroll position
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          
          // Find which section we're currently in
          let currentSectionIndex = 0;
          for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(`${sections[i]}-section`);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;
              
              if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionBottom - windowHeight / 2) {
                currentSectionIndex = i;
                break;
              }
            }
          }

          const nextIndex = Math.max(0, Math.min(sections.length - 1, currentSectionIndex + direction));

          if (nextIndex !== currentSectionIndex) {
            isScrolling.current = true;
            
            const targetSection = document.getElementById(`${sections[nextIndex]}-section`);
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
              
              setTimeout(() => {
                isScrolling.current = false;
              }, 1000);
            }
          }
        }
        
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchend', handleTouchEnd, { once: true });
    };

    // Add event listeners
    document.addEventListener('wheel', handleWheel);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);

    // Cleanup
    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return {};
};
