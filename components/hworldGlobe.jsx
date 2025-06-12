import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Globe from 'globe.gl';

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

const HWorldGlobe = () => {
  const globeEl = useRef(null);
  const globeInstance = useRef(null);
  const animationFrame = useRef(null);
  const resizeObserver = useRef(null);
  const intersectionObserver = useRef(null);
  
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [error, setError] = useState(null);

  // Enhanced sectors data with proper distribution and slower speeds
  const sectors = [
    { 
      name: 'Adhoc Services', 
      orbitType: 'elliptical',
      direction: 'clockwise',
      layer: 'outer',
      speed: 0.7,
      eccentricity: 0.7,
      tilt: 10,
      phaseOffset: 90
    },
    { 
      name: 'Construction', 
      orbitType: 'circular',
      direction: 'counterclockwise',
      layer: 'middle',
      speed: 1.9,
      eccentricity: 0.9,
      tilt: -10,
      phaseOffset: 60
    },
    { 
      name: 'Marine', 
      orbitType: 'figure8',
      direction: 'clockwise',
      layer: 'inner',
      speed: 0.5,
      eccentricity: 0.5,
      tilt: 25,
      phaseOffset: 180
    },
    { 
      name: 'Deals', 
      orbitType: 'elliptical',
      direction: 'counterclockwise',
      layer: 'outer',
      speed: 0.8,
      eccentricity: 0.6,
      tilt: -20,
      phaseOffset: 210
    },
    { 
      name: 'Project Planning', 
      orbitType: 'circular',
      direction: 'clockwise',
      layer: 'middle',
      speed: 0.6,
      eccentricity: 0.8,
      tilt: 5,
      phaseOffset: 240
    },
    { 
      name: 'Forensics', 
      orbitType: 'elliptical',
      direction: 'counterclockwise',
      layer: 'inner',
      speed: 1.0,
      eccentricity: 0.4,
      tilt: 30,
      phaseOffset: 350
    }
  ];

  // Responsive configuration with globe-relative orbital layers
  const config = useMemo(() => {
    const { width, height } = dimensions;
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;
    const isDesktop = width >= 1024;

    // Calculate the actual globe size (assuming globe takes ~70% of container)
    const containerSize = Math.min(width, height);
    const globeSize = containerSize * 0.7; // Estimated globe visual size
    const globeRadiusInPixels = globeSize / 2;
    
    // Convert to percentage of container for positioning
    const globeRadiusPercent = (globeRadiusInPixels / Math.min(width, height)) * 100;

    if (isMobile) {
      return {
        // Orbital layers relative to globe size (not container)
        layers: {
          inner: globeRadiusPercent * 0.6,    // 60% of globe radius
          middle: globeRadiusPercent * 0.85,  // 85% of globe radius  
          outer: globeRadiusPercent * 1.1     // 110% of globe radius
        },
        // Tighter boundaries for mobile
        boundaries: {
          minX: 15,
          maxX: 85,
          minY: 15,
          maxY: 85
        },
        labelSize: 'text-xs',
        padding: 'px-3 py-1.5',
        rotationSpeed: 0.015,
        autoRotateSpeed: 0.3,
        baseOrbitSpeed: 0.3
      };
    } else if (isTablet) {
      return {
        layers: {
          inner: globeRadiusPercent * 0.7,    // 70% of globe radius
          middle: globeRadiusPercent * 0.95,  // 95% of globe radius
          outer: globeRadiusPercent * 1.2     // 120% of globe radius
        },
        boundaries: {
          minX: 12,
          maxX: 88,
          minY: 12,
          maxY: 88
        },
        labelSize: 'text-sm',
        padding: 'px-4 py-2',
        rotationSpeed: 0.02,
        autoRotateSpeed: 0.4,
        baseOrbitSpeed: 0.4
      };
    } else {
      return {
        layers: {
          inner: globeRadiusPercent * 0.8,    // 80% of globe radius
          middle: globeRadiusPercent * 1.05,  // 105% of globe radius
          outer: globeRadiusPercent * 1.3     // 130% of globe radius
        },
        boundaries: {
          minX: 8,
          maxX: 92,
          minY: 8,
          maxY: 92
        },
        labelSize: 'text-base',
        padding: 'px-4 py-2',
        rotationSpeed: 0.025,
        autoRotateSpeed: 0.5,
        baseOrbitSpeed: 0.5
      };
    }
  }, [dimensions]);

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Initialize globe instance
  const initializeGlobe = useCallback(() => {
    if (!globeEl.current || !dimensions.width || !dimensions.height) return;

    try {
      setError(null);
      const { width, height } = dimensions;
      
      // Create globe instance only once
      if (!globeInstance.current) {
        globeInstance.current = Globe()(globeEl.current);
      }

      const globe = globeInstance.current;
      
      globe
        .width(width)
        .height(height)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundColor('rgba(0, 0, 0, 0)')
        .showAtmosphere(true)
        .atmosphereColor('#FFAD4A')
        .atmosphereAltitude(0.25)
        .pointOfView({ lat: 0, lng: 0, altitude: 1.5 });

      // Configure camera
      const camera = globe.camera();
      camera.fov = Math.min(75, 60 + (width / 100));
      camera.updateProjectionMatrix();

      // Configure controls
      const controls = globe.controls();
      controls.autoRotate = !prefersReducedMotion;
      controls.autoRotateSpeed = config.autoRotateSpeed;
      controls.enableZoom = false;
      controls.enablePan = false;

      // Configure renderer
      const renderer = globe.renderer();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      setIsLoading(false);
    } catch (err) {
      console.error('Globe initialization error:', err);
      setError('Failed to load 3D globe');
      setIsLoading(false);
    }
  }, [dimensions, config.autoRotateSpeed, prefersReducedMotion]);

  // Handle resize with ResizeObserver
  useEffect(() => {
    if (!globeEl.current) return;

    resizeObserver.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    resizeObserver.current.observe(globeEl.current);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, []);

  // Handle visibility with IntersectionObserver
  useEffect(() => {
    if (!globeEl.current) return;

    intersectionObserver.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    intersectionObserver.current.observe(globeEl.current);

    return () => {
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    };
  }, []);

  // Initialize globe when dimensions are available
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initializeGlobe();
    }
  }, [dimensions, initializeGlobe]);

  // Animation loop for rotation tracking
  useEffect(() => {
    if (prefersReducedMotion || !isVisible) return;

    let lastTime = 0;
    const animate = () => {
      const currentTime = Date.now();
      if (lastTime !== 0) {
        const delta = currentTime - lastTime;
        setRotation(prev => (prev + config.rotationSpeed * delta / 16) % 360);
      }
      lastTime = currentTime;
      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [config.rotationSpeed, prefersReducedMotion, isVisible]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (globeInstance.current) {
        globeInstance.current.controls().autoRotate = false;
        // Additional cleanup if needed
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    };
  }, []);

  // Advanced orbital position calculator with proper globe-relative sizing
  const calculateOrbitalPosition = useCallback((sector, index) => {
    if (!config.layers) return { x: 50, y: 50, scale: 1 };

    const time = rotation * config.baseOrbitSpeed;
    const sectorTime = time * sector.speed;
    
    // Get base radius for the sector's layer (already in percentage)
    const radiusInPercent = config.layers[sector.layer];
    
    // Direction multiplier
    const direction = sector.direction === 'clockwise' ? 1 : -1;
    
    // Calculate angle with phase offset - ensure proper starting distribution
    const angle = (sectorTime * direction + sector.phaseOffset) % 360;
    const radian = (angle * Math.PI) / 180;
    
    // Apply tilt to the orbital path
    const tiltRadian = (sector.tilt * Math.PI) / 180;
    
    let x, y;
    
    switch (sector.orbitType) {
      case 'elliptical':
        // Elliptical orbit with eccentricity
        const radiusX = radiusInPercent;
        const radiusY = radiusInPercent * sector.eccentricity;
        
        // Apply tilt rotation
        const cosAngle = Math.cos(radian);
        const sinAngle = Math.sin(radian);
        const cosTilt = Math.cos(tiltRadian);
        const sinTilt = Math.sin(tiltRadian);
        
        const ellipseX = radiusX * cosAngle;
        const ellipseY = radiusY * sinAngle;
        
        x = 50 + (ellipseX * cosTilt - ellipseY * sinTilt);
        y = 50 + (ellipseX * sinTilt + ellipseY * cosTilt);
        break;
        
      case 'figure8':
        // Figure-8 pattern (lemniscate) - more constrained
        const fig8Scale = radiusInPercent * 0.7;
        const fig8Angle = radian; // Normal frequency for cleaner figure-8
        
        const denominator = 1 + Math.sin(fig8Angle) ** 2;
        x = 50 + (fig8Scale * Math.cos(fig8Angle)) / denominator;
        y = 50 + (fig8Scale * Math.sin(fig8Angle) * Math.cos(fig8Angle)) / denominator;
        
        // Apply tilt
        const fig8X = x - 50;
        const fig8Y = y - 50;
        x = 50 + (fig8X * Math.cos(tiltRadian) - fig8Y * Math.sin(tiltRadian));
        y = 50 + (fig8X * Math.sin(tiltRadian) + fig8Y * Math.cos(tiltRadian));
        break;
        
      case 'circular':
      default:
        // Enhanced circular with globe-relative positioning
        const irregularity = Math.sin(sectorTime * 2 + index * 60) * radiusInPercent * 0.05;
        const dynamicRadius = radiusInPercent + irregularity;
        
        x = 50 + dynamicRadius * Math.cos(radian + tiltRadian);
        y = 50 + dynamicRadius * Math.sin(radian + tiltRadian) * 0.85; // Slight vertical compression
        break;
    }
    
    // Add subtle breathing effect - smaller for smoother animation
    const breathingScale = 1 + Math.sin(sectorTime * 1.5 + index * 40) * 0.05;
    
    // Ensure boundaries are respected
    const finalX = clamp(x, config.boundaries.minX, config.boundaries.maxX);
    const finalY = clamp(y, config.boundaries.minY, config.boundaries.maxY);
    
    return {
      x: finalX,
      y: finalY,
      scale: breathingScale,
      rotation: angle,
    };
  }, [rotation, config]);

  // Memoized positions for all sectors with new orbital system
  const sectorPositions = useMemo(() => {
    return sectors.map((sector, index) => ({
      ...sector,
      position: calculateOrbitalPosition(sector, index)
    }));
  }, [calculateOrbitalPosition, sectors]);

  // Enhanced label styling with orbital-based animations
  const getLabelStyle = useCallback((pos, sector, index) => {
    if (!pos) return {};
    
    // Use the orbital rotation for more natural movement
    const orbitalRotation = !prefersReducedMotion ? (pos.rotation || 0) * 0.1 : 0;
    const scaleValue = pos.scale || 1;
    
    // Add subtle parallax effect based on layer
    const parallaxOffset = sector.layer === 'outer' ? 0.5 : sector.layer === 'middle' ? 0.3 : 0.1;
    const parallaxX = !prefersReducedMotion ? Math.sin(rotation * 0.01) * parallaxOffset : 0;
    const parallaxY = !prefersReducedMotion ? Math.cos(rotation * 0.01) * parallaxOffset : 0;
    
    return {
      left: `${pos.x + parallaxX}%`,
      top: `${pos.y + parallaxY}%`,
      transform: `translate(-50%, -50%) rotate(${orbitalRotation}deg) scale(${scaleValue})`,
      transition: prefersReducedMotion ? 'none' : 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      willChange: prefersReducedMotion ? 'auto' : 'transform',
      zIndex: sector.layer === 'outer' ? 20 : sector.layer === 'middle' ? 15 : 10,
      filter: `brightness(${0.9 + scaleValue * 0.2}) contrast(${1 + (scaleValue - 1) * 0.3})`,
    };
  }, [rotation, prefersReducedMotion]);

  const baseLabelClass = `absolute bg-white/15 backdrop-blur-md text-white rounded-2xl shadow-xl text-center font-medium whitespace-nowrap ${config.labelSize} ${config.padding} border border-white/20 hover:bg-white/25 transition-colors duration-300`;

  if (error) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-gray-900/20 rounded-lg">
        <div className="text-white/60 text-center">
          <div className="text-2xl mb-2">🌍</div>
          <div className="text-sm">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden globe-container">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 rounded-lg backdrop-blur-sm">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-orange-400 border-t-transparent"></div>
        </div>
      )}
      
      {/* Globe container with aspect ratio */}
      <div
        ref={globeEl}
        className="w-full h-full relative"
        style={{
          background: 'transparent',
          aspectRatio: '1 / 1',
        }}
      />
      
      {/* Enhanced Floating Sector Labels with Irregular Orbits */}
      {!isLoading && (
        <>
          {sectorPositions.map((sector, index) => {
            const floatAnimations = ['animate-float1', 'animate-float2', 'animate-float3'];
            const animationClass = !prefersReducedMotion ? floatAnimations[index % 3] : '';
            
            // Add layer-specific styling
            const layerClass = sector.layer === 'outer' ? 'shadow-2xl' : 
                              sector.layer === 'middle' ? 'shadow-xl' : 'shadow-lg';
            
            const directionClass = sector.direction === 'clockwise' ? 'hover:rotate-1' : 'hover:-rotate-1';
            
            return (
              <div 
                key={sector.name}
                className={`${baseLabelClass} ${animationClass} ${layerClass} ${directionClass} cursor-pointer group`}
                style={getLabelStyle(sector.position, sector, index)}
                title={`Explore ${sector.name} - ${sector.orbitType} orbit`}
              >
                <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                  {sector.name}
                </span>
                
                {/* Orbital trail indicator */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  sector.orbitType === 'elliptical' ? 'scale-110' :
                  sector.orbitType === 'figure8' ? 'scale-125 rotate-45' :
                  'scale-105'
                }`}></div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default HWorldGlobe;
