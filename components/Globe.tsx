'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let req: number;
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.04, 0.06, 0.09], // Matches #0a0f16 roughly
      markerColor: [0.96, 0.58, 0.11], // Amber 500
      glowColor: [0.15, 0.08, 0.02], // Subtle amber glow
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 }, // SF
        { location: [40.7128, -74.0060], size: 0.04 }, // NY
        { location: [51.5074, -0.1278], size: 0.04 }, // London
        { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
        { location: [1.3521, 103.8198], size: 0.04 }, // Singapore
        { location: [25.2048, 55.2708], size: 0.03 }, // Dubai
      ],
    });

    const render = () => {
      phi += 0.002;
      globe.update({ phi });
      req = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      cancelAnimationFrame(req);
      globe.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: 800,
          height: 800,
          maxWidth: "100%",
          aspectRatio: 1,
        }}
        className="opacity-30 mix-blend-screen translate-y-1/4 lg:translate-y-12 lg:translate-x-1/3 scale-150 lg:scale-125"
      />
    </div>
  );
}
