import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LevelUpSection = () => {
    return (
        <div className="relative w-full min-h-[100dvh] bg-s1-bg-light dark:bg-s1-bg-dark text-text-dark dark:text-text-light flex flex-col items-center justify-center relative transition-colors duration-300 antialiased overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[50%] bg-s1-primary/10 dark:bg-s1-primary/5 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[50%] bg-s1-accent/10 dark:bg-s1-accent/5 rounded-full blur-[100px] animate-float-delayed"></div>
                <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-s1-secondary/5 dark:bg-s1-secondary/5 rounded-full blur-[80px]"></div>
            </div>

            <main className="relative z-10 w-full max-w-md mx-auto min-h-[100dvh] flex flex-col px-6 py-8 animate-portal-enter">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-6 pt-4 mb-2">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E5E9C8] text-[#566826] dark:bg-s1-secondary/20 dark:text-s1-secondary text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                        <span className="material-icons-round text-sm mr-1.5">auto_awesome</span>
                        Ascension Complete
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-[2.75rem] leading-[1.1] font-extrabold tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-s1-primary to-purple-600">You've Leveled Up!</span>
                        </h1>
                        <p className="text-text-muted dark:text-gray-400 text-[1.05rem] leading-relaxed max-w-[90%] mx-auto font-medium">
                            Your journey through the logic core has fortified your foundations. The cosmos awaits.
                        </p>
                    </div>
                </div>

                {/* Lottie Animation */}
                <div className="flex-1 flex flex-col items-center justify-center relative min-h-[280px]">
                    <div className="absolute w-[280px] h-[280px] bg-gradient-to-tr from-s1-primary/20 via-white/0 to-s1-accent/20 rounded-full blur-3xl animate-pulse-glow z-0"></div>
                    <div className="relative w-[280px] h-[280px] z-10 animate-float drop-shadow-xl">
                        <Player
                            autoplay
                            loop
                            src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </div>
                </div>

                {/* Stats Card */}
                <div className="w-full mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 shadow-soft transform transition-all duration-300 hover:scale-[1.01] animate-fade-in-up border border-white/50 dark:border-white/10" style={{ animationDelay: '0.2s' }}>
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-[0.7rem] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em]">Efficiency Boost</span>
                        <span className="flex items-center text-s1-accent font-bold text-sm bg-s1-accent/10 px-2 py-0.5 rounded-lg">
                            <span className="material-icons-round text-sm mr-1">bolt</span>
                            High Voltage
                        </span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-6 mt-1">
                        <span className="text-6xl font-black text-text-dark dark:text-white tracking-tighter">40<span className="text-4xl align-top">%</span></span>
                        <span className="text-base text-text-muted dark:text-gray-400 font-medium">Faster Improvement</span>
                    </div>
                    <div className="pt-5 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                        <div className="flex -space-x-3 overflow-visible pl-1">
                            <img alt="Student avatar 1" className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBawEDENVuh4VdX-bcIFAn_G6m7l1gVCcnjvK50uIaf27aVoHFJdvQ4LIzl8K7N8wn0vHkyjGryZNNxZ1xD4vfgQX7b8Ia68phFZKIJUnPpy9uEQ69Z1-DL54u0G8ehd7Pkxpg5_uVxFWpTv4ht6gdyRTo6cCO9m2AryLCMuxZrHHOnkq4igSAMU91ntTaDTXqdjhlV8QnxMXIGyExiuEwgnhXaVQg2Asnk_nM2pquMT5gDMIhP6WESqIFdQHLRIGXihJTSI0N_1ho" />
                            <img alt="Student avatar 2" className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyI28JJuU0N6Bxt-3HfCqgHLTFSMHECnPffKV5F6e5b4s9k0n_v8bNczeWkWazz7QZxV5Hht3YtKf0hpnQ0f0ERio4izJBDUULO-CsvJ9d4hJ5729ZPKwMfaGXMqG_8e71Wte62Hn4Obmfeby6H9an-udaupwEjOx1tf9M8aCTnXIi8fUgltuHJ0V1uLGJRaOUqoitu3Hz5DpiPWxd_-ytKBSVt9pDeSTwNVvrB55J-vzzwGFG0osUNOVkdGQ0SThJJdVXaLpOEM" />
                            <img alt="Student avatar 3" className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPm9Zz_j65ZWsKUJAEqwPdR_K1vFpbVZfDekbAGxUu-42wcFkVE5Cr3Dw3s1LVK2DDR64GXpJiobxleQ0QSDzWPedtwruq30aqaXI-yXWJX5wr36MyHORJHSMDBdJ9NdA068IVxHuD6ytqcd_ac_Pqa29WLCZNLbzRRc6665sGpt1zT_4ToZHsEdFtx6EkNSTOhyDiEOCw2UTVGOm1DA2b0_L_c5T7c4crWgIykOhyj6mAUQE9s5j6hfEpE72QYonyxKPhQxHWP1Y" />
                            <div className="h-9 w-9 rounded-full bg-s1-accent ring-2 ring-white dark:ring-gray-800 flex items-center justify-center text-[11px] font-bold text-black shadow-sm z-10">+2k</div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Students ascending today</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-4 w-full pb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button className="w-full bg-s1-primary hover:bg-[#4f46e5] text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-s1-primary/25 transform transition-all active:scale-[0.98] flex items-center justify-center group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                        <span className="text-[1.05rem]">Claim Your Rank</span>
                        <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button className="w-full bg-white dark:bg-surface-dark border border-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200 font-semibold py-4 px-6 rounded-2xl shadow-sm transform transition-all active:scale-[0.98] flex items-center justify-center">
                        <span className="material-icons-round mr-2 text-gray-400">share</span>
                        Share Achievement
                    </button>
                    <div className="flex items-center justify-center space-x-3 pt-2 opacity-80">
                        <div className="flex items-center text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                            <span className="material-icons-round text-sm mr-1 text-s1-secondary">verified_user</span>
                            No credit card
                        </div>
                        <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="flex items-center text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                            <span className="material-icons-round text-sm mr-1 text-blue-400">lock</span>
                            Data Encrypted
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LevelUpSection;
