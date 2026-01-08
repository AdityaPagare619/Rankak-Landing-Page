import React from 'react';

const CTASection = () => {
    return (
        <div className="relative min-h-screen bg-white dark:bg-slate-900 overflow-hidden font-sans text-slate-900 dark:text-white pb-24 flex flex-col items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-md px-6">
                {/* Header */}
                <div className="text-center mb-8 animate-bloom" style={{ animationDelay: '0.1s' }}>
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-[10px] font-bold tracking-widest uppercase mb-3 border border-indigo-100 dark:border-indigo-800">
                        Initiation Portal
                    </span>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight mb-2">
                        Ready to<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Ascend?</span>
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Join 2,400+ students crushing their goals.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-indigo-600"></div>

                    <form className="space-y-4">
                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                            <input
                                type="tel"
                                className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-bold text-lg text-slate-900 dark:text-white placeholder-gray-300"
                                placeholder="98765 43210"
                            />
                            <div className="absolute left-4 top-[38px] text-gray-400">
                                <span className="material-icons-round">smartphone</span>
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 ml-1">Target Year</label>
                            <div className="relative flex items-center justify-between bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 h-16 px-4 cursor-pointer hover:border-primary/50 transition-colors">
                                <span className="font-display font-medium text-gray-800 dark:text-white">2025</span>
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                                    <span className="material-icons-round text-sm">star</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button className="group relative w-full h-16 bg-primary hover:bg-indigo-600 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 active:scale-95" type="button">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="material-icons-round text-white text-2xl animate-pulse">flash_on</span>
                                <span className="font-display font-bold text-lg text-white tracking-wide uppercase">Start Learning</span>
                                <div className="absolute right-[-10px] top-[-10px] w-8 h-8 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
                            </button>
                            <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-3 font-medium">Press to begin your journey</p>
                        </div>
                    </form>
                </div>

                {/* Trust Indicators */}
                <div className="w-full max-w-md mt-8 space-y-4 relative z-10 animate-portal-enter" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <span className="material-icons-round text-gray-400 text-sm">verified_user</span>
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">The Rankak Promise</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <span className="material-icons-round text-lg">check</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-text-light dark:text-text-dark text-sm mb-0.5">Free forever</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">No hidden charges. Just pure learning.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <span className="material-icons-round text-lg">lock</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-text-light dark:text-text-dark text-sm mb-0.5">Data Privacy</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">Your data is yours. We don't sell it.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <span className="material-icons-round text-lg">mail_outline</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-text-light dark:text-text-dark text-sm mb-0.5">Zero Spam</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">Unsubscribe anytime. No penalties.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="mt-8 relative z-10 w-full max-w-md animate-portal-enter" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-primary/90 dark:bg-indigo-900/80 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-indigo-500/20">
                        <div className="flex -space-x-3 items-center">
                            <img alt="Student 1" className="w-10 h-10 rounded-full border-2 border-primary dark:border-indigo-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUJPc1NL83drrqczeI44JnU61VIc6kNWV5Apc0gK6LwQvq8s62J6DA_gGvCM0Gfn7QMpgfHvNUS75PoUIJMI7RXD2ST5mWmKHj-UsBRmXjnGsABfctOSJYJ6z0QjumVN0CuRWoj2Cf1-kXMzcnnuyua9tPYfxf66eYSHNIQCX8c5XzZ4ixWV-Vh9Y1qdrdpz0sq-ISmNh2k6IAHzRwk6wilC-av1xdTc7__ojD-wnScRGCpKryaqvQY3rBp0z5DnxQmJz1xFhYXrU" />
                            <img alt="Student 2" className="w-10 h-10 rounded-full border-2 border-primary dark:border-indigo-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbtXHitjeGv1Qc_LpdvWtE9cP6fGLojV42y-plKxJNZcnwsgtgDeipz7_ioXS6Vn7gshIj4OUHHmzZpeZM63UkNRsj7JavBqzep60AJMD_vq357keOpQpwQZo4Ph-ec2L6ZM0jax9WDnvhS7RB6OKg2aMhn9sB6KQhds4XBgU-YTyUYNoDh9xU8XHyWHC64MxDWYVP1VsnYZJn42Sws7CSvSh-lECioEWtc6vsKMeNsbcpQBz3N2W74E-Xv9zJwng56MRSr1dYoec" />
                            <img alt="Student 3" className="w-10 h-10 rounded-full border-2 border-primary dark:border-indigo-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP3ta3fjanwSHasAOOMSRx-FurLpiG4ID5D5CuOGCtEdzKDivG3X4pfpsEymCbtUTfs6c5mmYWOIFBEEzWSdpWX1oaw86FZUd-tZuFbWHelD8isdju4B2i5t1_s4qB0GVbRZaBFxLPsbsrtJo4w5yuDSRDzpY8FdSmKAlPl6DoaCNiAFvpHYabrdIeRC2z6EMMb63kyYN12Iuu4Ch__gh_LwKaXqS_hGKUsaHWekWtyoIGNLQ2-EUuYj1vsbsPVRaUwczVqbrR5DI" />
                            <div className="w-10 h-10 rounded-full border-2 border-primary dark:border-indigo-900 bg-accent flex items-center justify-center text-xs font-bold text-white shadow-sm">
                                +2k
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-display font-bold text-white">2,400+</div>
                            <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-200">Students Joined</div>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-gray-400 mt-6 pb-4">
                        By entering the portal, you agree to our <a className="underline hover:text-primary" href="#">Terms</a> & <a className="underline hover:text-primary" href="#">Privacy Scrolls</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
