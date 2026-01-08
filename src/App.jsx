import React from 'react';
import HeroSection from './components/HeroSection';
import DailyFlowSection from './components/DailyFlowSection';
import LevelUpSection from './components/LevelUpSection';
import CommunitySection from './components/CommunitySection';
import CTASection from './components/CTASection';

function App() {
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
}

export default App;
