import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useGamification from '../../hooks/useGamification';

const HeroSection = () => {
    const { streak, isLoaded } = useGamification();

    return (
        <section className="relative w-full overflow-hidden min-h-screen">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full" aria-hidden="true">
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

            {/* Header - Fusion Logo */}
            <header className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex justify-between items-center max-w-md left-1/2 -translate-x-1/2 rounded-b-2xl border-x border-b border-white/50 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60">
                <div className="flex items-center gap-2 group cursor-pointer transition-transform active:scale-95">
                    <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-indigo-600 to-indigo-500 rounded-lg shadow-lg shadow-indigo-500/30 overflow-hidden">
                        <span className="font-display font-black text-white text-lg relative z-10">R</span>
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">ANKAK</span>
                </div>
                <div className="relative group cursor-default">
                    <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full animate-pulse-slow"></div>
                    <div className="relative px-3 py-1.5 rounded-full border border-amber-200/50 text-amber-700 dark:text-amber-300 text-[10px] font-bold tracking-[0.15em] uppercase flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                        </span>
                        Early Access
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center mt-28 px-6 w-full">
                <h1 className="text-[2.5rem] font-black tracking-tight text-slate-900 dark:text-white mb-2 relative inline-block leading-[1.1]">
                    <span className="animate-bounce-in-text inline-block" style={{ animationDelay: '0.1s' }}>The AI That</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient-shift relative inline-block">
                        Actually Knows
                        <svg className="absolute w-full h-2 -bottom-1 left-0 text-indigo-400 opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99999C49.5002 0.500007 154.5 -2.49999 198 6.99999" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
                    </span>
                    <br />
                    <span className="animate-bounce-in-text inline-block" style={{ animationDelay: '0.2s' }}>JEE.</span>
                </h1>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-[280px] leading-relaxed font-medium">
                    Random practice = Random results. <br />
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold relative inline-block mt-1">
                        सही content, सही time पर।
                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-indigo-200 dark:bg-indigo-800 rounded-full"></span>
                    </span>
                </p>
            </div>

            {/* Main Avatar - Lottie Animation */}
            <div className="relative w-full flex justify-center mt-8 mb-8" aria-hidden="true">
                <div className="relative w-72 h-72 z-10 animate-float">
                    <DotLottieReact
                        src="https://lottie.host/934db0fb-ed6c-418c-a68f-853839dc64af/sXAp34Jsh1.lottie"
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-2xl animate-pulse mix-blend-overlay pointer-events-none"></div>
                </div>

                {/* Floating Card 1: Exam Countdown (Top Left) */}
                <div className="absolute top-8 left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-3 rounded-2xl shadow-lg border border-white/40 dark:border-white/10 animate-card-left z-20 scale-[0.8] origin-bottom-right">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                <path className="text-indigo-100 dark:text-indigo-900" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                <path className="text-indigo-500" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                            <span className="absolute text-[8px] font-bold text-indigo-600 dark:text-indigo-400">75%</span>
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Time Left</div>
                            <div className="text-sm font-black text-gray-900 dark:text-white leading-none">145 Days</div>
                        </div>
                    </div>
                </div>

                {/* Floating Card 2: AI Insight (Bottom Right) */}
                <div className="absolute bottom-12 right-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-3 rounded-2xl shadow-lg border border-white/40 dark:border-white/10 animate-card-right z-20 scale-[0.8] origin-top-left w-40" aria-hidden="true">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest flex items-center gap-1">
                            <span className="material-symbols-rounded text-[10px] animate-spin">sync</span>
                            Analyzing
                        </span>
                    </div>
                    <div className="flex justify-between items-end h-4 gap-0.5 px-1">
                        <div className="w-1/5 bg-indigo-300 rounded-t-sm h-[40%] animate-pulse"></div>
                        <div className="w-1/5 bg-indigo-400 rounded-t-sm h-[70%] animate-pulse delay-75"></div>
                        <div className="w-1/5 bg-indigo-500 rounded-t-sm h-[50%] animate-pulse delay-150"></div>
                        <div className="w-1/5 bg-indigo-600 rounded-t-sm h-[90%] animate-pulse delay-200"></div>
                        <div className="w-1/5 bg-indigo-700 rounded-t-sm h-[60%] animate-pulse delay-300"></div>
                    </div>
                </div>

                {/* Badge: Streak (Orbiting) */}
                {isLoaded && (
                    <div className="absolute top-0 right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-gray-800 dark:text-white px-3 py-1.5 rounded-full shadow-lg border border-white/40 dark:border-white/10 animate-float-delayed font-bold text-[10px] flex items-center gap-1.5 z-20 transform rotate-6">
                        <span className="relative flex h-3 w-3 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="text-xs">🔥</span>
                        </span>
                        {streak} Day Streak
                    </div>
                )}
            </div>

            {/* CTA Buttons */}
            <div className="w-full space-y-3 relative z-40 mb-safe px-6 pb-12">
                <button className="relative w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-display font-bold text-[17px] tracking-wide shadow-xl shadow-indigo-500/30 overflow-hidden group hover-liquid active:scale-[0.98]">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite]"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Early Access
                        <span aria-hidden="true" className="material-symbols-rounded text-xl animate-[pulse_1s_ease-in-out_infinite]">bolt</span>
                    </span>
                </button>
                <button className="w-full py-4 rounded-2xl text-indigo-600 dark:text-indigo-300 font-display font-bold text-[17px] flex items-center justify-center gap-2 hover:bg-white/80 active:scale-[0.98] transition-all duration-200 backdrop-blur-sm border border-white/50 dark:border-white/10 hover-liquid">
                    See Rankers
                    <span aria-hidden="true" className="material-symbols-rounded text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
            </div>

            {/* Seamless Transition Mask */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FFFDF5] to-transparent z-20 pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
