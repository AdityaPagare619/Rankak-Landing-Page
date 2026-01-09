import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-[100dvh] bg-s3-bg-light dark:bg-background-dark text-slate-800 dark:text-white font-body antialiased overflow-hidden selection:bg-s3-primary/20 selection:text-s3-primary flex flex-col items-center justify-between">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-s3-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[40%] left-[20%] w-72 h-72 bg-s3-accent/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" style={{ animationDelay: '4s' }}></div>

                <svg className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20" preserveAspectRatio="none">
                    <path className="blur-2xl animate-pulse-slow" d="M-50,0 C100,150 20,400 150,600 C280,800 100,900 200,1200" fill="none" stroke="url(#streamGradient)" strokeWidth="80"></path>
                    <path className="opacity-60" d="M-50,0 C100,150 20,400 150,600 C280,800 100,900 200,1200" fill="none" stroke="url(#streamGradient)" strokeDasharray="15 25" strokeWidth="2"></path>
                    <defs>
                        <linearGradient id="streamGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1"></stop>
                            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4"></stop>
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Restored Header */}
            <header className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex justify-between items-center max-w-md left-1/2 -translate-x-1/2 rounded-b-2xl border-x border-b border-white/50">
                <div className="flex items-center gap-3 group cursor-pointer transition-transform active:scale-95">
                    <div className="relative w-9 h-9 flex items-center justify-center bg-gradient-to-tr from-indigo-50 to-indigo-100 rounded-xl overflow-hidden shadow-inner border border-white/50">
                        <span className="material-icons-round text-s3-primary text-xl relative z-10 animate-[pulse_3s_ease-in-out_infinite]">auto_awesome</span>
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-s3-primary transition-colors">RANKAK</span>
                </div>
                <div className="relative group cursor-default">
                    <div className="absolute inset-0 bg-s3-accent/20 blur-md rounded-full animate-pulse-slow"></div>
                    <div className="relative px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-s3-accent/40 text-amber-700 dark:text-amber-300 text-[10px] font-bold tracking-[0.15em] uppercase flex items-center gap-2 shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-s3-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-s3-accent"></span>
                        </span>
                        Early Access
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center mt-24">
                <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2 relative inline-block">
                    RANKAK
                    <span className="absolute -top-1 -right-4 text-2xl animate-[ping_2s_ease-in-out_infinite] opacity-40 text-purple-400">✨</span>
                </h1>
                <div className="flex items-center justify-center gap-4 py-2 opacity-60">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent via-s3-primary to-transparent"></span>
                    <span className="material-symbols-outlined text-[12px] text-s3-primary animate-[spin_4s_linear_infinite]">star</span>
                    <span className="h-px w-12 bg-gradient-to-l from-transparent via-s3-primary to-transparent"></span>
                </div>
                <p className="text-[clamp(18px,5vw,22px)] font-medium text-slate-600 dark:text-slate-300 max-w-xs mx-auto leading-relaxed tracking-wide">
                    Rank Up JEE/NEET With Rankak
                </p>
            </div>

            {/* Center Visuals */}
            <div className="flex-1 w-full relative flex flex-col justify-end items-center mt-4">
                <div className="relative flex-1 w-full flex items-center justify-center min-h-[280px]">
                    {/* Main Floating Card */}
                    <div className="relative w-64 h-64 z-20 cursor-pointer group touch-manipulation">
                        <div className="absolute inset-0 bg-indigo-400 rounded-full blur-[60px] scale-0 opacity-0 group-active:scale-150 group-active:opacity-40 transition-all duration-500 ease-out"></div>
                        <div className="w-full h-full relative flex flex-col items-center justify-center animate-bounce-subtle group-active:scale-95 transition-transform duration-200">
                            <div className="w-48 h-56 bg-gradient-to-b from-white/90 to-indigo-50/90 dark:from-slate-800/90 dark:to-slate-900/90 rounded-[3rem] shadow-soft dark:shadow-glow border-4 border-white dark:border-indigo-500/30 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="flex gap-5 mb-4 z-10">
                                    <div className="w-4 h-4 bg-s3-accent rounded-full shadow-gold-glow animate-[pulse_4s_ease-in-out_infinite]"></div>
                                    <div className="w-4 h-4 bg-s3-accent rounded-full shadow-gold-glow animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
                                </div>
                                <span className="material-symbols-outlined text-[80px] text-s3-primary drop-shadow-lg z-10 transition-transform group-hover:-rotate-3">school</span>
                                <div className="absolute bottom-6 w-16 h-1.5 bg-indigo-200 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
                            </div>
                            <div className="w-28 h-4 bg-indigo-900/10 rounded-[100%] blur-md mt-6 animate-[pulse_3s_ease-in-out_infinite]"></div>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30 pr-1">
                        <button className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] border border-indigo-50 dark:border-indigo-900 flex items-center justify-center text-s3-accent hover:scale-110 active:scale-90 transition-all duration-300 animate-float" style={{ animationDelay: '0.1s' }}>
                            <span className="material-symbols-outlined text-[24px]">emoji_events</span>
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] border border-indigo-50 dark:border-indigo-900 flex items-center justify-center text-s3-primary hover:scale-110 active:scale-90 transition-all duration-300 animate-float" style={{ animationDelay: '0.6s' }}>
                            <span className="material-symbols-outlined text-[24px]">psychology</span>
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] border border-indigo-50 dark:border-indigo-900 flex items-center justify-center text-s3-success hover:scale-110 active:scale-90 transition-all duration-300 animate-float" style={{ animationDelay: '1.1s' }}>
                            <span className="material-symbols-outlined text-[24px]">track_changes</span>
                        </button>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="w-full space-y-4 relative z-40 mt-6 mb-safe px-6 pb-6">
                    <button className="relative w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#7c3aed] text-white font-display font-semibold text-[17px] tracking-wide shadow-lg overflow-hidden group active:scale-[0.98] transition-all duration-200">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite]"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Start Free Trial
                            <span className="material-symbols-outlined text-xl animate-[pulse_1s_ease-in-out_infinite]">bolt</span>
                        </span>
                    </button>
                    <button className="w-full py-4 rounded-xl bg-indigo-50/80 dark:bg-slate-800/50 text-[#4f46e5] dark:text-indigo-300 font-display font-semibold text-[17px] flex items-center justify-center gap-2 hover:bg-indigo-100 active:scale-[0.98] transition-all duration-200 backdrop-blur-sm">
                        View Ascent Records
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
