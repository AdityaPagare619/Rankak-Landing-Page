import React, { useEffect, useRef } from 'react';

const DashboardSection = () => {
    const progressCardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

        const animatedElements = document.querySelectorAll('.scroll-revealer, .animate-fade-up');
        animatedElements.forEach(el => observer.observe(el));

        // Re-trigger bar animations when card comes into view
        if (progressCardRef.current) {
            const barObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.bar-anim');
                        bars.forEach(bar => {
                            bar.style.animationName = 'none';
                            // Trigger reflow
                            void bar.offsetHeight;
                            bar.style.animationName = 'barGrow';
                        });
                        const path = entry.target.querySelector('.path-anim');
                        if (path) {
                            path.style.animationName = 'none';
                            void path.offsetHeight;
                            path.style.animationName = 'dashDraw';
                        }
                    }
                });
            }, { threshold: 0.3 });
            barObserver.observe(progressCardRef.current);
        }

        // Tilt Effect logic for cards
        const tiltCards = document.querySelectorAll('.tilt-card');
        tiltCards.forEach(card => {
            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -2; // Max rotation deg
                const rotateY = ((x - centerX) / centerX) * 2;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
            };

            const handleMouseLeave = () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            };

            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup event listeners
            return () => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="w-full relative z-10 transition-colors duration-700 overflow-x-hidden selection:bg-indigo-500 selection:text-white scroll-smooth font-body">
            <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center">

                <div className="max-w-5xl mx-auto text-center mb-24 relative z-10 perspective-1000">
                    <h1 className="text-6xl md:text-8xl font-black text-gray-800 dark:text-white mb-10 tracking-tight drop-shadow-sm flex items-center justify-center gap-4 flex-wrap hover:scale-[1.01] transition-transform duration-500 cursor-default">
                        <span className="stagger-word text-indigo-600 dark:text-indigo-400 hover:text-[#5b3ee8] transition-colors duration-300">Stop</span>
                        <span className="stagger-word text-amber-500 relative">
                            Grinding
                            <svg className="absolute -top-8 -right-10 w-12 h-12 text-yellow-400 animate-bounce-subtle" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"></path></svg>
                        </span>
                        <span className="stagger-word text-[#3C3C3C] dark:text-slate-200">Blindly.</span>
                    </h1>
                    <div className="relative inline-block max-w-3xl mx-auto mt-8 group/quote">
                        <div className="absolute -left-8 -top-8 bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-20 animate-[bounce_3s_infinite] group-hover/quote:animate-none group-hover/quote:rotate-12 transition-transform duration-300">
                            <span className="material-symbols-outlined text-white text-4xl">format_quote</span>
                        </div>
                        <div className="whisper-bubble p-10 md:p-14 text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed animate-grow-in origin-top glass-panel border-white/50 dark:border-white/10 backdrop-blur-md bg-white/60 dark:bg-slate-800/60">
                            You don't need 10 hours. You need
                            <span className="font-bold text-indigo-600 dark:text-indigo-400 relative inline-block mx-1 hover:scale-105 transition-transform cursor-pointer group/highlight">
                                2 hours of *right* practice.
                                <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-amber-400 rounded-full opacity-80 group-hover/highlight:w-[110%] group-hover/highlight:-left-[5%] transition-all duration-300"></div>
                            </span>
                            We analyze your brain, not just your answers.
                        </div>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto mb-32 relative z-10 px-4 w-full">
                    <div className="hidden lg:block absolute top-[100px] left-10 right-10 h-[200px] -z-10 pointer-events-none opacity-60">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 300">
                            <path className="constellation-path" d="M100,80 Q350,250 600,80 T1100,80" fill="none" stroke="#CBD5E1" strokeLinecap="round" strokeWidth="4"></path>
                            <circle cx="100" cy="80" fill="#CBD5E1" r="4"></circle>
                            <circle cx="600" cy="80" fill="#CBD5E1" r="4"></circle>
                            <circle cx="1100" cy="80" fill="#CBD5E1" r="4"></circle>
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
                        {/* Morning Scroll */}
                        <div className="group relative flex flex-col items-center scroll-revealer" style={{ transitionDelay: '0ms' }}>
                            <div className="relative w-48 h-48 mb-10 cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 z-10">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-orange-400 shadow-dash-globe-amber animate-unfurl flex items-center justify-center overflow-hidden ring-4 ring-white/30 backdrop-blur-sm">
                                    <div className="orb-shine"></div>
                                    <div className="relative z-10 transition-transform duration-500 group-hover:rotate-90">
                                        <span className="material-symbols-outlined text-7xl text-white drop-shadow-md animate-[spin_12s_linear_infinite]">wb_sunny</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-rune bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 dark:border-white/10 relative w-full max-w-[280px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group/card">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-amber-600 uppercase tracking-wider bg-amber-50 dark:bg-amber-900/30 px-3 py-1.5 rounded-lg">Analysis</span>
                                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 group-hover/card:text-amber-500 transition-colors"><span className="material-symbols-outlined text-base">bolt</span>+15 XP</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight mb-2 group-hover/card:text-amber-600 transition-colors">Real-Time Weakness Detector</h3>
                                <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">"Did you panic in Physics?" We catch what you missed.</p>
                            </div>
                        </div>

                        {/* Lunch Break */}
                        <div className="group relative flex flex-col items-center mt-8 lg:mt-32 scroll-revealer" style={{ transitionDelay: '150ms' }}>
                            <div className="relative w-48 h-48 mb-10 cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 z-10">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400 via-green-400 to-green-500 shadow-dash-globe-sage animate-unfurl flex items-center justify-center overflow-hidden ring-4 ring-white/30 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                                    <div className="orb-shine"></div>
                                    <div className="relative z-10 animate-bounce-wild group-hover:animate-bounce">
                                        <span className="material-symbols-outlined text-7xl text-white drop-shadow-md">lunch_dining</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-rune bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 dark:border-white/10 relative w-full max-w-[280px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group/card">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-green-600 uppercase tracking-wider bg-green-50 dark:bg-green-900/30 px-3 py-1.5 rounded-lg">Protection</span>
                                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 group-hover/card:text-green-500 transition-colors"><span className="material-symbols-outlined text-base">local_fire_department</span>Streak</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight mb-2 group-hover/card:text-green-600 transition-colors">Exam-Level Accuracy</h3>
                                <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">No easy questions. Only what appears in the exam.</p>
                            </div>
                        </div>

                        {/* Deep Dive */}
                        <div className="group relative flex flex-col items-center scroll-revealer" style={{ transitionDelay: '300ms' }}>
                            <div className="relative w-48 h-48 mb-10 cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 z-10">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-violet-600 shadow-dash-globe-indigo animate-unfurl flex items-center justify-center overflow-hidden ring-4 ring-white/30 backdrop-blur-sm" style={{ animationDelay: '0.4s' }}>
                                    <div className="orb-shine"></div>
                                    <div className="relative z-10 animate-pulse-slow group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-7xl text-white drop-shadow-md">lightbulb</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-rune bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 dark:border-white/10 relative w-full max-w-[280px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group/card">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-indigo-500 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg">Depth</span>
                                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 group-hover/card:text-indigo-500 transition-colors"><span className="material-symbols-outlined text-base">stars</span>Level Up</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight mb-2 group-hover/card:text-indigo-600 transition-colors">Concept Clarity</h3>
                                <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Don't just see the solution. Understand the *why*.</p>
                            </div>
                        </div>

                        {/* Sleep Ritual */}
                        <div className="group relative flex flex-col items-center mt-8 lg:mt-32 scroll-revealer" style={{ transitionDelay: '450ms' }}>
                            <div className="relative w-48 h-48 mb-10 cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 z-10">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-teal-300 to-teal-400 shadow-dash-globe-cool animate-unfurl flex items-center justify-center overflow-hidden ring-4 ring-white/30 backdrop-blur-sm" style={{ animationDelay: '0.6s' }}>
                                    <div className="orb-shine"></div>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-7xl text-white drop-shadow-md animate-float-dash-delayed group-hover:scale-110 transition-transform">cloud</span>
                                        <span className="absolute top-0 right-[-10px] text-white font-bold text-sm animate-float-dash">z</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-rune bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 dark:border-white/10 relative w-full max-w-[280px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group/card">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-teal-600 uppercase tracking-wider bg-teal-50 dark:bg-teal-900/30 px-3 py-1.5 rounded-lg">Rest</span>
                                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 group-hover/card:text-teal-500 transition-colors"><span className="material-symbols-outlined text-base">lock</span>Saved</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight mb-2 group-hover/card:text-teal-600 transition-colors">Burnout Shield</h3>
                                <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">"Go sleep. You're overexerted." We protect your energy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto relative z-20 perspective-1000 w-full">
                    <div className="crystal-orb-bg bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl p-10 md:p-16 transition-all duration-700 hover:shadow-2xl relative overflow-hidden group/card transform hover:-translate-y-2 tilt-card rounded-[3rem] border border-white/50 dark:border-white/10" id="daily-progress" ref={progressCardRef}>
                        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-6 relative z-10">
                            <div className="animate-fade-up">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Daily Progress</h2>
                                <p className="text-xl font-medium text-gray-500 dark:text-gray-400">Mastery at a glance</p>
                            </div>
                            <div className="flex flex-col w-full md:w-80 mt-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
                                <div className="flex justify-between w-full text-xs font-bold uppercase tracking-wider mb-2 text-indigo-600 dark:text-indigo-400">
                                    <span className="flex items-center gap-1 transition-transform group-hover/card:scale-105 duration-300 cursor-pointer"><span className="material-symbols-outlined text-sm animate-bounce-subtle text-yellow-500">trophy</span> Rookie II</span>
                                    <span className="text-gray-400 group-hover/card:text-gray-600 dark:group-hover/card:text-gray-300 transition-colors">1875 / 2500 XP</span>
                                </div>
                                <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative shadow-inner">
                                    <div className="absolute top-0 left-0 h-full w-[75%] bg-[#FFC800] rounded-full shadow-[0_0_15px_rgba(255,200,0,0.6)] transition-all duration-1000 ease-out group-hover/card:w-[78%]">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                            <div className="md:col-span-7 flex flex-col justify-between space-y-8">
                                <div className="bg-gray-50/50 dark:bg-slate-900/50 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl transition-all duration-500 group/bars animate-fade-up" style={{ animationDelay: '200ms' }}>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">Subject Accuracy <span className="material-symbols-outlined text-sm">info</span></h4>
                                    <div className="flex items-end justify-between flex-grow px-4 gap-6 h-56">
                                        <div className="w-full flex flex-col items-center gap-3 h-full justify-end hover-lift cursor-pointer group/bar1">
                                            <div className="relative w-full rounded-2xl bg-[#A2E665] shadow-sm bar-anim transition-all duration-300 group-hover/bar1:shadow-lg group-hover/bar1:bg-[#91d654]" style={{ height: '35%', animationDelay: '0.1s' }}>
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover/bar1:opacity-100 transition-all duration-300 -mb-2 transform translate-y-2 group-hover/bar1:translate-y-0">35%</div>
                                            </div>
                                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 group-hover/bar1:text-gray-800 dark:group-hover/bar1:text-white transition-colors">Phys</span>
                                        </div>
                                        <div className="w-full flex flex-col items-center gap-3 h-full justify-end hover-lift cursor-pointer group/bar2">
                                            <div className="relative w-full rounded-2xl bg-[#84CC16] shadow-sm bar-anim transition-all duration-300 group-hover/bar2:shadow-lg group-hover/bar2:bg-[#72b313]" style={{ height: '60%', animationDelay: '0.3s' }}>
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover/bar2:opacity-100 transition-all duration-300 -mb-2 transform translate-y-2 group-hover/bar2:translate-y-0">60%</div>
                                            </div>
                                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 group-hover/bar2:text-gray-800 dark:group-hover/bar2:text-white transition-colors">Chem</span>
                                        </div>
                                        <div className="w-full flex flex-col items-center gap-3 h-full justify-end hover-lift cursor-pointer group/bar3">
                                            <div className="relative w-full rounded-2xl bg-[#58CC02] shadow-dash-bar-glow bar-anim transition-all duration-300 group-hover/bar3:shadow-green-400/50 group-hover/bar3:bg-[#4ab302]" style={{ height: '85%', animationDelay: '0.5s' }}>
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover/bar3:opacity-100 transition-all duration-300 -mb-2 transform translate-y-2 group-hover/bar3:translate-y-0">85%</div>
                                            </div>
                                            <span className="text-sm font-bold text-gray-800 dark:text-white group-hover/bar3:text-indigo-600 transition-colors">Math</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#EEF2FF] dark:bg-indigo-900/20 rounded-[2rem] p-6 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-between hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-indigo-200 cursor-pointer group/growth animate-fade-up" style={{ animationDelay: '300ms' }}>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase text-indigo-400 tracking-wider mb-1">Growth</span>
                                        <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-2 group-hover/growth:translate-x-1 transition-transform">
                                            +12%
                                            <span className="material-symbols-outlined text-2xl animate-bounce-subtle text-indigo-500">trending_up</span>
                                        </span>
                                    </div>
                                    <div className="h-16 w-40 relative overflow-hidden">
                                        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 30" width="100%">
                                            <defs>
                                                <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                                                    <stop offset="0%" stopColor="#818CF8"></stop>
                                                    <stop offset="100%" stopColor="#4F46E5"></stop>
                                                </linearGradient>
                                            </defs>
                                            <path className="path-anim" d="M0 28 C 20 28, 40 20, 50 15 C 60 10, 80 5, 100 2" fill="none" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="4"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-8 bg-white dark:bg-slate-800 px-6 py-3 rounded-full text-sm font-bold text-gray-500 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                                    <span>Top <span className="text-orange-500 font-extrabold">5%</span> of students</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '600ms' }}>
                            <button className="momentum-stone relative inline-flex items-center justify-center px-16 py-6 bg-[#6B4EF8] text-white font-extrabold text-2xl rounded-2xl overflow-hidden group hover:bg-[#5b3ee8] transition-all duration-300 shadow-dash-soft hover:shadow-dash-glow">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
                                <span className="relative flex items-center gap-3">
                                    Continue Your Day
                                    <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform font-bold">arrow_forward</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardSection;
