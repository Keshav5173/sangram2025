import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedSpinner = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const allSegs = [];
    const num = 360 / 15;
    const duration = 0.25;

    // Clone segments
    const seg = container.querySelector('.seg');
    allSegs.push(seg);
    for (let i = 1; i < (num - 8); i++) {
      const clone = seg.cloneNode(true);
      container.appendChild(clone);
      gsap.set(clone, {
        rotation: i * 15,
        svgOrigin: '400 300'
      });
      allSegs.push(clone);
    }

    // Create main timeline
    const mainTl = gsap.timeline();
    allSegs.forEach((item, count) => {
      const tl = gsap.timeline();
      tl.to(item, {
        rotation: '-=120',
        svgOrigin: '400 300',
        repeat: -1,
        repeatRefresh: true,
        ease: 'sine.inOut',
        repeatDelay: (num - 10) * duration
      });
      mainTl.add(tl, count * duration);
    });

    // Rotate container
    gsap.to(container, {
      duration: 1,
      rotation: 360,
      svgOrigin: '400 300',
      ease: 'linear',
      repeat: -1
    }, 0);

    // Set global timeline speed
    gsap.globalTimeline.timeScale(0.5);

    // Cleanup function
    return () => {
      mainTl.kill();
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#00000070] z-10 fixed inset-0 overflow-hidden">
      <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="200 150 400 300" className="w-1/2 h-1/2">
        <defs>
          <g id="container" filter="url(#goo)" ref={containerRef}>
            <path className="seg" d="M412.9,251.7c-4.1-1.1-8.5-1.7-12.9-1.7" />
          </g>
          <filter id="goo" colorInterpolationFilters="sRGB" x="-100%" y="-100%" width="250%" height="250%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
            <feBlend />
          </filter>
          <radialGradient id="grad" cx="400.5176" cy="298.0287" r="125.9247" gradientUnits="userSpaceOnUse">
            <stop offset="0.39" style={{ stopColor: '#ffeb3b' }} />
            <stop offset="0.45" style={{ stopColor: '#FaaC42' }} />
          </radialGradient>
        </defs>
        <g id="wrapper" ref={wrapperRef}>
          <use x="20" y="20" xlinkHref="#container" fill="none" strokeWidth="20" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" stroke="#5B1E00" opacity="0.05" />
          <use xlinkHref="#container" fill="none" strokeWidth="20" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" stroke="url(#grad)" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSpinner;