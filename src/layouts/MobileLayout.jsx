import React from 'react';
import HeroSection from '../components/mobile/HeroSection';
import DailyFlowSection from '../components/mobile/DailyFlowSection';
import LevelUpSection from '../components/mobile/LevelUpSection';
import CommunitySection from '../components/mobile/CommunitySection';
import CTASection from '../components/mobile/CTASection';

const MobileLayout = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex justify-center font-sans">
            {/* Mobile Container */}
            <div className="w-full max-w-md bg-white dark:bg-slate-900 min-h-screen shadow-2xl overflow-hidden relative border-x border-gray-100 dark:border-gray-800">
                <HeroSection />
                <DailyFlowSection />
                <LevelUpSection />
                <CommunitySection />
                <CTASection />
            </div>
        </div>
    );
};

export default MobileLayout;
