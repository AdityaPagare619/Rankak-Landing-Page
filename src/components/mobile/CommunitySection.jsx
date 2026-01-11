import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FocusZoneCard from '../common/FocusZoneCard';
import CommandCenterCard from '../common/CommandCenterCard';

const CommunitySection = () => {
    const { scrollY } = useScroll();

    // Parallax for pixies (simulated velocity)
    const yPixie1 = useTransform(scrollY, [0, 1000], [0, -200]);
    const yPixie2 = useTransform(scrollY, [0, 1000], [0, -350]);
    const yPixie3 = useTransform(scrollY, [0, 1000], [0, -150]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="relative overflow-hidden font-sans text-slate-900 pt-0 pb-0">
            {/* Top Gradient Mask for Seamless Transition (Green -> White/Dark) */}
            <div className="w-full h-32 bg-gradient-to-b from-[#F0FDF4] to-transparent dark:from-[#052e16] dark:to-transparent relative z-0 mb-[-60px]"></div>

            <motion.main
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative z-10 px-6 space-y-8"
            >
                {/* Header */}
                <motion.div variants={cardVariants} className="text-center mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold tracking-widest uppercase mb-3 border border-emerald-200 dark:border-emerald-800">
                        Community
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                        The Fellowship<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Awaits You</span>
                    </h2>
                </motion.div>

                {/* Focus Zone Card - Premium Redesign */}
                <motion.div variants={cardVariants}>
                    <FocusZoneCard />
                </motion.div>

                {/* Command Center Card - Premium Redesign */}
                <motion.div variants={cardVariants} className="mt-4">
                    <CommandCenterCard />
                </motion.div>

                {/* Text Section */}
                <motion.section variants={cardVariants} className="py-6 text-center space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                        "This community doesn't judge. Everyone started somewhere. Most didn't finish on time."
                    </h2>
                    <div className="inline-block transform -rotate-1">
                        <div className="bg-lime-100 dark:bg-lime-900/50 px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-700">
                            <p className="text-lg font-bold text-lime-800 dark:text-lime-200">
                                But they started anyway.
                            </p>
                        </div>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                        So can you.
                    </h2>
                </motion.section>

                {/* Join Button */}
                <motion.div variants={cardVariants} className="relative py-8 flex flex-col items-center">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-lime-500/30 rounded-full blur-3xl dark:bg-lime-500/10"></div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group w-64 h-64 rounded-full bg-gradient-to-b from-lime-500 to-lime-700 shadow-glow flex flex-col items-center justify-center text-white transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="material-symbols-rounded text-4xl mb-2 floating-pixie">forest</span>
                        <span className="text-2xl font-black text-center leading-none px-4 drop-shadow-md">
                            JOIN THE<br />FELLOWSHIP
                        </span>
                        <div className="mt-4 px-4 py-1.5 bg-lime-300 text-lime-900 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 group-hover:bg-white transition-colors">
                            Start for free
                            <span className="material-symbols-rounded text-sm">arrow_forward</span>
                        </div>
                    </motion.button>
                    <p className="mt-6 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold opacity-70">
                        No credit card required. Just curiosity.
                    </p>
                </motion.div>
            </motion.main>

            {/* Enhanced Floating Pixies */}
            <motion.div style={{ y: yPixie1 }} className="fixed top-1/4 right-4 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)] z-20 pointer-events-none animate-pulse"></motion.div>
            <motion.div style={{ y: yPixie2 }} className="fixed bottom-1/3 left-6 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] z-20 pointer-events-none animate-pulse"></motion.div>
            <motion.div style={{ y: yPixie3 }} className="fixed top-2/3 right-10 w-4 h-4 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.6)] z-20 pointer-events-none animate-pulse"></motion.div>

            {/* Seamless Transition Gradient (Green -> Cream/Dark) */}
            <div className="w-full h-32 relative z-0 mt-[-40px]"></div>
        </div>
    );
};

export default CommunitySection;
