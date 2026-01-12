import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LootBoxModal = ({ isOpen, onClose, reward }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-white/20 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>

                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-6xl mb-4"
                        >
                            🎁
                        </motion.div>

                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                            Loot Box Unlocked!
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-6">
                            You found an <span className="font-bold text-amber-500">Early Access Perk</span>.
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors"
                        >
                            Claim Reward
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LootBoxModal;
