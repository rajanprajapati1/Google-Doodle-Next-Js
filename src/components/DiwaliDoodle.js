"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DiyaSvg from './../../public/unlit_diya.svg';
import Image from 'next/image';
import UseImageLoop from '@/hooks/UseImageLoop';
import Star from './../../public/desktop_stars_4.svg'


const DiwaliDoodle = ({ isVisible, setIsVisible }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [touchedImages, setTouchedImages] = useState(new Set());
    const currentDiyaImage = UseImageLoop(isVisible);
    const totalImages = 8; // Adjust based on your number of images
    const [shouldRender, setShouldRender] = useState(isVisible);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX - 25, y: event.clientY - 25 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleTouch = (index) => {
        if (!touchedImages.has(index)) {
            setTouchedImages(prev => new Set(prev).add(index));
        }
    };

    const allTouched = touchedImages.size === totalImages;

    useEffect(()=>{
   setTimeout(() => {
    setIsVisible(false)
    setTouchedImages(new Set())
   }, 5000);
    },[allTouched])

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            setShouldRender(false); // Start the exit animation
        }
    }, [isVisible]);

    const handleAnimationComplete = () => {
        if (!isVisible) {
            setShouldRender(false); // Remove from DOM after exit animation
        }
    };


    const imageVariants = {
        initial: { y: '100%', opacity: 0 },
        animate: { y: '0%', opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    };
    return (
        <>
                       {shouldRender &&
                        <motion.div
                className="fixed z-[500] inset-0 bg-[#080606c4] bg-opacity-5 backdrop-blur-sm flex items-center justify-center"
                initial={{ y: '100%' }} // Start off-screen
                animate={{ y: '0%' }} // Slide up
                exit={{ y: '100%', opacity: 0.5 }} // Slide down and fade out
                transition={{ duration: 0.3 }} // Duration of the animation
                style={{ cursor: "none" }} // Change cursor
                onDoubleClick={() => setIsVisible(false)}
                onAnimationComplete={handleAnimationComplete} // Handle completion
            >
                <div className='left-diya flex flex-col items-center justify-center gap-36 flex-[0.5] h-screen'>
                    {/* Optional Content */}
                </div>

                <div className='left-diya flex flex-col items-center justify-center gap-36 flex-1 h-screen'>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={touchedImages?.has(0) ? currentDiyaImage : DiyaSvg} alt='Diya 1' width={120} height={120} className='scale-125'
                            onMouseEnter={() => handleTouch(0)} // Touch detection
                        />

                    </motion.div>
                </div>

                <div className='right-diya flex flex-col items-center justify-center gap-36 flex-1 h-screen'>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={touchedImages?.has(1) ? currentDiyaImage : DiyaSvg}
                            onMouseEnter={() => handleTouch(1)} // Touch detection
                            alt='Diya 2' width={110} height={110} className='scale-125' />
                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for the next image
                    >
                        <Image
                            src={touchedImages?.has(3) ? currentDiyaImage : DiyaSvg} onMouseEnter={() => handleTouch(3)} // Touch detection

                            alt='Diya 3' width={95} height={95} className='scale-125' />
                    </motion.div>
                </div>

                <div className='right-diya flex flex-col items-center justify-center gap-36 flex-1 h-screen'>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, delay: 0.2 }} // Incremental delay
                    >
                        <Image
                            src={touchedImages?.has(4) ? currentDiyaImage : DiyaSvg} onMouseEnter={() => handleTouch(4)} // Touch detection

                            alt='Diya 4' width={90} height={90} className='scale-125' />
                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, delay: 0.3 }} // Incremental delay
                    >
                        <Image
                            src={touchedImages?.has(5) ? currentDiyaImage : DiyaSvg} onMouseEnter={() => handleTouch(5)} // Touch detection

                            alt='Diya 5' width={130} height={130} className='scale-125' />
                    </motion.div>
                </div>

                <div className='right-diya flex flex-col items-center justify-center gap-36 flex-1 h-screen'>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, delay: 0.4 }} // Incremental delay
                    >
                        <Image
                            src={touchedImages?.has(6) ? currentDiyaImage : DiyaSvg} onMouseEnter={() => handleTouch(6)} // Touch detection

                            alt='Diya 6' width={105} height={105} className='scale-125' />
                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, delay: 0.5 }} // Incremental delay
                    >
                        <Image
                            src={touchedImages?.has(7) ? currentDiyaImage : DiyaSvg} onMouseEnter={() => handleTouch(7)} // Touch detection

                            alt='Diya 7' width={110} height={110} />
                    </motion.div>
                </div>

                <div className='right-diya flex flex-col items-center justify-center gap-36 flex-1 h-screen'>
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, delay: 0.6 }} // Incremental delay
                    >
                        <Image
                            src={touchedImages?.has(8) ? currentDiyaImage : DiyaSvg} onMouseEnter={() => handleTouch(8)} // Touch detection

                            alt='Diya 8' width={150} height={150} className='scale-125' />
                    </motion.div>
                </div>

                <div className='right-diya flex flex-col items-center justify-center gap-36 flex-[0.5] h-screen'>
                    {/* Optional Content */}
                </div>
            </motion.div>}
            {allTouched && 
            <StarAnimation/>
             } 
            {isVisible && <CustomCursor image={currentDiyaImage} position={cursorPosition} />}
        </>
    );
};

export default DiwaliDoodle;


const CustomCursor = ({ position, image }) => {

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                pointerEvents: 'none', // Prevent the cursor from blocking mouse events
                transition: 'transform 0.1s ease', // Smooth movement
                zIndex: "999999999999999",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Image src={image} alt='Diya Cursor' width={100} height={100} className='relative z-20' />
            {/* <div className='ovrelay_diya w-[180]  h-[150] bg-[#c7c7c788] rounded-full  absolute -top-5 -left-8 right-0 bottom-0  z-0'></div> */}
        </div>
    );
};


const StarAnimation = () => {
    const starVariants = {
        initial: { scale: 1, opacity: 1 },
        animate: {
            scale: [1.1, 1, 1.1],
            opacity: [1, 0.5, 1],
            transition: {
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity, 
            },
        },
    };

    return (
        <div className="flex flex-wrap justify-center gap-10 w-full fixed top-0 bottom-0 left-0 right-0 z-[999999]">
            {/* Apply motion.div for each star */}
            {Array.from({ length: 100 }).map((_, index) => (
                <motion.div key={index} variants={starVariants} initial="initial" animate="animate">
                    <Image src={Star} alt={`Star ${index + 1}`} width={2000} height={2000} />
                </motion.div>
            ))}
        </div>
    );
};
