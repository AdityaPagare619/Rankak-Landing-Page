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
            {/* Global Background Layer (z-0) - Animated Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Top-left Indigo blob */}
                <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-indigo-200/40 dark:bg-indigo-900/30 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
                {/* Top-right Yellow blob */}
                <div className="absolute -top-[10%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-amber-200/30 dark:bg-amber-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
                {/* Bottom-center Green blob */}
                <div className="absolute bottom-[10%] left-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-lime-200/30 dark:bg-lime-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
                {/* Bottom-left Pink blob */}
                <div className="absolute -bottom-[20%] -left-[10%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] bg-pink-200/20 dark:bg-pink-900/15 rounded-full blur-[100px] animate-blob animation-delay-6000 mix-blend-multiply dark:mix-blend-screen"></div>
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
                        {/* Dashboard Section - "Your Day. Optimized." */}
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
