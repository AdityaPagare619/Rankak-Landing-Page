import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <div className="relative bg-[#F0FDF4] dark:bg-[#052e16] overflow-hidden font-sans text-slate-900 dark:text-white pt-16 pb-0">
            {/* Lush Background Elements */}
            <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[50%] bg-lime-500/10 rounded-full blur-[100px] animate-float"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[70%] h-[50%] bg-emerald-500/10 rounded-full blur-[100px] animate-float-delayed"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" preserveAspectRatio="none">
                <path className="ascension-path" d="M-50 850 C 50 600, 300 600, 200 400 C 100 200, 350 100, 400 -50" stroke="#84CC16" strokeLinecap="round" strokeWidth="2" fill="none" strokeDasharray="10 20"></path>
            </svg>

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

                {/* Peer Wins Card - Leaderboard Style */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-[2rem] blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-5 shadow-xl border border-white/50 dark:border-white/10 overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-lime-100 dark:bg-lime-900/30 rounded-xl text-lime-600 dark:text-lime-400">
                                    <span className="material-symbols-rounded">celebration</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Peer Wins</h3>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Feed
                            </span>
                        </div>

                        <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                            <img alt="Neha S." className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN6GF7kPPP8-1WQknAO3QZ7uSpXH4pEvb4qCU5XwSn0YCXqYVGkK_XM8_JQxLZaz139I20oVlRP7k1zGu9WZZiHq8rPrqCI8CXlJSQxWv8X6m7S16R-_cvczUwPLh6OKCx1YIgkVrIsHdq4IEtELiJUN2z2tlakaPMIOHibfqnK2wBlbSCWL71wybqeoHTXDNtG6kR5DqLMCqEKVEpD5U5nnEoec-NYsDXdEFD1yDUQ8kHsE4hZnxy-l3gBtDSVWId5X8knOQL-is" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Neha S.</h4>
                                    <span className="text-[10px] font-bold text-slate-400">5m ago</span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-snug font-medium">
                                    Just finished a 5-day streak without burnout. Feeling calm. 🧘‍♀️
                                </p>
                                <div className="flex gap-3 mt-2">
                                    <button className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-700 px-2 py-1 rounded-full shadow-sm hover:scale-105 transition-transform">
                                        ❤️ 45
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* City Rankings - Leaderboard Style */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative group mt-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-[2rem] blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-5 shadow-xl border border-white/50 dark:border-white/10 overflow-hidden">
                        <div className="absolute -right-10 top-10 w-40 h-40 border border-slate-100 dark:border-slate-800 rounded-full opacity-50 pointer-events-none"></div>

                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600 dark:text-orange-400">
                                    <span className="material-symbols-rounded">location_city</span>
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 dark:text-white">City Rankings</h3>
                            </div>
                            <div className="flex items-center gap-1 pl-2 pr-3 py-1 bg-orange-50 dark:bg-orange-900/20 rounded-full border border-orange-100 dark:border-orange-800">
                                <span className="material-symbols-rounded text-orange-500 text-sm">my_location</span>
                                <span className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase">Your Zone</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center py-4 relative z-10">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 w-full max-w-[280px]">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Zone ID</span>
                                        <span className="text-sm font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded mt-1 inline-block">BLR-04</span>
                                    </div>
                                    <div className="px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded text-[10px] font-bold text-green-700 dark:text-green-300 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live
                                    </div>
                                </div>
                                <div className="text-center py-2">
                                    <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Current Rank</p>
                                    <div className="text-6xl font-black text-slate-900 dark:text-white flex items-baseline justify-center gap-1 leading-none">
                                        <span className="text-2xl text-orange-400">#</span>12
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Top 5%
                                    </span>
                                    <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded font-bold">
                                        +4 today
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-center text-slate-400 dark:text-slate-500 mt-4 italic max-w-xs mx-auto font-medium">
                                "Only comparing you to relevant peers. No national pressure until you're ready."
                            </p>
                        </div>
                    </div>
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
            <div className="w-full h-32 bg-gradient-to-b from-[#F0FDF4] to-[#fffbf4] dark:from-[#052e16] dark:to-[#0f172a] relative z-0 mt-[-40px]"></div>
        </div>
    );
};

export default CommunitySection;
