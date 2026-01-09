import React from 'react';

const TimelineSection = () => {
    return (
        <div className="w-full relative z-10">
            <main className="min-h-screen py-24 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Local Background Elements (Optional, can rely on global blobs) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-sage-200/20 dark:bg-sage-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-md animate-fade-up">
                        <span className="material-symbols-outlined text-amber-500 text-[18px] animate-spin-slow">hourglass_empty</span>
                        Crisis Mode Reassurance
                    </div>
                    <h1 className="font-display font-black text-6xl md:text-8xl mb-8 tracking-tighter text-slate-900 dark:text-white leading-[0.9] animate-fade-up" style={{ animationDelay: '0.1s' }}>
                        Started late? <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-primary to-lime-500 relative inline-block pb-2">
                            The AI has a 30-day <br className="lg:hidden" /> strategy.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-hero-primary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99999C49.5002 0.500007 154.5 -2.49999 198 6.99999" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
                        </span>
                    </h1>
                    <div className="relative inline-block max-w-3xl mx-auto animate-fade-up opacity-0 mt-6" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        <div className="absolute -left-10 -top-6 text-7xl text-slate-200 dark:text-slate-700 opacity-60 font-serif leading-none select-none">“</div>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed px-4">
                            Doesn't matter if you're starting fresh in 11th or cramming in the final month—the AI has a strategy for <span className="relative inline-block font-bold text-indigo-600 dark:text-indigo-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-indigo-400/30 after:rounded-full">YOUR timeline</span>.
                        </p>
                        <div className="absolute -right-10 -bottom-4 text-7xl text-slate-200 dark:text-slate-700 opacity-60 font-serif leading-none transform rotate-180 select-none">“</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full relative z-10 perspective-1000">
                    {/* Card 1: Fresh Start (Sage) */}
                    <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-[2.5rem] p-8 border border-sage-200 dark:border-sage-800/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sage-100 to-transparent dark:from-sage-900/20 opacity-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="relative z-10 mb-8 flex justify-between items-start">
                            <div className="w-16 h-16 rounded-2xl bg-sage-50 dark:bg-sage-900/30 flex items-center justify-center text-sage-600 dark:text-sage-400 shadow-sm group-hover:rotate-6 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl">eco</span>
                            </div>
                            <div className="px-3 py-1 bg-sage-100 dark:bg-sage-900/50 text-sage-700 dark:text-sage-300 text-[10px] font-black uppercase tracking-widest rounded-lg border border-sage-200 dark:border-sage-700/50">
                                ~450 Days Left
                            </div>
                        </div>
                        <div className="relative h-48 mb-8 bg-sage-50 dark:bg-sage-900/10 rounded-3xl flex items-center justify-center overflow-hidden border border-sage-100 dark:border-sage-800/30 group-hover:bg-sage-100/50 dark:group-hover:bg-sage-900/20 transition-colors duration-500">
                            <div className="relative z-10 flex flex-col items-center animate-float">
                                <span className="material-symbols-outlined text-[7rem] text-sage-600 drop-shadow-xl transform transition-transform duration-500">potted_plant</span>
                            </div>
                        </div>
                        <h3 className="font-display font-black text-3xl text-slate-800 dark:text-white mb-2 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">Fresh Start</h3>
                        <p className="text-sage-600 dark:text-sage-400 font-bold text-xs mb-6 relative z-10 tracking-[0.15em] uppercase">The Growth Spirit</p>
                        <div className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-4 mb-8 border border-slate-100 dark:border-slate-700/50 relative z-10">
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                                "You have time to <span className="text-sage-700 dark:text-sage-300 font-bold bg-sage-100 dark:bg-sage-900/50 px-1 rounded">master concepts deeply</span>. We build unshakeable foundations first."
                            </p>
                        </div>
                        <button className="mt-auto w-full py-4 rounded-2xl bg-sage-500 hover:bg-sage-600 text-white font-bold text-base shadow-lg shadow-sage-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Align Path
                                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>

                    {/* Card 2: Mid-Year Grind (Amber) */}
                    <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-[2.5rem] p-8 border border-amber-200 dark:border-amber-800/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: '0.5s' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-transparent dark:from-amber-900/20 opacity-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="relative z-10 mb-8 flex justify-between items-start">
                            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm group-hover:rotate-6 transition-transform duration-300">
                                <span className="material-symbols-outlined text-4xl">timer</span>
                            </div>
                            <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-[10px] font-black uppercase tracking-widest rounded-lg border border-amber-200 dark:border-amber-700/50">
                                ~150 Days Left
                            </div>
                        </div>
                        <div className="relative h-48 mb-8 bg-amber-50 dark:bg-amber-900/10 rounded-3xl flex items-center justify-center overflow-hidden border border-amber-100 dark:border-amber-800/30 group-hover:bg-amber-100/50 dark:group-hover:bg-amber-900/20 transition-colors duration-500">
                            <div className="relative z-10 flex flex-col items-center animate-float-delayed">
                                <span className="material-symbols-outlined text-[7rem] text-amber-500 drop-shadow-xl transform transition-transform duration-500">lightbulb</span>
                            </div>
                        </div>
                        <h3 className="font-display font-black text-3xl text-slate-800 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Mid-Year Grind</h3>
                        <p className="text-amber-600 dark:text-amber-400 font-bold text-xs mb-6 relative z-10 tracking-[0.15em] uppercase">The Effort Imp</p>
                        <div className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-4 mb-8 border border-slate-100 dark:border-slate-700/50 relative z-10">
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                                "Focus on the <span className="text-amber-700 dark:text-amber-300 font-bold bg-amber-100 dark:bg-amber-900/50 px-1 rounded">high-ROI chapters</span>. We prioritize topics with the best effort-to-score ratio."
                            </p>
                        </div>
                        <button className="mt-auto w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg shadow-amber-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Align Path
                                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>

                    {/* Card 3: Final Sprint (Indigo) */}
                    <div className="group relative bg-indigo-950 rounded-[2.5rem] p-8 border border-indigo-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden flex flex-col animate-fade-up" style={{ animationDelay: '0.7s' }}>
                        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px] mix-blend-screen pointer-events-none"></div>
                        <div className="relative z-10 mb-8 flex justify-between items-start">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">bolt</span>
                            </div>
                            <div className="px-3 py-1 bg-indigo-500/20 text-indigo-100 text-[10px] font-black uppercase tracking-widest rounded-lg border border-indigo-400/30 backdrop-blur-sm">
                                &lt; 30 Days Left
                            </div>
                        </div>
                        <div className="relative h-48 mb-8 bg-indigo-900/40 rounded-3xl flex items-center justify-center overflow-hidden border border-indigo-500/20 shadow-inner group-hover:border-indigo-500/40 transition-colors duration-500">
                            <div className="relative z-10 flex flex-col items-center animate-float">
                                <span className="material-symbols-outlined text-[7rem] text-indigo-300 drop-shadow-[0_0_25px_rgba(99,102,241,0.6)] transform group-hover:scale-110 transition-transform duration-500">rocket_launch</span>
                            </div>
                        </div>
                        <h3 className="font-display font-black text-3xl text-white mb-2 tracking-tight">Final Sprint</h3>
                        <p className="text-indigo-300 font-bold text-xs mb-6 relative z-10 tracking-[0.15em] uppercase">The Sprint Fairy</p>
                        <div className="bg-indigo-900/40 rounded-2xl p-4 mb-8 border border-indigo-500/20 relative z-10 backdrop-blur-sm">
                            <p className="text-indigo-100 text-sm leading-relaxed font-medium">
                                "Stop leaking marks. We drill <span className="text-indigo-200 font-bold border-b border-indigo-400/50">error correction</span> and rapid mock analysis now."
                            </p>
                        </div>
                        <button className="mt-auto w-full py-4 rounded-2xl bg-white text-indigo-900 font-bold text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Align Path
                                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mt-24 relative z-10 animate-fade-up" style={{ animationDelay: '0.9s' }}>
                    <button className="group relative inline-flex items-center justify-center px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-slate-900/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
                        <span className="relative flex items-center gap-3">
                            Get Your AI Strategy
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                    </button>
                    <p className="mt-6 text-slate-400 text-sm font-bold tracking-widest uppercase opacity-70">
                        Free for first 30 days
                    </p>
                </div>
            </main>
        </div>
    );
};

export default TimelineSection;
