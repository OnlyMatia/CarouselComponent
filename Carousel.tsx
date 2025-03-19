"use client"

//npm i framer-motion
import { animate, motion, useMotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react";


export default function Carousel () {
    const words = ["Matija ", "Šajin ", "Matija ", "Šajin ","Matija ", "Šajin "];
    const containerRef = useRef<HTMLParagraphElement | null>(null);
    const x = useMotionValue(0);
    const [fullWidth, setFullWidth] = useState(0);


    useEffect(() => {
        if (!containerRef.current) return;
        setFullWidth(containerRef.current.scrollWidth / 3);

        const controls = animate(x, [0, -fullWidth], {
            ease: 'linear',
            duration: 25, 
            repeat: Infinity,
            repeatType: 'loop',
        });

        return () => controls.stop();
    }, [x, fullWidth]);


    
    return (
        <motion.p className=' bottom-0 left-0 font-extrabold text-9xl py-5 uppercase whitespace-nowrap md:text-9xl '
        ref={containerRef} style={{ x }}>
            {[...words,...words, ...words].map((el, i) => {
                return (
                    el
                )
            })} 
        </motion.p>
    )
}