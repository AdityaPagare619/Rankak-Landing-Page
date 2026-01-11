import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 overflow-visible">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 z-10 flex flex-col gap-10">
                {/* Badges - Floating with subtle parallax feel */}
                <div className="flex flex-wrap gap-4 animate-float-slow motion-fade-up motion-fade-up-delay-1">
                    <span className="px-5 py-2 bg-white/60 backdrop-blur-md text-gray-800 rounded-full text-xs font-bold border border-white/50 flex items-center gap-2 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/80">
                        <span className="material-symbols-outlined text-base text-indigo-500">verified</span> 100% Exam Level
                    </span>
                    <span className="px-5 py-2 bg-amber-50/60 backdrop-blur-md text-amber-700 rounded-full text-xs font-bold border border-amber-100/50 flex items-center gap-2 shadow-[0_8px_16px_-6px_rgba(251,191,36,0.1)] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-amber-50/80">
                        <span className="material-symbols-outlined text-base">school</span> घर बैठे Coaching
                    </span>
                    <span className="hidden sm:flex px-5 py-2 bg-indigo-50/60 backdrop-blur-md text-indigo-700 rounded-full text-xs font-bold border border-indigo-100/50 items-center gap-2 shadow-[0_8px_16px_-6px_rgba(99,102,241,0.1)] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-50/80">
                        <span className="material-symbols-outlined text-base">timelapse</span> Backlog? No Problem
                    </span>
                </div>

                {/* Headline - Polished Typography & Micro-interactions */}
                <div className="space-y-8 motion-fade-up motion-fade-up-delay-2">
                    <h1 className="font-display font-extrabold text-5xl lg:text-[5.5rem] leading-[1.05] text-gray-900 tracking-tight drop-shadow-sm">
                        <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default">The</span>{' '}
                        <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default">AI</span>{' '}
                        <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default">That</span>{' '}
                        <span className="text-hero-primary relative inline-block hover:scale-105 transition-transform duration-300 ease-brand-curve">
                            Actually
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-hero-accent opacity-90" preserveAspectRatio="none" viewBox="0 0 100 15">
                                <path d="M0 5 Q 25 12 50 5 T 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
                            </svg>
                        </span>
                        <br className="hidden lg:block" />
                        <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default">Knows</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 inline-block animate-gradient-shift filter drop-shadow-sm">JEE.</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed max-w-xl tracking-wide">
                        Random practice = Random results.{' '}
                        <br className="hidden sm:block" />
                        <span className="text-hero-primary font-bold relative inline-block">
                            सही content, सही time पर।
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-hero-primary/20 rounded-full"></span>
                        </span>
                    </p>
                </div>

                {/* CTAs - Premium Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 items-start pt-6 motion-scale-pop motion-delay-cards">
                    <button
                        onClick={() => scrollToSection('timeline')}
                        className="w-full sm:w-auto bg-hero-primary text-white font-display font-bold text-lg py-4 px-10 rounded-full shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:bg-indigo-600 hover:shadow-[0_15px_35px_-10px_rgba(79,70,229,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-300 ease-brand-curve flex items-center justify-center gap-3 group border border-white/10"
                    >
                        Get Early Access
                        <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </button>
                    <button
                        onClick={() => scrollToSection('how-it-works')}
                        className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border border-gray-200 text-gray-700 font-display font-bold text-lg py-4 px-10 rounded-full hover:bg-white hover:border-hero-primary/30 hover:text-hero-primary hover:shadow-lg transition-all duration-300 ease-brand-smooth flex items-center justify-center gap-2 group"
                    >
                        See Rankers
                        <span className="group-hover:translate-x-1 transition-transform duration-300 ease-brand-curve material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>

                {/* Social Proof - Illustrative Characters */}
                <div className="flex items-center gap-6 pt-6 text-sm font-bold text-gray-500 motion-fade-up motion-fade-up-delay-3">
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-md overflow-hidden transition-transform hover:scale-110 hover:z-10 duration-300 bg-indigo-100">
                            <img
                                alt="Student"
                                className="w-full h-full object-cover"
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=c0aede"
                            />
                        </div>
                        <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-md overflow-hidden transition-transform hover:scale-110 hover:z-10 duration-300 bg-amber-100">
                            <img
                                alt="Student"
                                className="w-full h-full object-cover"
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka&backgroundColor=ffdfbf"
                            />
                        </div>
                        <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-md overflow-hidden transition-transform hover:scale-110 hover:z-10 duration-300 bg-emerald-100">
                            <img
                                alt="Student"
                                className="w-full h-full object-cover"
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Zack&backgroundColor=d1fae5"
                            />
                        </div>
                        <div className="w-12 h-12 rounded-full border-[3px] border-white bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-xs text-amber-900 font-black shadow-md transition-transform hover:scale-110 hover:z-10 duration-300">
                            +2k
                        </div>
                    </div>
                    <p className="text-base tracking-wide font-medium text-gray-600">Students improving today</p>
                </div>
            </div>

            {/* Right Content - Premium Thinking Avatar Composition */}
            <div className="w-full lg:w-1/2 relative min-h-[650px] flex items-center justify-center perspective-1000 motion-fade-up motion-fade-up-delay-2">
                {/* 1. Deep Atmospheric Glow - Centered & Pulsing */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>

                {/* 2. Orbiting Rings - Subtle Geometry */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] border border-indigo-500/10 rounded-full animate-spin-slow-reverse absolute"></div>
                    <div className="w-[400px] h-[400px] border border-purple-500/10 rounded-full animate-spin-slow absolute"></div>
                    {/* Connecting Lines (Simulated with rotation) */}
                    <div className="absolute w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-200/30 to-transparent rotate-45"></div>
                    <div className="absolute w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-200/30 to-transparent -rotate-45"></div>
                </div>

                {/* 3. Main Avatar Composition - Larger & Higher */}
                <div className="relative z-20 w-[32rem] h-[32rem] flex items-center justify-center -translate-y-8">

                    {/* Avatar Image with Organic Breathing Motion */}
                    <div className="relative w-[26rem] h-[26rem] transition-transform duration-700 hover:scale-[1.02] group cursor-pointer animate-float z-10">
                        {/* Premium Glow Behind */}
                        <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-[80px] animate-pulse-slow mix-blend-screen pointer-events-none"></div>

                        <img
                            src="/src/assets/Avatar.png"
                            alt="Rankak AI"
                            loading="eager"
                            className="w-full h-full object-contain drop-shadow-[0_40px_80px_-20px_rgba(79,70,229,0.4)] transition-all duration-500 group-hover:-rotate-1 relative z-10"
                        />
                        {/* Inner Glow Pulse */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-white/10 to-indigo-500/0 rounded-full blur-2xl animate-pulse mix-blend-overlay pointer-events-none"></div>
                    </div>

                    {/* Floating Card 1: Exam Countdown (Apple-style Glassmorphism) - Top Left Triangle Point */}
                    <div className="absolute -left-8 top-16 bg-white/70 backdrop-blur-2xl p-0 rounded-[1.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 animate-card-left w-auto min-w-[180px] z-20 hover:scale-105 hover:bg-white/80 transition-all duration-300 ease-brand-curve cursor-default ring-1 ring-white/30 overflow-hidden group">
                        {/* Header Bar */}
                        <div className="bg-indigo-50/30 px-4 py-2 border-b border-white/20 flex justify-between items-center">
                            <span className="text-[9px] font-black text-indigo-500/80 uppercase tracking-widest">Target Exam</span>
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400/80"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400/80"></div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-4 flex items-center gap-4">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-indigo-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                    <path className="text-indigo-500 drop-shadow-sm" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-[10px] font-bold text-indigo-600">75%</span>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Time Remaining</div>
                                <div className="text-xl font-display font-black text-gray-900 leading-none">145 Days</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card 2: AI Insight (Apple-style Glassmorphism) - Bottom Right Triangle Point */}
                    <div className="absolute -right-16 bottom-24 bg-white/70 backdrop-blur-2xl p-0 rounded-[1.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 animate-card-right w-64 z-20 hover:scale-105 hover:bg-white/80 transition-all duration-300 ease-brand-curve cursor-default ring-1 ring-white/30 overflow-hidden">
                        {/* Header Bar */}
                        <div className="bg-amber-50/30 px-4 py-2 border-b border-white/20 flex justify-between items-center">
                            <span className="text-[9px] font-black text-amber-600/80 uppercase tracking-widest flex items-center gap-1">
                                <span className="material-symbols-outlined text-[10px] animate-spin">sync</span>
                                Analyzing Path...
                            </span>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            <div className="flex justify-between items-end h-8 gap-1 px-1">
                                <div className="w-1/5 bg-indigo-200/50 rounded-t-sm h-[40%] animate-pulse"></div>
                                <div className="w-1/5 bg-indigo-300/50 rounded-t-sm h-[70%] animate-pulse delay-75"></div>
                                <div className="w-1/5 bg-indigo-400/50 rounded-t-sm h-[50%] animate-pulse delay-150"></div>
                                <div className="w-1/5 bg-indigo-500/50 rounded-t-sm h-[90%] animate-pulse delay-200"></div>
                                <div className="w-1/5 bg-indigo-600/50 rounded-t-sm h-[60%] animate-pulse delay-300"></div>
                            </div>
                            <div className="w-full h-[1px] bg-gray-100/50"></div>
                            <div className="flex justify-between w-full items-center">
                                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50/50 px-2.5 py-1 rounded-lg border border-indigo-100/50 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Optics
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1 hover:text-indigo-500 transition-colors cursor-pointer">
                                    View Plan <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Badge: AI Active - Top Right Triangle Point (Orbiting) */}
                    <div className="absolute top-0 right-0 bg-white/80 backdrop-blur-xl text-gray-800 px-4 py-2 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 animate-float-delayed font-bold text-xs flex items-center gap-2 z-20 transform rotate-6 hover:rotate-0 transition-all duration-300 ring-1 ring-white/30 hover:scale-110 cursor-pointer group">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 group-hover:bg-green-400 transition-colors"></span>
                        </span>
                        AI Active
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
