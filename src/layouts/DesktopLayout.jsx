import React, { Suspense } from 'react';
import Navbar from '../components/desktop/Navbar';
import HeroSection from '../components/desktop/HeroSection';
import TimelineSection from '../components/desktop/TimelineSection';
import Footer from '../components/desktop/Footer';

// Lazy load heavier sections
const DashboardSection = React.lazy(() => import('../components/desktop/DashboardSection'));
const HowItWorksSection = React.lazy(() => import('../components/desktop/HowItWorksSection'));
const CTASection = React.lazy(() => import('../components/desktop/CTASection'));

const DesktopLayout = () => {
    return (
        <div className="min-h-screen font-body text-slate-900 dark:text-white overflow-x-hidden selection:bg-hero-primary selection:text-white relative">
            {/* Global Background Layer (z-0) - Premium Depth */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Base Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF5] via-[#F0FAFF] to-[#FAFFF0]"></div>

                {/* Subtle Grid Pattern for Depth */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(#818CF8 1px, transparent 1px), linear-gradient(90deg, #818CF8 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Top-left Indigo blob - Deep Glow */}
                <div className="absolute -top-[15%] -left-[8%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] bg-gradient-to-br from-indigo-300/50 to-indigo-400/30 rounded-full blur-[130px] animate-blob mix-blend-multiply"></div>

                {/* Top-right Golden Accent */}
                <div className="absolute -top-[5%] -right-[12%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] bg-gradient-to-bl from-amber-200/40 to-orange-300/30 rounded-full blur-[110px] animate-blob animation-delay-2000 mix-blend-multiply"></div>

                {/* Center Sage Bloom */}
                <div className="absolute top-[35%] left-[25%] w-[35vw] h-[35vw] max-w-[550px] max-h-[550px] bg-gradient-to-tr from-lime-200/35 to-emerald-300/25 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>

                {/* Bottom-right Purple Aura */}
                <div className="absolute bottom-[5%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tl from-purple-200/30 to-fuchsia-300/20 rounded-full blur-[120px] animate-blob animation-delay-6000 mix-blend-multiply"></div>

                {/* Central Gamified Orb Glow - Subtle Hero Accent */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] bg-radial-gradient from-white/40 via-indigo-100/20 to-transparent rounded-full blur-[80px] opacity-70 animate-pulse-slow"></div>
            </div>

            {/* Content Layer (z-10) - All sections */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    {/* Hero Section - First impression, must load instantly */}
                    <section id="hero">
                        <HeroSection />
                    </section>

                    {/* Timeline Section - "Started Late?" - Lighter, loads eagerly */}
                    <section id="timeline">
                        <TimelineSection />
                    </section>

                    {/* Below-the-fold sections - Lazy loaded */}
                    <Suspense fallback={
                        <div className="min-h-[60vh] flex items-center justify-center bg-transparent">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-10 h-10 border-4 border-gray-200 border-t-hero-primary rounded-full animate-spin"></div>
                                <p className="text-sm text-gray-500 font-medium">Loading more...</p>
                            </div>
                        </div>
                    }>
                        {/* Command Center Section - "Your Day. Optimized." */}
                        <section id="dashboard">
                            <DashboardSection />
                        </section>

                        {/* Community Section - "You're Not Alone" */}
                        <section id="how-it-works">
                            <HowItWorksSection />
                        </section>

                        {/* CTA Section - "Ready to try?" */}
                        <section id="cta">
                            <CTASection />
                        </section>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DesktopLayout;
