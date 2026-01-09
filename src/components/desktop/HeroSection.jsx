import React from 'react';

const HeroSection = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 z-10 flex flex-col gap-10">
                <div className="flex flex-wrap gap-4 animate-float-slow motion-fade-up motion-fade-up-delay-1">
                    <span className="px-5 py-2 bg-gray-200/50 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-xs font-bold border border-gray-300/50 flex items-center gap-2 shadow-sm transition-transform duration-300 hover:scale-105">
                        <span className="material-symbols-outlined text-base">verified</span> Free Forever
                    </span>
                    <span className="px-5 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-xs font-bold border border-orange-200 dark:border-orange-800/50 flex items-center gap-2 shadow-sm transition-transform duration-300 hover:scale-105 delay-75">
                        <span className="material-symbols-outlined text-base">spa</span> No coaching pressure
                    </span>
                    <span className="hidden sm:flex px-5 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-800/50 items-center gap-2 shadow-sm transition-transform duration-300 hover:scale-105 delay-100">
                        <span className="material-symbols-outlined text-base">timelapse</span> Your pace, your choice
                    </span>
                    <span className="hidden sm:flex px-5 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-800/50 items-center gap-2 shadow-sm transition-transform duration-300 hover:scale-105 delay-150">
                        <span className="material-symbols-outlined text-base">trending_up</span> See yourself improve
                    </span>
                </div>
                <div className="space-y-8 motion-fade-up motion-fade-up-delay-2">
                    <h1 className="font-display font-extrabold text-6xl lg:text-[5.5rem] leading-[1.05] text-hero-text-main-light dark:text-white tracking-tight">
                        You know your <span className="text-hero-primary relative inline-block hover:scale-105 transition-transform duration-300 ease-brand-curve">
                            timeline.
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-hero-accent" preserveAspectRatio="none" viewBox="0 0 100 15">
                                <path d="M0 5 Q 25 12 50 5 T 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
                            </svg>
                        </span> <br />
                        We adapt to it.
                    </h1>
                    <p className="text-xl lg:text-2xl text-hero-text-muted-light dark:text-hero-text-muted-dark font-medium leading-relaxed max-w-lg">
                        Smart practice means spending time on what actually improves your rank. Not solving 100 questions. Not watching 10 videos. <span className="text-hero-primary font-bold">Just the 20 that matter for you.</span>
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-start pt-6 motion-scale-pop motion-delay-cards">
                    <button
                        onClick={() => scrollToSection('timeline')}
                        className="w-full sm:w-auto bg-hero-primary text-white font-display font-bold text-lg py-4 px-10 rounded-full shadow-[0_6px_0_0_#3730a3] hover:bg-indigo-600 hover:shadow-[0_4px_0_0_#3730a3] hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none transition-all duration-300 ease-brand-curve flex items-center justify-center gap-3 group"
                    >
                        Start Practicing
                        <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </button>
                    <button
                        onClick={() => scrollToSection('how-it-works')}
                        className="w-full sm:w-auto bg-transparent border-2 border-gray-200 dark:border-gray-600 text-hero-text-muted-light dark:text-hero-text-muted-dark font-display font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-hero-primary/30 hover:text-hero-primary transition-all duration-300 ease-brand-smooth flex items-center justify-center gap-2 group"
                    >
                        View Success Stories
                        <span className="group-hover:translate-x-1 transition-transform duration-300 ease-brand-curve material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>
                <div className="flex items-center gap-6 pt-4 text-sm font-bold text-hero-text-muted-light dark:text-hero-text-muted-dark motion-fade-up motion-fade-up-delay-3">
                    <div className="flex -space-x-3">
                        <img alt="User" className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 transition-transform hover:scale-110 duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnuqYPrqJs2-H3rBz5bW6cFEq4MqS3t88fdzf94YtYeXfsb8Ar0gMw7kGp--VjRZ92Z8Bi0eYsXrzBBfUidynCKFGtvxxg2XjqDlToR8M4C-ZCPal9j1xnnfUsTtgcalEpaOi4vEBn_DP-1hAGm_Zw1l3tOiJ4YEGvThhX7hUP4R0wd0kdpm9HbishNWTBzo9pjBqvZkDLJxmIuWtb3rB-W9Er1mS7xzxMIxIvVtodY_WyJPIYNUXtzZeliWRVYL-7KK27uHY9dEQ" />
                        <img alt="User" className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 transition-transform hover:scale-110 duration-200 delay-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzjdB7XyH1bpQiEtENWH8gz9bWxP5ZkRt_9SdgZhmgwA1O7sUPt85lSsWBkof0NtBULiFkXHBlux4DoeODMknPt8EfOgkQBQXIxmiYQtaCEvLwby3QAjmTwgDtc6tPBUg1oxaKGF3Q0QunKSM0JSSNDFlStfwzVhLUO7SuRuWbM74pfmmzUcLt5B9E-hlDEo3b3gRzUJsVCK5Qu1hScz2O-emetRs2FwlYeaPZCeuHh4B7iaufHb74NmdxLiMrOO9b98F3Y4IXnfw" />
                        <img alt="User" className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 transition-transform hover:scale-110 duration-200 delay-150" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDpRowcAY6Frc4NbK9ekVBKA8Uk3a92067tfe4JRMVDT4zw-jBxCCJfEV5oN58HQDKH_LwEfzPe5E88L3wi68g-Meh71Hyq5dgfqsQeGvgFhVViBlo3y9CAdzV5ngGgCyj7qT4n_Red0mtCktYKI9H0C-mEOw8vXMG9-rutK0FuUZMTP5iao0t19JEPyLjmG-TkzjWyXHX3yPij8v_M2Y8LEhLN0LEMe8bUjihKjFbqnMh0_mUaivTaTKEY_Lgbhw0YY-YvszpLoo" />
                        <div className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-hero-accent flex items-center justify-center text-xs text-black font-bold transition-transform hover:scale-110 duration-200 delay-200">
                            +2k
                        </div>
                    </div>
                    <p className="text-base">Students improving today</p>
                </div>
            </div>

            {/* Right Content / Graphic */}
            <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center perspective-1000 motion-fade-up motion-fade-up-delay-2">
                <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-hero-accent/20 dark:bg-hero-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-hero-primary/10 dark:bg-hero-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg className="w-full h-full opacity-30 dark:opacity-20" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 150 400 C 50 350, 50 150, 200 150 C 350 150, 350 50, 400 50" stroke="#818CF8" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="2"></path>
                    </svg>
                </div>
                <div className="relative z-20 w-[24rem] h-[24rem] flex items-center justify-center animate-float">
                    <div className="w-[20rem] h-[20rem] rounded-full orb-gradient shadow-orb relative overflow-hidden flex items-center justify-center z-10 border border-white/10 ring-1 ring-white/20 transition-transform duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 orb-glow-pattern opacity-20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20"></div>
                        <div className="w-48 h-48 bg-hero-primary/30 rounded-full blur-3xl animate-pulse absolute top-1/4 left-1/4"></div>
                        <div className="relative z-20 w-36 h-36 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]">
                            <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center shadow-inner border border-white/10 group cursor-pointer transition-transform duration-300 hover:rotate-12">
                                <span className="material-symbols-outlined text-white text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">smart_toy</span>
                            </div>
                            <div className="absolute top-5 right-7 w-5 h-5 bg-white/40 rounded-full blur-[1px]"></div>
                        </div>
                    </div>
                    <div className="absolute -left-16 top-24 bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-600 flex items-center gap-4 animate-card-left w-auto min-w-[180px] z-20 hover:scale-105 transition-transform duration-300 ease-brand-curve cursor-default">
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
                            <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-3xl">calendar_month</span>
                        </div>
                        <div>
                            <div className="text-[11px] text-hero-text-muted-light dark:text-hero-text-muted-dark font-bold uppercase tracking-wider mb-0.5">Time Left</div>
                            <div className="text-xl font-display font-extrabold text-hero-text-main-light dark:text-hero-text-main-dark leading-none">145 Days</div>
                        </div>
                    </div>
                    <div className="absolute -right-16 bottom-24 bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-600 flex flex-col items-center gap-3 animate-card-right w-56 z-20 hover:scale-105 transition-transform duration-300 ease-brand-curve cursor-default">
                        <div className="w-full flex justify-between items-center mb-1">
                            <span className="text-[11px] text-hero-text-muted-light dark:text-hero-text-muted-dark font-bold uppercase tracking-wider">Your Path</span>
                            <span className="material-symbols-outlined text-hero-accent text-base">auto_awesome</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
                            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-hero-primary to-hero-secondary w-2/3 rounded-full animate-pulse"></div>
                            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-hero-primary rounded-full z-10 shadow-sm"></div>
                        </div>
                        <div className="flex justify-between w-full mt-2 items-center">
                            <span className="text-xs font-bold text-hero-primary bg-indigo-50 px-3 py-1 rounded-lg">Optics</span>
                            <span className="text-[11px] font-bold text-hero-text-muted-light flex items-center">Next <span className="material-symbols-outlined text-xs ml-0.5">arrow_forward</span></span>
                        </div>
                    </div>
                    <div className="absolute -top-12 right-0 bg-hero-accent text-amber-900 px-5 py-2 rounded-full shadow-lg border-2 border-white/30 animate-float-delayed font-bold text-sm flex items-center gap-1.5 z-30 transform rotate-6 hover:rotate-3 transition-transform duration-300">
                        <span className="material-symbols-outlined text-base">bolt</span> AI Active
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
