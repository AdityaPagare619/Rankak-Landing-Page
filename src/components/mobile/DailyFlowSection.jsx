import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const DailyFlowSection = () => {
    const { scrollYProgress } = useScroll();
    const [xp, setXp] = useState(1875);
    const [activeFeature, setActiveFeature] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [clickEffects, setClickEffects] = useState([]);

    // Auto-cycle features - Fixed logic
    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 4000); // Increased duration for better readability

        return () => clearInterval(interval);
    }, [isHovering]);

    const handleXpClick = (e) => {
        if (xp >= 2500) return;

        // Add XP
        setXp(prev => Math.min(prev + 25, 2500));

        // Add click effect (floating text)
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newEffect = {
            id: Date.now(),
            x,
            y,
            val: "+25 XP"
        };

        setClickEffects(prev => [...prev, newEffect]);

        // Cleanup effect
        setTimeout(() => {
            setClickEffects(prev => prev.filter(eff => eff.id !== newEffect.id));
        }, 1000);
    };

    const features = [
        {
            title: "Subject Accuracy",
            icon: "analytics",
            color: "text-emerald-600",
            bg: "bg-emerald-100",
            content: (
                <div className="flex items-end justify-between h-28 gap-3 px-4 pb-2 w-full">
                    {['Phys', 'Chem', 'Math'].map((subj, i) => (
                        <div key={subj} className="flex flex-col items-center gap-2 w-1/3 group cursor-pointer">
                            <div className="w-full bg-emerald-500/10 rounded-xl relative overflow-hidden h-20 flex items-end">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: [40, 65, 85][i] + '%' }}
                                    transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                                    className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-xl"
                                />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{subj}</span>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: "Day Streak",
            icon: "local_fire_department",
            color: "text-orange-600",
            bg: "bg-orange-100",
            content: (
                <div className="flex flex-col items-center justify-center h-28 w-full relative">
                    <div className="absolute inset-0 bg-orange-500/5 rounded-2xl animate-pulse"></div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl font-black text-slate-800 dark:text-white drop-shadow-sm"
                    >
                        12
                    </motion.div>
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mt-1">Days On Fire</span>
                </div>
            )
        },
        {
            title: "Global Rank",
            icon: "public",
            color: "text-indigo-600",
            bg: "bg-indigo-100",
            content: (
                <div className="flex flex-col items-center justify-center h-28 w-full">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-300">#</span>
                        <span className="text-6xl font-black text-slate-800 dark:text-white tracking-tighter">842</span>
                    </div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full mt-2"
                    >
                        <span className="material-icons-round text-xs">arrow_upward</span> Top 5%
                    </motion.div>
                </div>
            )
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="relative w-full bg-[#FFFDF9] dark:bg-[#0B0A16] font-display antialiased pb-0 overflow-hidden transition-colors duration-300">
            {/* Organic Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-20%] w-[80%] h-[50%] bg-amber-400/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[80px]"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -60, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] right-[-10%] w-[60%] h-[40%] bg-orange-500/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[80px]"
                ></motion.div>
            </div>

            {/* Header */}
            <header className="relative z-10 pt-12 pb-16 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/30 rounded-full backdrop-blur-sm"
                >
                    <span className="material-icons-round text-amber-600 text-sm">auto_awesome</span>
                    <span className="text-[11px] font-bold text-amber-800 dark:text-amber-200 uppercase tracking-wider">Daily Flow</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-black leading-[1.1] mb-6 text-slate-900 dark:text-white"
                >
                    Your Day. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Optimized.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 dark:border-white/10 mx-auto max-w-sm"
                >
                    <div className="absolute -top-5 left-6 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-3 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                        <span className="material-icons-round text-xl">format_quote</span>
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 mt-2">
                        "You don't need 10 hours. <span className="text-orange-600 dark:text-orange-400 font-bold bg-orange-100 dark:bg-orange-900/30 px-1 rounded">20 min of smart practice</span> beats 2 hours of grinding."
                    </p>
                </motion.div>
            </header>

            {/* Timeline Section */}
            <div className="relative z-10 max-w-md mx-auto px-4">
                {/* Organic Timeline Line */}
                <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-orange-400 to-transparent rounded-full opacity-20"></div>

                {/* 1. Morning Scroll */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    className="relative mb-12 pl-16"
                >
                    <div className="absolute left-0 top-0 w-14 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-400 shadow-lg shadow-orange-500/20 flex items-center justify-center z-10 border-4 border-[#FFFDF9] dark:border-[#0B0A16]">
                            <span className="material-icons-round text-white text-2xl">wb_sunny</span>
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-100 dark:border-slate-700">6:30 AM</div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-1 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[1.7rem] p-5 border border-slate-100 dark:border-slate-700/50">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Morning Scroll</h3>
                                <span className="flex items-center text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
                                    +15 XP
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">Wake up with 5 quick Physics concepts to jumpstart your brain.</p>
                            <button className="w-full py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                Start Session <span className="material-icons-round text-amber-500">play_circle</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Lunch Break */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    className="relative mb-12 pl-16"
                >
                    <div className="absolute left-0 top-0 w-14 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center z-10 border-4 border-[#FFFDF9] dark:border-[#0B0A16]">
                            <span className="material-icons-round text-white text-2xl">lunch_dining</span>
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-100 dark:border-slate-700">2:00 PM</div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-1 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[1.7rem] p-5 border border-slate-100 dark:border-slate-700/50">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lunch Break</h3>
                                <span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                                    Streak Safe
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">Bite-sized Chemistry quiz while you eat. Keep the momentum.</p>
                            <button className="w-full py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                Take Quiz <span className="material-icons-round text-emerald-500">bolt</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Deep Dive */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    className="relative mb-12 pl-16"
                >
                    <div className="absolute left-0 top-0 w-14 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center z-10 border-4 border-[#FFFDF9] dark:border-[#0B0A16]">
                            <span className="material-icons-round text-white text-2xl">lightbulb</span>
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-100 dark:border-slate-700">7:00 PM</div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-1 shadow-xl shadow-indigo-500/20 transform scale-105">
                        <div className="bg-white dark:bg-slate-900 rounded-[1.7rem] p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="flex justify-between items-start mb-3 relative z-10">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white">Deep Dive</h3>
                                <span className="flex items-center text-[10px] font-bold text-white bg-indigo-500 px-2 py-1 rounded-lg shadow-sm">
                                    High XP
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 leading-relaxed relative z-10">45 min focused mock test session. This is where growth happens.</p>
                            <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 relative z-10">
                                Enter Focus Mode <span className="material-icons-round">play_arrow</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Interactive Daily Progress Card */}
            <section className="relative mt-8 px-6 max-w-md mx-auto z-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-1 shadow-2xl shadow-slate-200/50 dark:shadow-none"
                >
                    <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-[2.3rem] p-6 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 dark:text-white">Daily Progress</h2>
                                <p className="text-xs text-slate-500 font-medium">Tap card to gain XP</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center text-amber-500 font-black text-sm mb-1">
                                    <span className="material-icons-round text-base mr-1">emoji_events</span>
                                    ROOKIE II
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono font-bold tracking-wider">{xp} / 2500 XP</div>
                            </div>
                        </div>

                        {/* XP Bar */}
                        <div
                            className="relative h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full mb-6 cursor-pointer overflow-visible group select-none"
                            onClick={handleXpClick}
                        >
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                                initial={{ width: "75%" }}
                                animate={{ width: `${(xp / 2500) * 100}%` }}
                                transition={{ type: "spring", stiffness: 50 }}
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite] rounded-full overflow-hidden pointer-events-none"></div>

                            {/* Click Effects */}
                            <AnimatePresence>
                                {clickEffects.map(effect => (
                                    <motion.div
                                        key={effect.id}
                                        initial={{ opacity: 1, y: 0, scale: 0.5 }}
                                        animate={{ opacity: 0, y: -30, scale: 1.2 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute pointer-events-none text-amber-600 font-black text-xs z-50"
                                        style={{ left: effect.x, top: -20 }}
                                    >
                                        {effect.val}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Feature Carousel */}
                        <div
                            className="grid grid-cols-1 gap-4"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-4 shadow-sm relative h-48 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full flex flex-col w-full"
                                    >
                                        <div className="flex items-center justify-between mb-4 w-full">
                                            <div className="flex items-center gap-2">
                                                <div className={`p-2 rounded-lg ${features[activeFeature].bg} ${features[activeFeature].color}`}>
                                                    <span className="material-icons-round text-lg">{features[activeFeature].icon}</span>
                                                </div>
                                                <span className="font-bold text-slate-700 dark:text-slate-200">{features[activeFeature].title}</span>
                                            </div>
                                            <div className="flex gap-1">
                                                {[0, 1, 2].map(i => (
                                                    <div
                                                        key={i}
                                                        className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${i === activeFeature ? 'bg-slate-800 dark:bg-white' : 'bg-slate-200 dark:bg-slate-700'}`}
                                                        onClick={() => setActiveFeature(i)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-center justify-center w-full">
                                            {features[activeFeature].content}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-base shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 transform active:scale-95 transition-all">
                            Continue Your Day
                            <span className="material-icons-round">arrow_forward</span>
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Seamless Transition Gradient (Amber -> Purple) */}
            <div className="w-full h-32 bg-gradient-to-b from-[#FFFDF9] to-[#F5F3FF] dark:from-[#0B0A16] dark:to-[#0F0E1B] relative z-0 mt-[-40px]"></div>
        </section>
    );
};

export default DailyFlowSection;
