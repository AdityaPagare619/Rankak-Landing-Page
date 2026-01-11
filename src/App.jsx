import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import useDeviceType from './hooks/useDeviceType';
import LoadingScreen from './components/common/LoadingScreen';

// Lazy load layouts
const MobileLayout = lazy(() => import('./layouts/MobileLayout'));
const DesktopLayout = lazy(() => import('./layouts/DesktopLayout'));

// Simple Error Boundary Component for debugging
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6 text-red-900">
                    <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                    <pre className="bg-red-100 p-4 rounded text-sm overflow-auto max-w-full">
                        {this.state.error && this.state.error.toString()}
                    </pre>
                    <details className="mt-4">
                        <summary>Stack Trace</summary>
                        <pre className="text-xs mt-2 overflow-auto">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

function App() {
    const { isMobile } = useDeviceType();
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <ErrorBoundary>
            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            </AnimatePresence>

            <div className={isLoading ? 'fixed inset-0 -z-10 opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
                <Suspense fallback={
                    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF5] dark:bg-slate-900">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                }>
                    {isMobile ? <MobileLayout /> : <DesktopLayout />}
                </Suspense>
            </div>
        </ErrorBoundary>
    );
}

export default App;
