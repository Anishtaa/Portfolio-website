import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ContinuousConnectorProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  dashLength?: number;
  dashGap?: number;
  curveIntensity?: number;
  animationSpeed?: number;
  opacity?: number;
  sections?: string[];
}

const ContinuousConnector: React.FC<ContinuousConnectorProps> = ({
  className = '',
  color = 'rgba(188, 126, 222, 0.6)',
  strokeWidth = 2,
  dashLength = 8,
  dashGap = 6,
  curveIntensity = 0.3,
  animationSpeed = 20,
  opacity = 0.8,
  sections = ['#home-section', '#about-section', '#projects-section', '#contact-section']
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathData, setPathData] = useState<string>('');
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [sectionPositions, setSectionPositions] = useState<Array<{top: number, bottom: number}>>([]);

  const { scrollY } = useScroll();
  
  // Transform scroll position to path animation
  const pathLength = useTransform(scrollY, [0, document.body.scrollHeight], [0, 1]);

  // Generate continuous curved path through all sections
  const generateContinuousPath = (width: number, height: number) => {
    if (sectionPositions.length === 0) return '';
    
    const pathSegments: string[] = [];
    const totalHeight = height;
    
    sectionPositions.forEach((section, index) => {
      const startY = (section.top / totalHeight) * 100;
      const endY = (section.bottom / totalHeight) * 100;
      
      if (index === 0) {
        // First segment - start from top
        const control1X = width * 0.25;
        const control1Y = startY + (totalHeight * curveIntensity * 0.01);
        const control2X = width * 0.75;
        const control2Y = endY - (totalHeight * curveIntensity * 0.01);
        
        pathSegments.push(`M 0 ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, 100 ${endY}`);
      } else {
        // Subsequent segments - connect to previous
        const prevSection = sectionPositions[index - 1];
        const prevEndY = (prevSection.bottom / totalHeight) * 100;
        
        const control1X = width * 0.25;
        const control1Y = prevEndY + (totalHeight * curveIntensity * 0.01);
        const control2X = width * 0.75;
        const control2Y = endY - (totalHeight * curveIntensity * 0.01);
        
        pathSegments.push(`C ${control1X} ${control1Y}, ${control2X} ${control2Y}, 100 ${endY}`);
      }
    });
    
    return pathSegments.join(' ');
  };

  // Update section positions and path
  useEffect(() => {
    const updateSectionPositions = () => {
      const positions = sections.map(selector => {
        const element = document.querySelector(selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY
          };
        }
        return { top: 0, bottom: 0 };
      }).filter(pos => pos.top > 0);
      
      setSectionPositions(positions);
    };

    const updatePath = () => {
      if (containerRef.current && sectionPositions.length > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        const newPath = generateContinuousPath(rect.width, rect.height);
        setPathData(newPath);
        setContainerHeight(rect.height);
      }
    };

    // Initial update
    updateSectionPositions();
    
    // Update on scroll and resize
    const handleScroll = () => {
      updateSectionPositions();
      updatePath();
    };
    
    const handleResize = () => {
      updatePath();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial path update
    setTimeout(updatePath, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sections, curveIntensity, sectionPositions]);

  // Animated dash offset for flowing effect
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashOffset(prev => (prev + 1) % (dashLength + dashGap));
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [dashLength, dashGap, animationSpeed]);

  return (
    <div 
      ref={containerRef}
      className={`continuous-connector-container fixed inset-0 pointer-events-none z-10 ${className}`}
    >
      {/* Background glow effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${color.replace('0.6', '0.05')} 0%, transparent 70%)`,
          filter: 'blur(30px)',
          opacity: 0.4
        }}
      />
      
      {/* Main SVG connector */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 100 ${containerHeight || 100}`}
        preserveAspectRatio="none"
      >
        {/* Definitions */}
        <defs>
          {/* Glow filter */}
          <filter id="continuousConnectorGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient for the line */}
          <linearGradient id="continuousConnectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="25%" stopColor={color} stopOpacity="0.6" />
            <stop offset="50%" stopColor={color} stopOpacity="0.9" />
            <stop offset="75%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
          
          {/* Animated gradient for flowing effect */}
          <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Main connector path */}
        {pathData && (
          <>
            {/* Glow effect path */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="url(#continuousConnectorGradient)"
              strokeWidth={strokeWidth + 6}
              filter="url(#continuousConnectorGlow)"
              opacity={0.2}
              style={{ pathLength }}
              initial={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
            
            {/* Main dotted line */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="url(#flowingGradient)"
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength},${dashGap}`}
              strokeDashoffset={dashOffset}
              style={{ pathLength }}
              initial={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
            
            {/* Animated accent dots along the path */}
            {sectionPositions.map((section, index) => {
              const y = (section.top / containerHeight) * 100;
              const x = 50 + Math.sin(index * 0.5) * 20; // Vary x position slightly
              
              return (
                <motion.circle
                  key={index}
                  cx={x}
                  cy={y}
                  r={index % 2 === 0 ? 2 : 1.5}
                  fill={color}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.2, 0],
                    fill: [color, color.replace('0.6', '1'), color]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                />
              );
            })}
          </>
        )}
      </svg>

      {/* Floating particles for enhanced effect */}
      <div className="absolute inset-0">
        {/* Dynamic particles based on scroll position */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full"
            style={{ 
              backgroundColor: color,
              left: `${20 + (index * 10)}%`,
              top: `${15 + (index * 8)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 3 + index * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinuousConnector;
