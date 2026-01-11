import React from 'react';
import { motion } from 'framer-motion';

const CommandCenterCard = () => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative w-full aspect-[4/5] max-h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer group font-quicksand shadow-2xl shadow-indigo-100/50"
        >
            {/* Premium Light Background - Stats Theme */}
            <div className="absolute inset-0 bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

                {/* Animated Grid Floor - Subtle */}
                <div className="absolute bottom-0 left-0 w-full h-[150%] bg-[linear-gradient(to_right,#6366f11a_1px,transparent_1px),linear-gradient(to_bottom,#6366f11a_1px,transparent_1px)] bg-[size:24px_24px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)] opacity-20" />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-indigo-200/30 rounded-full blur-[60px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-[60px]" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-6 z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-1 mb-1">
                            <span className="material-symbols-rounded text-[10px] text-indigo-400">dns</span>
                            <p className="text-indigo-400 text-[10px] font-black tracking-widest uppercase">Command Center</p>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Pune Zone</h3>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-indigo-100 flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-rounded text-indigo-500">hub</span>
                    </div>
                </div>

                {/* 3D Map/Radar Visualization - Light Theme */}
                <div className="flex-1 relative mb-4 perspective-1000">
                    <motion.div
                        initial={{ rotateX: 20, rotateY: -10 }}
                        animate={{ rotateX: [20, 25, 20], rotateY: [-10, 10, -10] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full bg-white/60 border border-white rounded-[2rem] backdrop-blur-md relative overflow-hidden flex items-center justify-center shadow-inner ring-1 ring-indigo-50"
                    >
                        {/* Radar Circles */}
                        {[1, 2, 3].map((r) => (
                            <div key={r} className={`absolute border border-indigo-500/${15 - r * 3} rounded-full`}
                                style={{ width: `${r * 30}%`, height: `${r * 30}%` }}
                            />
                        ))}

                        {/* Central Node */}
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/30 animate-float">
                                <span className="text-2xl font-black text-white">#12</span>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shadow-sm">Your Rank</span>
                            </div>
                        </div>

                        {/* Floating Nodes */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-6 right-10 w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-md"
                        >
                            <span className="material-symbols-rounded text-emerald-500 text-sm">shield</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-10 left-10 w-9 h-9 rounded-xl bg-white border border-amber-100 flex items-center justify-center shadow-md"
                        >
                            <span className="material-symbols-rounded text-amber-500 text-sm">bolt</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Row - Glass Cards */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/80 border border-white rounded-2xl p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Burnout Shield</span>
                        <div className="flex items-end gap-1">
                            <span className="text-xl font-black text-emerald-500">85%</span>
                            <span className="text-[9px] text-emerald-600/70 mb-1 bg-emerald-50 px-1.5 rounded font-bold">Optimal</span>
                        </div>
                    </div>
                    <div className="bg-white/80 border border-white rounded-2xl p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Next Target</span>
                        <div className="flex items-end gap-1">
                            <span className="text-xl font-black text-amber-500">#10</span>
                            <span className="text-[9px] text-amber-600/70 mb-1 bg-amber-50 px-1.5 rounded font-bold">+159 XP</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CommandCenterCard;
