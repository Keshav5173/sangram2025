import { useEffect, useState } from 'react';
import { Power3, gsap } from 'gsap';
import { StarsCanvas } from './canvas';
import img from '/logo.png';

// eslint-disable-next-line react/prop-types
const Opening = ({ onOpeningComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const hasOpenedBefore = localStorage.getItem('hasOpened');
    useEffect(() => {
        if (hasOpenedBefore) {
            // Opening has been shown before, skip the animation
            setIsVisible(false);
            onOpeningComplete();
        } else {
            const tl = gsap.timeline();

            // Animate the text to come from the bottom
            const textElements = gsap.utils.toArray("#Open h1");
            textElements.forEach((textElement) => {
                tl.from(textElement, {
                    y: 100,
                    opacity: 0.25,
                    duration: 0.5,
                    scale: 1,
                    ease: Power3.easeInAndOut,
                });
            });

            tl.to(textElements, {
                y: -100,
                scale: 1.2,
                duration: 4,
                ease: Power3.easeInAndOut,
            });
            tl.to(textElements, {
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: Power3.easeInAndOut,
            });

            tl.to("#Open", {
                y: -150,
                opacity: 0,
                duration: 3,
                ease: Power3.easeInAndOut,
                onComplete: () => {
                    setIsVisible(false);
                    onOpeningComplete();
                    localStorage.setItem('hasOpened', true);
                },
            });

            tl.to("#Open .starscanvas", {
                opacity: 0,
                duration: 1,
                ease: Power3.easeInAndOut,
            });
        }
    }, [hasOpenedBefore, onOpeningComplete]);

    return (
        <div id="Open" className={`h-screen bg-black text-[#09fbd3] ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='flex flex-col justify-center items-center mx-auto'>
                <img src={img} alt="Image" />
                <h1 className='text-5xl font-semibold text-center'>Sangram&apos;25</h1>
            </div>
            <StarsCanvas />
        </div>
    );
};
export default Opening;