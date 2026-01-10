import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HowItWorksSection = () => {
    // Mock Data for Victory Wall
    const [wins, setWins] = useState([
        { id: 1, name: "Arjun K.", action: "unlocked", target: "Rotational Dynamics", tier: "Tier 1", time: "2m ago", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFd_hytbIve2g0VjPGfAo5qZ_NJlIEIWU4DHcYK-qelYxfsVlgimr26cnYuRaLTDoGUn2B6DFjRRq9IMgXXt-EfsRYcQvkJpfnMEDXavYZepyHpFh6Qhi9a_0qMZVpDNOjO9ZEMDrRkbSLxOdOLAFe6RnFgVw91FcnJ53bKXc0Z7LHpQ4qh9we54WrpAqY5ChmxrL-4e9lRYL5GXKtVS8gjV2v9rBMX8bTbifJCNpaTnuZOi3C0HaMYHw4z9D1SIOtCINKrjs8Kus" },
        { id: 2, name: "Neha S.", action: "streak", target: "30-Day Streak 🔥", tier: "Gold", time: "5m ago", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN6GF7kPPP8-1WQknAO3QZ7uSpXH4pEvb4qCU5XwSn0YCXqYVGkK_XM8_JQxLZaz139I20oVlRP7k1zGu9WZZiHq8rPrqCI8CXlJSQxWv8X6m7S16R-_cvczUwPLh6OKCx1YIgkVrIsHdq4IEtELiJUN2z2tlakaPMIOHibfqnK2wBlbSCWL71wybqeoHTXDNtG6kR5DqLMCqEKVEpD5U5nnEoec-NYsDXdEFD1yDUQ8kHsE4hZnxy-l3gBtDSVWId5X8knOQL-is" },
        { id: 3, name: "Rahul M.", action: "mastery", target: "Electrostatics", tier: "92% Mastery", time: "12m ago", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIVPATIvLqHJBjMSbzwJJgTAuc-CSuSx-Ger1HCWNrjYywDuUv2saojQlNNDaNU0U7T1v_dSHhddIfVOaU5Bm3ZopKQ141BGaQGtT_vBt8CHWigJ78h8Aerd3VoL7CbRFLUjdLfdnG15fWw5DYQits7U7-RGMcDiIN-vQWM0aDX93Zt7BKGkdSfGvP-4p2mtR1rF2G_93jtOzGwnTE_47aNGAEW_xHVL-KaYMrWj0KlQl8EuhVN-yD_ige7KB_9gjK5tebJL5eTV8" },
        { id: 4, name: "Priya D.", action: "rank", target: "Top 100 Pune", tier: "City Rank", time: "15m ago", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvyI28JJuU0N6Bxt-3HfCqgHLTFSMHECnPffKV5F6e5b4s9k0n_v8bNczeWkWazz7QZxV5Hht3YtKf0hpnQ0f0ERio4izJBDUULO-CsvJ9d4hJ5729ZPKwMfaGXMqG_8e71Wte62Hn4Obmfeby6H9an-udaupwEjOx1tf9M8aCTnXIi8fUgltuHJ0V1uLGJRaOUqoitu3Hz5DpiPWxd_-ytKBSVt9pDeSTwNVvrB55J-vzzwGFG0osUNOVkdGQ0SThJJdVXaLpOEM" },
        { id: 5, name: "Amit B.", action: "shield", target: "Burnout Prevented", tier: "Rest Mode", time: "22m ago", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPm9Zz_j65ZWsKUJAEqwPdR_K1vFpbVZfDekbAGxUu-42wcFkVE5Cr3Dw3s1LVK2DDR64GXpJiobxleQ0QSDzWPedtwruq30aqaXI-yXWJX5wr36MyHORJHSMDBdJ9NdA068IVxHuD6ytqcd_ac_Pqa29WLCZNLbzRRc6665sGpt1zT_4ToZHsEdFtx6EkNSTOhyDiEOCw2UTVGOm1DA2b0_L_c5T7c4crWgIykOhyj6mAUQE9s5j6hfEpE72QYonyxKPhQxHWP1Y" },
    ]);

    // Auto-scroll effect for Victory Wall
    useEffect(() => {
        const interval = setInterval(() => {
            setWins(prev => {
                const newWins = [...prev];
                const first = newWins.shift();
                newWins.push({ ...first, id: Date.now() }); // Recycle with new ID
                return newWins;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full relative z-10 font-sans text-slate-900 dark:text-white overflow-hidden">
            <main className="min-h-screen flex flex-col items-center justify-center py-24 px-4 md:px-8 relative">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Header Section */}
                <div className="text-center max-w-5xl mx-auto mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-300 font-bold text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-xl shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Live Ecosystem
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 relative"
                    >
                        You Are <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">Not Alone.</span>

                        {/* Live Activity Visualization Behind Text */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20">
                            <div className="w-[120%] h-[120%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
                            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500 animate-ping-slow" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-purple-500 animate-ping-slow" style={{ animationDelay: '1s' }} />
                            </svg>
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">892 students</span> are studying right now. <br />
                        None of them are showing off. All of them are growing.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 items-stretch">

                    {/* CARD 1: THE VICTORY WALL (High Density Feed) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] transform rotate-[-2deg] group-hover:rotate-[-3deg] transition-transform duration-500 border border-lime-100 dark:border-slate-700"></div>

                        <div className="relative h-full bg-white dark:bg-[#0B0A16] rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                            {/* Header: Silent Library Stats */}
                            <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md z-20">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-lime-100 dark:bg-lime-900/30 rounded-xl text-lime-600 dark:text-lime-400">
                                            <span className="material-icons-round text-xl">library_books</span>
                                        </div>
                                        <div>
                                            <h3 className="font-black text-xl text-slate-900 dark:text-white">Silent Library</h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Presence</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-lime-600 dark:text-lime-400 tabular-nums">892</div>
                                        <div className="flex items-center justify-end gap-1 text-[10px] font-bold text-lime-600/60 dark:text-lime-400/60 uppercase tracking-wide">
                                            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span> Online
                                        </div>
                                    </div>
                                </div>
                                {/* Subject Heatmap Mini */}
                                <div className="flex gap-1 mt-4 h-1.5 w-full rounded-full overflow-hidden opacity-80">
                                    <div className="h-full bg-blue-500 w-[40%]" title="Physics: 312"></div>
                                    <div className="h-full bg-amber-500 w-[35%]" title="Math: 280"></div>
                                    <div className="h-full bg-purple-500 w-[25%]" title="Chemistry: 179"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5 uppercase tracking-wider">
                                    <span>Physics</span>
                                    <span>Math</span>
                                    <span>Chem</span>
                                </div>
                            </div>

                            {/* Scrolling Feed */}
                            <div className="flex-1 relative overflow-hidden p-6 mask-gradient-y">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                <div className="space-y-4">
                                    <AnimatePresence initial={false}>
                                        {wins.map((win, i) => (
                                            <motion.div
                                                key={win.id}
                                                layout
                                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/50 flex items-center gap-4 group/card hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
                                            >
                                                <div className="relative">
                                                    <img src={win.avatar} alt={win.name} className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-700 object-cover" />
                                                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] text-white ${win.action === 'unlocked' ? 'bg-blue-500' :
                                                            win.action === 'streak' ? 'bg-orange-500' :
                                                                win.action === 'rank' ? 'bg-purple-500' :
                                                                    win.action === 'shield' ? 'bg-emerald-500' : 'bg-indigo-500'
                                                        }`}>
                                                        <span className="material-icons-round text-[10px]">
                                                            {win.action === 'unlocked' ? 'lock_open' :
                                                                win.action === 'streak' ? 'local_fire_department' :
                                                                    win.action === 'rank' ? 'emoji_events' :
                                                                        win.action === 'shield' ? 'shield' : 'star'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-baseline mb-0.5">
                                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate">{win.name}</h4>
                                                        <span className="text-[10px] font-bold text-slate-400">{win.time}</span>
                                                    </div>
                                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                                                        {win.action === 'unlocked' && <span>Unlocked <span className="font-bold text-blue-600 dark:text-blue-400">{win.target}</span></span>}
                                                        {win.action === 'streak' && <span>Hit <span className="font-bold text-orange-600 dark:text-orange-400">{win.target}</span></span>}
                                                        {win.action === 'mastery' && <span>Achieved <span className="font-bold text-indigo-600 dark:text-indigo-400">{win.target}</span> in {win.tier}</span>}
                                                        {win.action === 'rank' && <span>Cracked <span className="font-bold text-purple-600 dark:text-purple-400">{win.target}</span></span>}
                                                        {win.action === 'shield' && <span>Activated <span className="font-bold text-emerald-600 dark:text-emerald-400">{win.target}</span></span>}
                                                    </p>
                                                </div>
                                                {/* Reaction Button Mockup */}
                                                <button className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                                    <span className="material-icons-round text-sm">favorite_border</span>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Anonymous • Safe • Motivating</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: THE COMMAND CENTER (City Rankings & Ghost Mode) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] transform rotate-[2deg] group-hover:rotate-[3deg] transition-transform duration-500 border border-amber-100 dark:border-slate-700"></div>

                        <div className="relative h-full bg-white dark:bg-[#0B0A16] rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                            {/* Header: Zone Info */}
                            <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md z-20">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                            <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em]">Command Center</span>
                                        </div>
                                        <h3 className="font-black text-3xl text-slate-900 dark:text-white">Pune Zone</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400">Current Rank</div>
                                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600">#12</div>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="flex-1 p-6 grid grid-cols-2 gap-4 content-start relative">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                                {/* Ghost Mode Card */}
                                <div className="col-span-2 bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden group/ghost">
                                    <div className="flex justify-between items-center mb-4 relative z-10">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                                <span className="material-icons-round text-sm">visibility_off</span>
                                            </div>
                                            <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">Ghost Mode</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded">Top 1000 Pace</span>
                                    </div>
                                    {/* Simulated Graph */}
                                    <div className="h-24 w-full flex items-end gap-1 relative z-10">
                                        {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                                className="flex-1 bg-purple-200 dark:bg-purple-900/30 rounded-t-sm relative group-hover/ghost:bg-purple-300 transition-colors"
                                            >
                                                {/* Your Pace Overlay */}
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h - 10}%` }}
                                                    transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                                                    className="absolute bottom-0 left-0 w-full bg-purple-500 rounded-t-sm opacity-80"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-2 right-2 text-[10px] font-bold text-purple-500">+15% vs Avg</div>
                                </div>

                                {/* Burnout Shield */}
                                <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800/30 flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-200/50 rounded-full blur-xl"></div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-icons-round text-emerald-500 text-lg">shield</span>
                                        <span className="font-bold text-slate-700 dark:text-slate-200 text-xs">Burnout Shield</span>
                                    </div>
                                    <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">85%</div>
                                    <div className="w-full h-1.5 bg-emerald-200 dark:bg-emerald-900/50 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full w-[85%] bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <p className="text-[10px] font-bold text-emerald-600/70 dark:text-emerald-400/70 mt-2">Optimal Zone</p>
                                </div>

                                {/* Next Target */}
                                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-5 border border-amber-100 dark:border-amber-800/30 flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-200/50 rounded-full blur-xl"></div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-icons-round text-amber-500 text-lg">track_changes</span>
                                        <span className="font-bold text-slate-700 dark:text-slate-200 text-xs">Next Target</span>
                                    </div>
                                    <div className="text-2xl font-black text-amber-600 dark:text-amber-400">#10</div>
                                    <p className="text-[10px] font-bold text-amber-600/70 dark:text-amber-400/70 mt-auto">150 XP away</p>
                                    <button className="mt-2 w-full py-1 bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-bold rounded-lg transition-colors">
                                        Push Rank
                                    </button>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Healthy Competition • Local Focus</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
};

export default HowItWorksSection;
