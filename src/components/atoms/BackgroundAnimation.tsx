import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const BackgroundAnimation: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 60 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const normalizedX = (e.clientX / innerWidth) * 2 - 1;
            const normalizedY = (e.clientY / innerHeight) * 2 - 1;
            x.set(normalizedX);
            y.set(normalizedY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    const ring1X = useTransform(mouseX, [-1, 1], [-10, 10]);
    const ring1Y = useTransform(mouseY, [-1, 1], [-10, 10]);
    const ring2X = useTransform(mouseX, [-1, 1], [15, -15]);
    const ring2Y = useTransform(mouseY, [-1, 1], [15, -15]);
    
    const [particles] = useState(() => [...Array(18)].map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        xStart: Math.random() * 100,
        yStart: Math.random() * 100,
        duration: Math.random() * 10 + 20,
        delay: Math.random() * 5
    })));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '0',
      boxSizing: 'border-box',
    }}>
        {particles.map((p) => (
            <motion.div
                key={p.id}
                style={{
                    position: 'absolute',
                    width: p.size,
                    height: p.size,
                    borderRadius: '50%',
                    background: 'rgba(197, 216, 157, 0.6)',
                    top: `${p.yStart}%`,
                    left: `${p.xStart}%`,
                    zIndex: -1,
                }}
                animate={{
                    y: [0, -60, 0],
                    x: [0, 30, 0],
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                }}
            />
        ))}

        <motion.div
            style={{
                position: 'absolute',
                width: 'min(85vh, 85vw)',
                height: 'min(85vh, 85vw)',
                borderRadius: '50%',
                border: '1.5px solid rgba(246, 240, 215, 0.25)',
                boxShadow: '0 0 60px rgba(246, 240, 215, 0.1)',
                x: ring1X,
                y: ring1Y,
            }}
            animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
            }}
            transition={{
                rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
                scale: { duration: 15, repeat: Infinity, ease: 'easeInOut' }
            }}
        />

        <motion.div
            style={{
                position: 'absolute',
                width: 'min(65vh, 65vw)',
                height: 'min(65vh, 65vw)',
                borderRadius: '50%',
                border: '1.5px dashed rgba(197, 216, 157, 0.35)',
                x: ring2X,
                y: ring2Y,
            }}
            animate={{
                rotate: -360,
            }}
            transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear'
            }}
        />

        <motion.div
            style={{
                position: 'absolute',
                width: 'min(45vh, 45vw)',
                height: 'min(45vh, 45vw)',
                borderRadius: '40%',
                border: '2px solid rgba(246, 240, 215, 0.2)',
                x: ring1X, 
                y: ring1Y,
            }}
            animate={{
                rotate: 180,
                borderRadius: ["40%", "50%", "40%"],
            }}
            transition={{
                rotate: { duration: 30, repeat: Infinity, ease: 'easeInOut' },
                borderRadius: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
            }}
        />
        
         <motion.div
            style={{
                position: 'absolute',
                width: '120vw',
                height: '120vh',
                background: 'radial-gradient(circle at 50% 50%, rgba(197, 216, 157, 0.08) 0%, transparent 60%)',
                zIndex: -1,
            }}
            animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
        />
    </div>
  );
};

