'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.15,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 4,
      baseColor: [0.4, 0.4, 0.4], // Light enough to see the dots
      markerColor: [0.85, 0.46, 0.02], // Amber 600
      glowColor: [0.04, 0.06, 0.09], // Matches #0a0f16
      markers: [
        { location: [40.7128, -74.0060], size: 0.06 }, // New York
        { location: [51.5074, -0.1278], size: 0.06 }, // London
        { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
        { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
        { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
      ],
      // @ts-expect-error - cobe types might be missing onRender
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002; // Smooth, slow rotation
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center lg:justify-end z-0">
      {/* Gradient mask to fade out the edges of the globe */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0a0f16_70%)] z-10"></div>
      
      <div className="w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px] absolute right-[-20%] lg:right-[-10%] top-[10%] opacity-40 mix-blend-screen">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ contain: 'layout paint size' }}
        />
      </div>
    </div>
  );
}
