import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAnimation: React.FC = () => {
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
      paddingBottom: '0', // Reset to 0 for true screen center
      boxSizing: 'border-box',
    }}>
        {/* Ring 1 - Large, Slow */}
        <motion.div
            style={{
                position: 'absolute',
                width: 'min(85vh, 85vw)', /* Fits on both portrait and landscape */
                height: 'min(85vh, 85vw)',
                borderRadius: '50%',
                border: '1px solid rgba(246, 240, 215, 0.1)',
                boxShadow: '0 0 40px rgba(246, 240, 215, 0.05)',
            }}
            animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear'
            }}
        />

        {/* Ring 2 - Medium, Reverse */}
        <motion.div
            style={{
                position: 'absolute',
                width: 'min(65vh, 65vw)',
                height: 'min(65vh, 65vw)',
                borderRadius: '50%',
                border: '1px dashed rgba(197, 216, 157, 0.15)',
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

        {/* Ring 3 - Small, Eccentric */}
        <motion.div
            style={{
                position: 'absolute',
                width: 'min(45vh, 45vw)',
                height: 'min(45vh, 45vw)',
                borderRadius: '40%',
                border: '2px solid rgba(246, 240, 215, 0.08)',
            }}
            animate={{
                rotate: 180,
                borderRadius: ["40%", "50%", "40%"],
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
        />
        
         {/* Subtle Gradient Spot for depth */}
         <motion.div
            style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at 50% 50%, rgba(197, 216, 157, 0.03) 0%, transparent 60%)',
                zIndex: -1,
            }}
        />
    </div>
  );
};
