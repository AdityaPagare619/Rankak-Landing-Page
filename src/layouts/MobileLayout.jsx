import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/mobile/HeroSection';
import DailyFlowSection from '../components/mobile/DailyFlowSection';
import LevelUpSection from '../components/mobile/LevelUpSection';
import CommunitySection from '../components/mobile/CommunitySection';
import CTASection from '../components/mobile/CTASection';

const MobileLayout = () => {
    return (
        <div className="min-h-screen bg-[#FFFDF5] flex justify-center font-sans relative overflow-hidden selection:bg-indigo-500/30">
            {/* Premium Atmospheric Background Layer - Shared across all sections for seamless flow */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Deep Base Gradient - Seamless Canvas */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF5] via-[#F8FAFC] to-[#F0FDF4]"></div>

                {/* Mesh Gradient Overlay - Dynamic & Alive */}
                <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(at_0%_0%,_rgba(99,102,241,0.15)_0px,_transparent_50%),radial-gradient(at_100%_0%,_rgba(168,85,247,0.15)_0px,_transparent_50%),radial-gradient(at_100%_100%,_rgba(236,72,153,0.15)_0px,_transparent_50%),radial-gradient(at_0%_100%,_rgba(34,211,238,0.15)_0px,_transparent_50%)]"></div>

                {/* Subtle Grid for Depth */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}></div>

                {/* Floating Organic Orbs - Parallax Feel */}
                <div className="absolute -top-[20%] -left-[20%] w-[80vw] h-[80vw] bg-gradient-to-br from-indigo-300/20 to-purple-300/10 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
                <div className="absolute top-[40%] -right-[30%] w-[70vw] h-[70vw] bg-gradient-to-bl from-amber-200/20 to-orange-300/10 rounded-full blur-[90px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-emerald-200/20 to-teal-300/10 rounded-full blur-[80px] animate-blob animation-delay-4000 mix-blend-multiply"></div>

                {/* Noise Texture for Organic Feel */}
                <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </div>

            {/* Mobile Container with Glass Effect */}
            <div className="w-full max-w-md bg-white/30 backdrop-blur-[2px] min-h-screen shadow-2xl overflow-hidden relative z-10 border-x border-white/40 ring-1 ring-white/50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <HeroSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <DailyFlowSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <LevelUpSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <CommunitySection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <CTASection />
                </motion.div>
            </div>
        </div>
    );
};

export default MobileLayout;
