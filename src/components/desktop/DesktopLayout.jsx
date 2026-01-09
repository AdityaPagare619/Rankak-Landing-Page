import React, { Suspense } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';

// Lazy load heavy sections to improve initial load performance
const DashboardSection = React.lazy(() => import('./DashboardSection'));
const TimelineSection = React.lazy(() => import('./TimelineSection'));
const HowItWorksSection = React.lazy(() => import('./HowItWorksSection'));
const CTASection = React.lazy(() => import('./CTASection'));

const DesktopLayout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 font-nunito text-slate-900 dark:text-white overflow-x-hidden selection:bg-hero-primary selection:text-white">
            <Navbar />
            <main>
                <HeroSection />

                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-hero-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                    <DashboardSection />
                </Suspense>

                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-time-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                    <TimelineSection />
                </Suspense>

                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-rankak-indigo-deep border-t-transparent rounded-full animate-spin"></div></div>}>
                    <HowItWorksSection />
                </Suspense>

                <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div></div>}>
                    <CTASection />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default DesktopLayout;
