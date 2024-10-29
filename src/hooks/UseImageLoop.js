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
            }, 500); // Change image every 500 milliseconds
        }

        return () => clearInterval(interval); // Cleanup on unmount or when isVisible changes
    }, [isVisible]);

    return diyaImages[currentImageIndex];
};

export default UseImageLoop;