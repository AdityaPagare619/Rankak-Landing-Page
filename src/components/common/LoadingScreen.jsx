import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_MESSAGES = [
    "Initializing Rankak AI...",
    "Calibrating Rank Strategy...",
    "Syncing with Toppers...",
    "Analyzing Exam Patterns...",
    "Optimizing Study Path...",
    "Loading Tactical Intel..."
];

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const duration = 2500; // Total loading time in ms
        const intervalTime = 50;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Small delay before unmounting
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        // Cycle messages
        const messageTimer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
        }, 600);

        return () => {
            clearInterval(timer);
            clearInterval(messageTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#FFFDF5] dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
            exit={{
                y: -window.innerHeight,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            {/* Mascot Container */}
            <div className="relative w-64 h-64 mb-8">
                <DotLottieReact
                    src="https://lottie.host/934db0fb-ed6c-418c-a68f-853839dc64af/sXAp34Jsh1.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                />
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl animate-pulse mix-blend-multiply dark:mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Loading Text */}
            <div className="h-8 mb-4 flex items-center justify-center">
                <AnimatePresence mode='wait'>
                    <motion.p
                        key={messageIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-indigo-900 dark:text-indigo-100 font-display font-bold text-lg tracking-wide"
                    >
                        {LOADING_MESSAGES[messageIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                    className="h-full bg-indigo-600 relative"
                    style={{ width: `${progress}%` }}
                >
                    {/* Shimmer Effect on Bar */}
                    <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_1s_infinite]"></div>
                </motion.div>
            </div>

            {/* Percentage */}
            <p className="mt-2 text-xs font-mono text-indigo-400 font-bold">
                {Math.round(progress)}%
            </p>
        </motion.div>
    );
};

export default LoadingScreen;
