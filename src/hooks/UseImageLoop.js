"use client";
import { diyaImages } from "@/lib/LoopImage";
import { useEffect, useState } from "react";

const UseImageLoop = (isVisible) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let interval;

        if (isVisible) {
            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % diyaImages.length);
            }, 500);
        }

        return () => clearInterval(interval); 
    }, [isVisible]);

    return diyaImages[currentImageIndex];
};

export default UseImageLoop;