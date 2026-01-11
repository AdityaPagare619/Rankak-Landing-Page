import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FocusZoneCard = () => {
    const [liked, setLiked] = useState(false);

    const activeUsers = [
        { name: "Priya", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", color: "from-emerald-400 to-teal-500" },
        { name: "Arjun", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun", color: "from-amber-400 to-orange-500" },
    ];

    return (
        <motion.div
            className="relative w-full aspect-[4/5] max-h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer group font-quicksand shadow-2xl shadow-emerald-100/50"
        >
            {/* Premium Light Background - Live Social Theme */}
            <div className="absolute inset-0 bg-white">
                {/* Soft Gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-[80px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-6 z-10">
                {/* Header: Live Stories */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-100/50 shadow-sm">
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute inset-0 opacity-75"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500 relative"></div>
                        </div>
                        <span className="text-emerald-800 text-[10px] font-black tracking-widest uppercase">Live Focus</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200/50 backdrop-blur-md text-[10px] font-bold text-emerald-700 shadow-sm flex items-center gap-1">
                        <span className="material-symbols-rounded text-xs">group</span>
                        892 Online
                    </div>
                </div>

                {/* Stories Row - Apple Style */}
                <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-4 pl-1">
                    {activeUsers.map((u, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-2 flex-shrink-0 group/user"
                        >
                            <div className={`w-14 h-14 rounded-full p-[3px] bg-gradient-to-tr ${u.color} shadow-lg shadow-gray-200 group-hover/user:scale-110 transition-transform duration-300`}>
                                <div className="w-full h-full rounded-full bg-white p-[2px]">
                                    <img src={u.img} alt={u.name} className="w-full h-full rounded-full bg-gray-50 object-cover" />
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-600 group-hover/user:text-emerald-600 transition-colors">{u.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Featured "Post" Card - Glassmorphism */}
                <div className="mt-auto bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-5 relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />

                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 p-[2px] shadow-md">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Winner" alt="Winner" className="w-full h-full rounded-full bg-white" />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm">Aarav Patel</h4>
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-amber-100 flex items-center justify-center">
                                    <span className="text-[8px]">🎯</span>
                                </span>
                                <p className="text-emerald-600 text-[10px] font-bold">Top 100 Cracked!</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-2 w-full bg-slate-100 rounded-full mb-5 overflow-hidden ring-1 ring-black/5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.4)] relative"
                        >
                            <div className="absolute inset-0 bg-white/30 animate-[shimmer_1s_infinite]"></div>
                        </motion.div>
                    </div>

                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex gap-2">
                            {['🔥', '🎉', '💪'].map((emoji, i) => (
                                <motion.button
                                    key={i}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-base border border-slate-100 shadow-sm hover:shadow-md transition-all hover:bg-slate-50"
                                >
                                    {emoji}
                                </motion.button>
                            ))}
                        </div>
                        <motion.button
                            onClick={() => setLiked(!liked)}
                            whileTap={{ scale: 0.9 }}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${liked ? 'bg-rose-50 text-rose-500 border-rose-100 ring-1 ring-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-white ring-1 ring-slate-200'}`}
                        >
                            <span className={`material-symbols-rounded text-sm ${liked ? 'fill-current animate-bounce' : ''}`}>favorite</span>
                            <span>{liked ? '243' : '242'}</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FocusZoneCard;
