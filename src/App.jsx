import React, { Suspense, lazy } from 'react';
import useDeviceType from './hooks/useDeviceType';

// Lazy load layouts
const MobileLayout = lazy(() => import('./layouts/MobileLayout'));
const DesktopLayout = lazy(() => import('./layouts/DesktopLayout'));

function App() {
    const { isMobile } = useDeviceType();

    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        }>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </Suspense>
    );
}

export default App;
