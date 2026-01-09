import React from 'react';

const HowItWorksSection = () => {
    return (
        <div className="w-full relative z-10">
            <main className="min-h-screen flex flex-col items-center justify-center py-24 px-4 md:px-8">
                <div className="text-center max-w-6xl mx-auto mb-20 relative">
                    <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/60 border border-lime-200/60 text-lime-900 font-bold text-xs uppercase tracking-[0.2em] mb-12 backdrop-blur-xl shadow-lg animate-fade-up hover:scale-105 transition-transform duration-300 group cursor-default ring-1 ring-white/50">
                        <span className="material-symbols-outlined text-sm text-lime-600 animate-spin-slow group-hover:text-lime-500 transition-colors" style={{ animationDuration: '10s' }}>star</span>
                        Enchanted Forest of Silent Journeys
                    </div>
                    <h1 className="font-display font-black text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-10 tracking-tighter relative group cursor-default select-none">
                        <div className="absolute inset-0 blur-[100px] bg-lime-100/40 rounded-full scale-110 -z-10 animate-pulse-glow"></div>
                        <span className="block text-indigo-900 bg-clip-text text-transparent bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 opacity-0 animate-bloom-text drop-shadow-sm" style={{ animationDelay: '0.1s' }}>You're Not</span>
                        <span className="block text-indigo-900 opacity-0 animate-bloom-text relative inline-block mt-2" style={{ animationDelay: '0.3s' }}>
                            Alone
                            <span className="absolute -top-10 -right-16 text-lime-400 opacity-20 animate-float material-symbols-outlined text-[100px] -z-10 rotate-12 filter blur-sm">forest</span>
                        </span>
                    </h1>
                    <div className="relative mt-12 mb-20 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-bloom">
                            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-green-700 font-extrabold drop-shadow-sm scale-100 hover:scale-105 transition-transform duration-300 cursor-default">
                                892 students
                            </span>
                            <span className="text-slate-500 opacity-80 font-semibold">
                                are studying right now.
                            </span>
                            <span className="block text-2xl md:text-4xl text-indigo-900 mt-6 font-black opacity-90 tracking-wide">
                                None of them are showing off.
                            </span>
                        </h2>
                    </div>
                    <div className="relative max-w-4xl mx-auto mt-16 group cursor-default perspective-1000 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                        <div className="leaf-scroll-container rounded-leaf px-16 py-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 animate-leaf-rustle transform transition-all duration-700 hover:rotate-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-lime-900/10 bg-white/40 border-white/60">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-40"></div>
                            <span className="material-symbols-outlined text-lime-600 text-5xl animate-sway opacity-80 drop-shadow-sm">spa</span>
                            <p className="text-lime-900 text-xl md:text-3xl font-display font-bold leading-relaxed tracking-wide drop-shadow-sm text-center md:text-left">
                                "Real community. No leaderboards that shame. <br className="hidden md:block" /> Just presence and shared goal."
                            </p>
                            <span className="material-symbols-outlined text-lime-600 text-5xl animate-sway opacity-80 drop-shadow-sm" style={{ animationDelay: '1.5s' }}>psychology_alt</span>
                        </div>
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-40 bg-lime-300/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"></div>
                        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-40 bg-amber-200/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"></div>
                    </div>
                </div>

                <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10 items-stretch">
                    {/* Peer Wins Card */}
                    <div className="stone-glass rounded-organic-xl p-8 md:p-12 group border-t border-white relative overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: '0.8s' }}>
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                            <div className="absolute inset-0 flex flex-col gap-20 animate-particle-swirl opacity-30">
                                <div className="w-96 h-96 bg-lime-200/30 rounded-full blur-3xl mix-blend-overlay"></div>
                                <div className="w-64 h-64 bg-green-200/30 rounded-full blur-3xl self-end mix-blend-overlay"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-12 z-10 relative">
                            <h3 className="font-display font-black text-4xl text-indigo-900 flex items-center gap-6 group/title">
                                <span className="p-4 bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl border border-lime-200 shadow-lg relative overflow-hidden group-hover/title:rotate-12 transition-transform duration-500 ease-out">
                                    <span className="absolute inset-0 bg-white/60 opacity-0 group-hover/title:opacity-100 transition-opacity"></span>
                                    <span className="material-symbols-outlined text-lime-700 text-3xl relative z-10 drop-shadow-sm">emoji_events</span>
                                </span>
                                Peer Wins
                            </h3>
                            <div className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-lime-800 border border-lime-200 uppercase tracking-wide shadow-sm flex items-center gap-2 transform transition-transform hover:scale-105">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
                                </span>
                                Live Feed
                            </div>
                        </div>
                        <div className="relative h-[520px] overflow-hidden mask-gradient-b z-10 pr-2 pb-4">
                            <div className="space-y-6">
                                {/* Win Item 1 */}
                                <div className="victory-glyph p-6 rounded-[2rem] flex gap-5 items-start animate-grow-up group/card origin-bottom hover:border-lime-300 transition-colors">
                                    <div className="relative shrink-0">
                                        <img alt="Student Avatar" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover ring-2 ring-lime-100 group-hover/card:ring-lime-300 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFd_hytbIve2g0VjPGfAo5qZ_NJlIEIWU4DHcYK-qelYxfsVlgimr26cnYuRaLTDoGUn2B6DFjRRq9IMgXXt-EfsRYcQvkJpfnMEDXavYZepyHpFh6Qhi9a_0qMZVpDNOjO9ZEMDrRkbSLxOdOLAFe6RnFgVw91FcnJ53bKXc0Z7LHpQ4qh9we54WrpAqY5ChmxrL-4e9lRYL5GXKtVS8gjV2v9rBMX8bTbifJCNpaTnuZOi3C0HaMYHw4z9D1SIOtCINKrjs8Kus" />
                                        <div className="absolute -bottom-1 -right-1 bg-lime-400 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm group-hover/card:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-[12px] text-white font-bold">bolt</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-indigo-900 text-lg">Arjun K.</span>
                                            <span className="text-xs text-slate-400 font-semibold bg-white/60 px-2 py-0.5 rounded-md">2m ago</span>
                                        </div>
                                        <p className="text-slate-700 text-lg font-medium leading-snug">Went from <span className="text-lime-700 font-black bg-lime-100 px-1.5 py-0.5 rounded text-sm mx-1 shadow-sm">40%</span> to <span className="text-lime-700 font-black bg-lime-100 px-1.5 py-0.5 rounded text-sm mx-1 shadow-sm">72%</span> in Kinematics! 🎉 Finally clicked!</p>
                                    </div>
                                </div>
                                {/* Win Item 2 */}
                                <div className="victory-glyph p-6 rounded-[2rem] flex gap-5 items-start animate-grow-up group/card origin-bottom hover:border-amber-300 transition-colors" style={{ animationDelay: '0.3s' }}>
                                    <div className="relative shrink-0">
                                        <img alt="Student Avatar" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover ring-2 ring-amber-100 group-hover/card:ring-amber-300 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIVPATIvLqHJBjMSbzwJJgTAuc-CSuSx-Ger1HCWNrjYywDuUv2saojQlNNDaNU0U7T1v_dSHhddIfVOaU5Bm3ZopKQ141BGaQGtT_vBt8CHWigJ78h8Aerd3VoL7CbRFLUjdLfdnG15fWw5DYQits7U7-RGMcDiIN-vQWM0aDX93Zt7BKGkdSfGvP-4p2mtR1rF2G_93jtOzGwnTE_47aNGAEW_xHVL-KaYMrWj0KlQl8EuhVN-yD_ige7KB_9gjK5tebJL5eTV8" />
                                        <div className="absolute -bottom-1 -right-1 bg-amber-400 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm group-hover/card:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-[12px] text-white font-bold">self_improvement</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-indigo-900 text-lg">Neha S.</span>
                                            <span className="text-xs text-slate-400 font-semibold bg-white/60 px-2 py-0.5 rounded-md">5m ago</span>
                                        </div>
                                        <p className="text-slate-700 text-lg font-medium leading-snug">Just finished a 5-day streak without burnout. Feeling calm. 🧘‍♀️</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* City Rankings Card */}
                    <div className="stone-glass rounded-organic-xl p-8 md:p-12 group border-t border-white relative overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: '1.0s' }}>
                        <div className="absolute inset-0 bg-gradient-to-bl from-amber-50/50 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse-glow"></div>
                        <div className="flex items-center justify-between mb-10 z-10 relative">
                            <h3 className="font-display font-black text-4xl text-indigo-900 flex items-center gap-6 group/title">
                                <span className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200 shadow-lg relative overflow-hidden group-hover/title:-rotate-6 transition-transform duration-500 ease-out">
                                    <span className="absolute inset-0 bg-white/60 opacity-0 group-hover/title:opacity-100 transition-opacity"></span>
                                    <span className="material-symbols-outlined text-amber-600 text-3xl relative z-10 drop-shadow-sm">location_city</span>
                                </span>
                                City Rankings
                            </h3>
                            <div className="px-5 py-2 bg-amber-50/90 backdrop-blur-md rounded-full text-xs font-bold text-amber-700 border border-amber-200 uppercase tracking-wide shadow-sm flex items-center gap-2 transform transition-transform hover:scale-105">
                                <span className="material-symbols-outlined text-sm animate-pulse">my_location</span>
                                Your Zone
                            </div>
                        </div>
                        <div className="flex-1 relative flex items-center justify-center min-h-[460px] w-full bg-white/40 rounded-[2.5rem] border border-white/60 overflow-hidden shadow-[inset_0_2px_20px_rgba(0,0,0,0.03)] backdrop-blur-md group/map transform transition-all duration-700 hover:shadow-[inset_0_2px_30px_rgba(245,158,11,0.05)]">
                            <div className="absolute inset-0 grid-bg opacity-30 animate-pulse-subtle" style={{ animationDuration: '10s' }}></div>
                            <div className="relative z-20 flex flex-col items-center w-full max-w-sm">
                                <div className="rank-card-bg backdrop-blur-xl p-8 rounded-[2.5rem] border border-amber-100 shadow-[0_20px_40px_-10px_rgba(245,158,11,0.1)] w-full transform transition-all hover:scale-[1.02] duration-500 ring-1 ring-white/60 flex flex-col items-center gap-6 relative overflow-hidden group/inner-card">
                                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5 ring-2 ring-white/80 z-20 -mt-2">
                                        <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                                        Bangalore Zone
                                    </div>
                                    <div className="relative w-full flex flex-col items-center justify-center py-6">
                                        <div className="text-amber-600/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Current Position</div>
                                        <div className="relative z-10 flex items-baseline justify-center">
                                            <span className="text-4xl text-amber-400/80 font-bold mr-1 opacity-60">#</span>
                                            <span className="text-[6.5rem] font-black leading-none text-indigo-900 tracking-tighter drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-br from-indigo-900 to-indigo-600">12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HowItWorksSection;
