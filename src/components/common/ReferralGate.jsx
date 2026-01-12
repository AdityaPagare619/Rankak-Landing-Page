import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useShare from '../../hooks/useShare';

const ReferralGate = ({ children, title = "Unlock Priority Access" }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const { share } = useShare();

    const handleUnlock = async () => {
        const success = await share({
            title: 'Rankak - The AI That Actually Knows JEE',
            text: 'I just secured my spot for Rankak Early Access. Join the fellowship!',
            url: window.location.href
        });

        if (success) {
            setIsUnlocked(true);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-2xl">
            <div className={isUnlocked ? "" : "blur-md pointer-events-none select-none opacity-50 transition-all duration-500"}>
                {children}
            </div>

            {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-white/20 text-center max-w-xs mx-4"
                    >
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 dark:text-indigo-400">
                            <span className="material-icons-round text-2xl">lock</span>
                        </div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            Share to reveal this exclusive preview and boost your waitlist priority.
                        </p>
                        <button
                            onClick={handleUnlock}
                            className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <span className="material-icons-round text-sm">share</span>
                            Share to Unlock
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default ReferralGate;
