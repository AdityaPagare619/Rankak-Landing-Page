import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.8 }
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto motion-fade-up">
                <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
                    Started late? The AI has a <br />
                    <span className="text-hero-primary relative inline-block whitespace-nowrap">
                        30-day strategy
                        <svg className="absolute w-full h-4 -bottom-2 left-0 text-amber-400 opacity-60" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="8" viewBox="0 0 100 10">
                            <path d="M0 5 Q 50 10 100 5"></path>
                        </svg>
                    </span>.
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-medium pt-2">No panic. No clutter. Just a calculated path to your best rank.</p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Card 1: Fresh Start (Sage) */}
                <motion.div variants={cardVariants} className="group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-[2.5rem] border-[3px] border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-400 transition-all duration-400 ease-brand-curve hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.3)] hover:-translate-y-2 overflow-hidden card-pop">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100 to-transparent opacity-50 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 ease-brand-smooth group-hover:scale-110"></div>
                    <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-emerald-100 dark:border-emerald-800/50 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-brand-curve">
                                <span className="material-symbols-outlined text-4xl">spa</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-800/50 text-xs font-black uppercase tracking-widest shadow-sm mb-1">
                                    Timeline: 6+ Months
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">For Early Starters</span>
                            </div>
                        </div>
                        <h3 className="font-display font-black text-3xl text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">Fresh Start</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed mb-8">
                            You have time to master concepts. Build a fortress of knowledge.
                        </p>
                        <div className="mt-auto bg-emerald-50/50 dark:bg-black/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-900/30 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-emerald-500 shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    <span className="material-symbols-outlined text-xl">psychology</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">AI Strategy</div>
                                    <div className="font-bold text-sm text-gray-900 dark:text-white">Foundation Builder</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-emerald-500 shrink-0 transition-transform duration-300 group-hover:scale-105 delay-75">
                                    <span className="material-symbols-outlined text-xl">center_focus_strong</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Focus</div>
                                    <div className="font-bold text-sm text-gray-900 dark:text-white">Theory + Application</div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-emerald-200/50 dark:bg-emerald-800/30"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/30 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ease-brand-curve delay-100">
                                    <span className="material-symbols-outlined text-xl">emoji_events</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Your Goal</div>
                                    <div className="font-black text-base text-emerald-700 dark:text-emerald-200">99th Percentile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2: Mid-Year Grind (Amber) */}
                <motion.div variants={cardVariants} className="group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-[2.5rem] border-[3px] border-amber-200 dark:border-amber-800/50 hover:border-amber-400 transition-all duration-400 ease-brand-curve hover:shadow-[0_20px_50px_-12px_rgba(251,191,36,0.3)] hover:-translate-y-2 overflow-hidden card-pop">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-transparent opacity-50 dark:from-amber-900/30 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 ease-brand-smooth group-hover:scale-110"></div>
                    <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-amber-200 dark:border-amber-700/50 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-brand-curve">
                                <span className="material-symbols-outlined text-4xl">hourglass_top</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border border-amber-200 dark:border-amber-700/50 text-xs font-black uppercase tracking-widest shadow-sm mb-1">
                                    Timeline: 3-6 Months
                                </div>
                                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">For Droppers / Regulars</span>
                            </div>
                        </div>
                        <h3 className="font-display font-black text-3xl text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Mid-Year Grind</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed mb-8">
                            You have time for the <span className="text-amber-600 dark:text-amber-400 font-bold">high-ROI chapters</span>. Focus on what scores.
                        </p>
                        <div className="mt-auto bg-amber-50/50 dark:bg-black/20 rounded-2xl p-5 border border-amber-100 dark:border-amber-800/30 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-amber-500 shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    <span className="material-symbols-outlined text-xl">trending_up</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">AI Strategy</div>
                                    <div className="font-bold text-sm text-gray-900 dark:text-white">Weightage Optimization</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-amber-500 shrink-0 transition-transform duration-300 group-hover:scale-105 delay-75">
                                    <span className="material-symbols-outlined text-xl">filter_center_focus</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Focus</div>
                                    <div className="font-bold text-sm text-gray-900 dark:text-white">Scoring Areas</div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-amber-200/50 dark:bg-amber-800/30"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-400 text-white shadow-md shadow-amber-500/30 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ease-brand-curve delay-100">
                                    <span className="material-symbols-outlined text-xl">emoji_events</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Your Goal</div>
                                    <div className="font-black text-base text-amber-700 dark:text-amber-200">Maximize Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: Final Sprint (Indigo) */}
                <motion.div variants={cardVariants} className="group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-[2.5rem] border-[3px] border-indigo-200 dark:border-indigo-800/50 hover:border-indigo-500 transition-all duration-400 ease-brand-curve hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.3)] hover:-translate-y-2 overflow-hidden card-pop">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-transparent opacity-50 dark:from-indigo-900/30 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 ease-brand-smooth group-hover:scale-110"></div>
                    <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-indigo-200 dark:border-indigo-700/50 flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-brand-curve">
                                <span className="material-symbols-outlined text-4xl">bolt</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700/50 text-xs font-black uppercase tracking-widest shadow-sm mb-1">
                                    Timeline: &lt; 90 Days
                                </div>
                                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">For Late Starters</span>
                            </div>
                        </div>
                        <h3 className="font-display font-black text-3xl text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Final Sprint</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed mb-8">
                            You have time to <span className="text-indigo-600 dark:text-indigo-400 font-bold">fix your mistakes</span>. Speed is key.
                        </p>
                        <div className="mt-auto bg-indigo-50/50 dark:bg-black/20 rounded-2xl p-5 border border-indigo-100 dark:border-indigo-800/30 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-indigo-500 shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    <span className="material-symbols-outlined text-xl">error_outline</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">AI Strategy</div>
                                    <div className="font-bold text-sm text-gray-900 dark:text-white">Crisis Management</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-indigo-500 shrink-0 transition-transform duration-300 group-hover:scale-105 delay-75">
                                    <span className="material-symbols-outlined text-xl">ads_click</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Focus</div>
                                    <div className="font-bold text-sm text-gray-900 dark:text-white">Weakness Attack</div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-indigo-200/50 dark:bg-indigo-800/30"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white shadow-md shadow-indigo-500/30 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ease-brand-curve delay-100">
                                    <span className="material-symbols-outlined text-xl">emoji_events</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">Your Goal</div>
                                    <div className="font-black text-base text-indigo-700 dark:text-indigo-200">Rank Booster</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div className="relative max-w-4xl mx-auto motion-fade-up">
                <div className="bg-gradient-to-br from-indigo-600 to-hero-primary rounded-[2.5rem] p-8 md:p-14 text-center shadow-2xl shadow-indigo-500/40 overflow-hidden relative border-4 border-indigo-400/30 group cursor-default hover:scale-[1.01] transition-transform duration-400 ease-brand-curve">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjwvc3ZnPg==')]"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-lg animate-float-slow group-hover:bg-white/20 transition-colors duration-300">
                            <span className="material-symbols-outlined text-amber-400 text-4xl drop-shadow-md">insights</span>
                        </div>
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-relaxed max-w-3xl drop-shadow-sm">
                            "Students joining with <span className="bg-indigo-900/40 px-4 py-1.5 rounded-xl border border-indigo-300/30 text-amber-400 font-black whitespace-nowrap shadow-inner transition-colors duration-300 group-hover:bg-indigo-900/60">&lt;90 days</span> improved <span className="text-amber-400 font-black text-5xl mx-1 filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">60+</span> percentile points because we show them what actually matters now."
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
