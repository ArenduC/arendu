import React from 'react';
import Hero from '../Hero';
import Skills from '../Skills';
// FIX: Import the Transition type from framer-motion.
import { motion, type Transition } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
};

// FIX: Explicitly type pageTransition to fix TypeScript error where the 'type' property was being widened to 'string'.
const pageTransition: Transition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
};


export const AboutPage: React.FC = () => {
    return (
        <motion.div
            key="about"
            className="flex-grow flex flex-col justify-center items-center text-center gap-16"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Hero />
            <Skills />
        </motion.div>
    );
};