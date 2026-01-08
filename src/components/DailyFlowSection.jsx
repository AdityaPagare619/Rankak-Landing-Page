import React from 'react';

const DailyFlowSection = () => {
    return (
        <div className="relative w-full bg-rankak-white text-text-main font-display antialiased pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
                <div className="absolute top-[-10%] right-[-20%] w-[500px] h-[500px] bg-rankak-indigo/5 rounded-full blur-[100px]"></div>
                <div className="absolute top-[40%] left-[-20%] w-[400px] h-[400px] bg-rankak-sage/5 rounded-full blur-[80px]"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 pt-10 pb-8 text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center mb-3 text-rankak-amber">
                    <span className="material-icons-round text-2xl animate-pulse">auto_awesome</span>
                </div>
                <h1 className="text-[2.5rem] font-extrabold leading-[1.1] mb-6 tracking-tight text-gray-900">
                    Your Day. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rankak-amber to-rankak-indigo">Optimized.</span>
                </h1>
                <div className="relative bg-white rounded-2xl p-6 shadow-calm border border-gray-100 mx-auto max-w-[95%]">
                    <div className="absolute -top-3 -left-2 w-8 h-8 bg-rankak-indigo rounded-full flex items-center justify-center text-white shadow-md">
                        <span className="material-icons-round text-sm">format_quote</span>
                    </div>
                    <p className="text-base font-medium leading-relaxed text-gray-600">
                        You don't need 10 hours daily. <span className="text-rankak-indigo font-bold">20 min of smart practice</span> beats 2 hours of random grinding.
                    </p>
                </div>
            </header>

            {/* Timeline Section */}
            <section className="relative z-10 mt-8">
                {/* Timeline Line - Exact Gradient from Screen 2 */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FCD34D] via-[#6EE7B7] via-[#818CF8] to-[#67E8F9] -translate-x-1/2 z-0 opacity-40"></div>

                {/* Morning Scroll */}
                <div className="relative mb-20 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="flex justify-center mb-4 relative z-20">
                        <div className="bg-white shadow-sm border border-rankak-amber/20 text-rankak-amber px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            6:30 AM
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 relative z-10 transition-transform duration-500 hover:scale-110">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] shadow-lg shadow-amber-500/20 flex items-center justify-center ring-4 ring-white text-white">
                            <span className="material-icons-round text-3xl">wb_sunny</span>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-3xl p-6 shadow-float border border-gray-100 transition-transform duration-300 hover:scale-[1.02] mx-6">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Morning Scroll</h3>
                                <p className="text-gray-500 text-xs mt-1">Jumpstart your brain with Physics.</p>
                            </div>
                            <span className="flex items-center text-[10px] font-bold text-rankak-amber bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                                <span className="material-icons-round text-[12px] mr-1">bolt</span> +15 XP
                            </span>
                        </div>
                        <button className="w-full mt-4 py-3 rounded-xl bg-amber-50 text-rankak-amber font-bold text-sm flex items-center justify-center hover:bg-amber-100 transition-colors">
                            Start Session <span className="material-icons-round ml-1 text-base">play_arrow</span>
                        </button>
                    </div>
                </div>

                {/* Lunch Break */}
                <div className="relative mb-20 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="flex justify-center mb-4 relative z-20">
                        <div className="bg-white shadow-sm border border-rankak-sage/20 text-rankak-sage px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            2:00 PM
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 relative z-10 transition-transform duration-500 hover:scale-110">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#34D399] shadow-lg shadow-emerald-500/20 flex items-center justify-center ring-4 ring-white text-white">
                            <span className="material-icons-round text-3xl">lunch_dining</span>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-3xl p-6 shadow-float border border-gray-100 transition-transform duration-300 hover:scale-[1.02] mx-6">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Lunch Break</h3>
                                <p className="text-gray-500 text-xs mt-1">Bite-sized Chemistry quiz.</p>
                            </div>
                            <span className="flex items-center text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                                <span className="material-icons-round text-[12px] mr-1 text-gray-400">local_fire_department</span> Streak
                            </span>
                        </div>
                        <button className="w-full mt-4 py-3 rounded-xl bg-emerald-50 text-rankak-sage font-bold text-sm flex items-center justify-center hover:bg-emerald-100 transition-colors">
                            Take Quiz <span className="material-icons-round ml-1 text-base">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Deep Dive */}
                <div className="relative mb-20 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="flex justify-center mb-4 relative z-20">
                        <div className="bg-white shadow-sm border border-rankak-indigo/20 text-rankak-indigo px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            7:00 PM
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 relative z-10 transition-transform duration-500 hover:scale-110">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#6366F1] shadow-xl shadow-indigo-500/30 flex items-center justify-center ring-4 ring-white text-white transform scale-110">
                            <span className="material-icons-round text-4xl">lightbulb</span>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-3xl p-7 shadow-xl shadow-indigo-100 border border-indigo-50 transform scale-105 z-20 mx-6">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full rounded-tr-3xl opacity-60"></div>
                        <div className="flex justify-between items-start mb-4 relative">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Deep Dive</h3>
                                <p className="text-gray-500 text-xs mt-1">45 min focused mock test session.</p>
                            </div>
                            <span className="flex items-center text-[10px] font-bold text-white bg-rankak-indigo px-2.5 py-1 rounded-lg shadow-sm">
                                <span className="material-icons-round text-[12px] mr-1">star</span> High XP
                            </span>
                        </div>
                        <button className="w-full mt-2 py-3.5 rounded-xl bg-rankak-indigo text-white font-bold text-base shadow-lg shadow-indigo-200 flex items-center justify-center hover:bg-indigo-700 transition-all active:scale-[0.98]">
                            Enter Focus Mode <span className="material-icons-round ml-2">play_circle</span>
                        </button>
                    </div>
                </div>

                {/* Sleep Ritual */}
                <div className="relative mb-12 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="flex justify-center mb-4 relative z-20">
                        <div className="bg-white shadow-sm border border-accent-cyan/20 text-accent-cyan px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            Before Bed
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 relative z-10 transition-transform duration-500 hover:scale-110">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] shadow-lg shadow-cyan-500/20 flex items-center justify-center ring-4 ring-white text-white">
                            <span className="material-icons-round text-3xl">cloud</span>
                        </div>
                    </div>
                    <div className="relative bg-white rounded-3xl p-6 shadow-float border border-gray-100 transition-transform duration-300 hover:scale-[1.02] mx-6">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Sleep Ritual</h3>
                                <p className="text-gray-500 text-xs mt-1">Clear mind. Sleep with answers.</p>
                            </div>
                            <span className="flex items-center text-[10px] font-bold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                                <span className="material-icons-round text-[12px] mr-1">lock</span> Saved
                            </span>
                        </div>
                        <button className="w-full mt-4 py-3 rounded-xl bg-cyan-50 text-cyan-700 font-bold text-sm flex items-center justify-center hover:bg-cyan-100 transition-colors">
                            Review Now <span className="material-icons-round ml-1 text-base">visibility</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Daily Progress */}
            <section className="relative mt-12 mb-20 animate-fade-in-up mx-6" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-indigo-200/40 border border-gray-100 transition-all duration-500 hover:shadow-indigo-300/30">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Daily <span className="text-rankak-indigo">Progress</span></h2>
                            <p className="text-xs text-gray-500 font-medium mt-0.5 animate-pulse">Level up your mastery</p>
                        </div>
                        <div className="bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 flex items-center gap-1">
                            <span className="text-rankak-indigo font-black text-[10px] tracking-wider uppercase">Rookie II</span>
                        </div>
                    </div>

                    <div className="mb-8 group">
                        <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-2 px-1">
                            <span className="group-hover:text-rankak-indigo transition-colors">1875 XP</span>
                            <span>2500 XP</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-visible relative ring-1 ring-gray-100 group-hover:ring-indigo-100 transition-all">
                            <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-rankak-amber via-orange-400 to-rankak-indigo rounded-full w-[75%] shadow-[0_2px_10px_rgba(79,70,229,0.4)] animate-shimmer overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 -skew-x-12 w-full transform -translate-x-full animate-shimmer"></div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 left-[75%] -ml-3.5 w-8 h-8 bg-white border-2 border-rankak-indigo rounded-full shadow-lg flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                                <span className="text-[14px] animate-bounce-small">🏃</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100 flex flex-col items-center justify-between progress-card-hover group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-center gap-1 mb-4 w-full justify-between relative z-10">
                                <span className="text-[10px] font-extrabold uppercase text-gray-400 tracking-wider group-hover:text-rankak-indigo transition-colors">Accuracy</span>
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-icons-round text-[12px] text-emerald-500">check</span>
                                </div>
                            </div>
                            <div className="flex items-end justify-center h-20 gap-2 w-full px-2 relative z-10">
                                <div className="flex-1 flex flex-col items-center gap-1 group/bar">
                                    <div className="w-full bg-indigo-200 rounded-t-md h-8 group-hover/bar:bg-indigo-400 transition-all duration-300 group-hover/bar:h-10"></div>
                                    <span className="text-[8px] font-bold text-gray-400 group-hover/bar:text-indigo-600">Phy</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1 group/bar">
                                    <div className="w-full bg-purple-200 rounded-t-md h-12 group-hover/bar:bg-purple-400 transition-all duration-300 group-hover/bar:h-14"></div>
                                    <span className="text-[8px] font-bold text-gray-400 group-hover/bar:text-purple-600">Chm</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1 group/bar">
                                    <div className="w-full bg-rankak-indigo rounded-t-md h-16 shadow-lg shadow-indigo-200 group-hover/bar:h-[4.5rem] transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </div>
                                    <span className="text-[8px] font-bold text-rankak-indigo">Mth</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-4 border border-orange-100 relative overflow-hidden flex flex-col items-center justify-center text-center progress-card-hover group cursor-pointer">
                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="mb-3 relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-300/50 text-white relative">
                                    <span className="material-icons-round text-3xl animate-pulse-glow">local_fire_department</span>
                                    <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
                                </div>
                                <div className="absolute -top-1 -right-2 text-orange-400 text-xs animate-bounce font-black">✦</div>
                            </div>
                            <div className="text-[2.5rem] font-black text-gray-900 leading-none relative z-10 group-hover:scale-110 transition-transform duration-300 origin-bottom">12</div>
                            <div className="text-[9px] font-extrabold text-orange-600 uppercase tracking-widest mt-1 relative z-10">Day Streak</div>
                        </div>
                    </div>

                    <button className="w-full bg-rankak-indigo text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-indigo-300/50 flex items-center justify-between group active:scale-[0.96] transition-all hover:bg-indigo-600 hover:shadow-indigo-400/60 overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="flex items-center gap-3 relative z-10">
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                <span className="material-icons-round text-xl group-hover:scale-110 transition-transform">play_arrow</span>
                            </div>
                            <span className="text-lg tracking-tight">Continue</span>
                        </span>
                        <span className="material-icons-round text-2xl group-hover:translate-x-1 transition-transform relative z-10">arrow_forward</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DailyFlowSection;
