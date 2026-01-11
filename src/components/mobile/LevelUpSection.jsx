import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest);
            }
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
};

const LevelUpSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <div className="relative w-full bg-[#F5F3FF] dark:bg-[#0F0E1B] text-slate-900 dark:text-white flex flex-col items-center justify-center relative transition-colors duration-300 antialiased overflow-hidden pt-16 pb-0">
            {/* Electric Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] animate-float-delayed"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            </div>

            <motion.main
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-md mx-auto flex flex-col px-6"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-6 pt-4 mb-2">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm border border-indigo-200 dark:border-indigo-800">
                        <span className="material-icons-round text-sm mr-1.5">auto_awesome</span>
                        Rankak AI Analysis
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-[2.75rem] leading-[1.1] font-black tracking-tight text-slate-900 dark:text-white">
                            Your Rank Is <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Rising Fast.</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-[1.05rem] leading-relaxed max-w-[90%] mx-auto font-medium">
                            Rankak AI's <span className="text-indigo-600 dark:text-indigo-400 font-bold">adaptive strategy</span> is working. You're solving the right questions.
                        </p>
                        <div className="mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide opacity-80">
                            Adapts to Topper • Dropper • Foundation
                        </div>
                    </div>
                </motion.div>

                {/* Lottie Animation */}
                <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center relative min-h-[280px]">
                    <div className="absolute w-[280px] h-[280px] bg-gradient-to-tr from-indigo-500/20 via-white/0 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow z-0"></div>
                    <div className="relative w-[280px] h-[280px] z-10 animate-float drop-shadow-2xl">
                        <Player
                            autoplay
                            loop
                            src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </div>
                </motion.div>

                {/* Holographic Stats Card - Enhanced */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="w-full mb-8 relative group"
                >
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Card Body */}
                    <div className="relative bg-white/80 dark:bg-[#131226]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden">

                        {/* Holographic Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:animate-[shimmer_2s_infinite] pointer-events-none z-20"></div>

                        {/* Inner Border Gradient */}
                        <div className="absolute inset-0 rounded-[2rem] border border-indigo-500/10 dark:border-indigo-400/20 pointer-events-none"></div>

                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-[0.15em] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                                Exam Readiness
                            </span>
                            <span className="flex items-center text-indigo-600 dark:text-indigo-300 font-bold text-xs bg-indigo-50 dark:bg-indigo-500/20 px-2 py-1 rounded-lg border border-indigo-100 dark:border-indigo-500/30 shadow-sm">
                                <span className="material-icons-round text-sm mr-1">bolt</span>
                                High Voltage
                            </span>
                        </div>

                        <div className="flex items-baseline gap-3 mb-6 mt-2 relative z-10">
                            <span className="text-7xl font-black text-slate-900 dark:text-white tracking-tighter drop-shadow-sm">
                                <Counter value={40} /><span className="text-4xl align-top text-slate-300 dark:text-slate-600 ml-1">%</span>
                            </span>
                            <div className="flex flex-col">
                                <span className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Syllabus</span>
                                <span className="text-xs text-indigo-500 font-medium">Covered</span>
                            </div>
                        </div>

                        <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                            <div className="flex -space-x-3 overflow-visible pl-1">
                                <img alt="Student avatar 1" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#131226] object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBawEDENVuh4VdX-bcIFAn_G6m7l1gVCcnjvK50uIaf27aVoHFJdvQ4LIzl8K7N8wn0vHkyjGryZNNxZ1xD4vfgQX7b8Ia68phFZKIJUnPpy9uEQ69Z1-DL54u0G8ehd7Pkxpg5_uVxFWpTv4ht6gdyRTo6cCO9m2AryLCMuxZrHHOnkq4igSAMU91ntTaDTXqdjhlV8QnxMXIGyExiuEwgnhXaVQg2Asnk_nM2pquMT5gDMIhP6WESqIFdQHLRIGXihJTSI0N_1ho" />
                                <img alt="Student avatar 2" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#131226] object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyI28JJuU0N6Bxt-3HfCqgHLTFSMHECnPffKV5F6e5b4s9k0n_v8bNczeWkWazz7QZxV5Hht3YtKf0hpnQ0f0ERio4izJBDUULO-CsvJ9d4hJ5729ZPKwMfaGXMqG_8e71Wte62Hn4Obmfeby6H9an-udaupwEjOx1tf9M8aCTnXIi8fUgltuHJ0V1uLGJRaOUqoitu3Hz5DpiPWxd_-ytKBSVt9pDeSTwNVvrB55J-vzzwGFG0osUNOVkdGQ0SThJJdVXaLpOEM" />
                                <img alt="Student avatar 3" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#131226] object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPm9Zz_j65ZWsKUJAEqwPdR_K1vFpbVZfDekbAGxUu-42wcFkVE5Cr3Dw3s1LVK2DDR64GXpJiobxleQ0QSDzWPedtwruq30aqaXI-yXWJX5wr36MyHORJHSMDBdJ9NdA068IVxHuD6ytqcd_ac_Pqa29WLCZNLbzRRc6665sGpt1zT_4ToZHsEdFtx6EkNSTOhyDiEOCw2UTVGOm1DA2b0_L_c5T7c4crWgIykOhyj6mAUQE9s5j6hfEpE72QYonyxKPhQxHWP1Y" />
                                <div className="h-10 w-10 rounded-full bg-indigo-600 ring-2 ring-white dark:ring-[#131226] flex items-center justify-center text-[10px] font-bold text-white shadow-md z-10">+2k</div>
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Students ascending today</span>
                        </div>
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div variants={itemVariants} className="flex flex-col space-y-4 w-full pb-8">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-indigo-600/30 flex items-center justify-center group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                        <span className="text-[1.05rem]">View Next Target</span>
                        <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 font-semibold py-4 px-6 rounded-2xl shadow-sm flex items-center justify-center"
                    >
                        <span className="material-icons-round mr-2 text-slate-400">share</span>
                        Share Achievement
                    </motion.button>
                    <div className="flex items-center justify-center space-x-3 pt-2 opacity-80">
                        <div className="flex items-center text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                            <span className="material-icons-round text-sm mr-1 text-green-500">verified_user</span>
                            No credit card
                        </div>
                        <div className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                        <div className="flex items-center text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                            <span className="material-icons-round text-sm mr-1 text-blue-400">lock</span>
                            Data Encrypted
                        </div>
                    </div>
                </motion.div>
            </motion.main>

            {/* Seamless Transition Gradient (Purple -> Green) */}
            <div className="w-full h-32 bg-gradient-to-b from-[#F5F3FF] to-[#F0FDF4] dark:from-[#0F0E1B] dark:to-[#052e16] relative z-0 mt-[-40px]"></div>
        </div>
    );
};

export default LevelUpSection;
