import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { supabase } from '../../lib/supabaseClient';

const CTASection = () => {
    const [focusState, setFocusState] = useState('idle'); // 'idle', 'input', 'selection', 'button'
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        classTier: 'Class 11th',
        targetYear: '2026'
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') setStatus('idle');
    };

    const handleSelection = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.fullName) {
            setErrorMessage('Please fill in all fields');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('early_access_users')
                .insert([
                    {
                        full_name: formData.fullName,
                        email: formData.email,
                        class_tier: formData.classTier,
                        target_year: formData.targetYear
                    }
                ]);

            if (error) {
                if (error.code === '23505') { // Unique violation
                    throw new Error('This email is already registered!');
                }
                throw error;
            }

            setStatus('success');
            setFocusState('success');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    // Mascot variants for interaction
    const mascotVariants = {
        idle: { y: 0, scale: 1, rotate: 0 },
        input: { y: 25, x: -15, scale: 1.15, rotate: -8, transition: { type: "spring", stiffness: 150 } },
        selection: { y: 15, x: 15, scale: 1.1, rotate: 8, transition: { type: "spring", stiffness: 150 } },
        button: { y: -10, scale: 1.2, rotate: 0, transition: { y: { yoyo: Infinity, duration: 0.4 } } },
        success: { y: -20, scale: 1.3, rotate: [0, -10, 10, 0], transition: { rotate: { repeat: Infinity, duration: 1 } } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className="relative bg-[#fffbf4] dark:bg-[#0f172a] text-slate-900 dark:text-white py-16 flex flex-col items-center justify-center overflow-hidden font-sans transition-colors duration-500">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#5046e5]/10 rounded-full blur-[120px] dark:bg-[#5046e5]/20 animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-[#fbbf24]/10 rounded-full blur-[120px] dark:bg-[#fbbf24]/20 animate-float-delayed"></div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>

            <motion.main
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-md px-6 flex flex-col items-center"
            >
                {/* Interactive Mascot */}
                <motion.div
                    className="relative w-40 h-40 mb-[-20px] z-30 pointer-events-none"
                    variants={mascotVariants}
                    animate={status === 'success' ? 'success' : focusState}
                >
                    <Player
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_1pxqjqps.json"
                        style={{ height: '100%', width: '100%' }}
                    />

                    <AnimatePresence mode="wait">
                        {focusState === 'input' && status !== 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 10 }}
                                className="absolute -top-2 -right-10 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl rounded-bl-none shadow-lg border border-indigo-100 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap"
                            >
                                Type it in! ⌨️
                            </motion.div>
                        )}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 10 }}
                                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-xs whitespace-nowrap"
                            >
                                You're in! 🎉
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-6 relative z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-xs font-bold tracking-wide uppercase border border-orange-200 dark:border-orange-800 shadow-sm">
                        <span className="material-icons-round text-sm">bolt</span>
                        Initiation Portal
                    </div>
                    <h1 className="text-4xl font-black leading-tight mb-3 text-slate-900 dark:text-white tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4f46e5] to-[#9333ea]">try?</span><br />
                        <span className="text-2xl font-bold text-slate-400 dark:text-slate-500">No card. No commitment.</span>
                    </h1>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    variants={itemVariants}
                    className="w-full bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-none dark:border dark:border-white/10 p-6 sm:p-8 relative overflow-hidden group"
                >
                    {status === 'success' ? (
                        <div className="py-12 flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                                <span className="material-icons-round text-3xl">check_circle</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Welcome Aboard!</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[200px]">
                                You've successfully secured your spot. We'll be in touch soon!
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-4 text-xs font-bold text-indigo-600 hover:text-indigo-700 underline"
                            >
                                Register another student
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            {/* Full Name */}
                            <div className="group relative">
                                <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full h-12 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 focus:border-[#5046e5] focus:ring-4 focus:ring-[#5046e5]/10 transition-all px-4 text-sm font-bold text-gray-800 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 outline-none"
                                    placeholder="Enter your full name"
                                    type="text"
                                    onFocus={() => setFocusState('input')}
                                    onBlur={() => setFocusState('idle')}
                                />
                            </div>

                            {/* Email */}
                            <div className="group relative">
                                <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-12 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 focus:border-[#5046e5] focus:ring-4 focus:ring-[#5046e5]/10 transition-all px-4 text-sm font-bold text-gray-800 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 outline-none"
                                    placeholder="you@example.com"
                                    type="email"
                                    onFocus={() => setFocusState('input')}
                                    onBlur={() => setFocusState('idle')}
                                />
                            </div>

                            {/* Selections Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative group/select">
                                    <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Class Tier</label>
                                    <div
                                        className="relative flex items-center justify-between bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 h-12 px-3 cursor-pointer hover:border-[#5046e5]/50 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm"
                                        onMouseEnter={() => setFocusState('selection')}
                                        onMouseLeave={() => setFocusState('idle')}
                                        onClick={() => handleSelection('classTier', formData.classTier === 'Class 11th' ? 'Class 12th' : 'Class 11th')}
                                    >
                                        <span className="font-bold text-gray-800 dark:text-white text-xs">{formData.classTier}</span>
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                                            <span className="material-icons-round text-xs">school</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group/select">
                                    <label className="block text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Target Year</label>
                                    <div
                                        className="relative flex items-center justify-between bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 h-12 px-3 cursor-pointer hover:border-[#5046e5]/50 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm"
                                        onMouseEnter={() => setFocusState('selection')}
                                        onMouseLeave={() => setFocusState('idle')}
                                        onClick={() => handleSelection('targetYear', formData.targetYear === '2026' ? '2027' : '2026')}
                                    >
                                        <span className="font-bold text-gray-800 dark:text-white text-xs">{formData.targetYear}</span>
                                        <div className="w-6 h-6 rounded-full bg-[#5046e5] text-white flex items-center justify-center shadow-lg shadow-[#5046e5]/30">
                                            <span className="material-icons-round text-xs">star</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Error Message */}
                            <AnimatePresence>
                                {errorMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-red-500 text-xs font-bold text-center"
                                    >
                                        {errorMessage}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Button */}
                            <div className="pt-2">
                                <motion.button
                                    className="group relative w-full h-14 bg-[#5046e5] hover:bg-indigo-600 rounded-xl shadow-xl shadow-[#5046e5]/30 flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={status === 'loading'}
                                    onMouseEnter={() => setFocusState('button')}
                                    onMouseLeave={() => setFocusState('idle')}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                                    {status === 'loading' ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        <>
                                            <span className="material-icons-round text-white text-xl animate-pulse">flash_on</span>
                                            <span className="font-bold text-sm text-white tracking-wide uppercase">Start Learning</span>
                                        </>
                                    )}
                                    <div className="absolute right-[-10px] top-[-10px] w-8 h-8 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                </motion.button>
                                <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-3 font-medium">Press to begin your journey</p>
                            </div>
                        </form>
                    )}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants} className="w-full max-w-md mt-8 space-y-3 relative z-10">
                    <div className="flex items-center gap-2 mb-2 px-2 opacity-80">
                        <span className="material-icons-round text-gray-400 text-sm">verified_user</span>
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">The Rankak Promise</span>
                    </div>
                    {[
                        { icon: 'check', title: 'Free forever', desc: 'No hidden charges. Just pure learning.', color: 'text-green-600', bg: 'bg-green-100' },
                        { icon: 'lock', title: 'Data Privacy', desc: 'Your data is yours. We don\'t sell it.', color: 'text-blue-600', bg: 'bg-blue-100' },
                        { icon: 'mail_outline', title: 'Zero Spam', desc: 'Unsubscribe anytime. No penalties.', color: 'text-orange-600', bg: 'bg-orange-100' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${item.bg} dark:bg-opacity-20 flex items-center justify-center ${item.color} dark:text-opacity-80`}>
                                <span className="material-icons-round text-lg">{item.icon}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">{item.title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Social Proof Footer */}
                <motion.div variants={itemVariants} className="mt-8 relative z-10 w-full max-w-md">
                    <div className="bg-[#5046e5]/90 dark:bg-indigo-900/80 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-indigo-500/20">
                        <div className="flex -space-x-3 items-center">
                            <img alt="Student 1" className="w-10 h-10 rounded-full border-2 border-[#5046e5] dark:border-indigo-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUJPc1NL83drrqczeI44JnU61VIc6kNWV5Apc0gK6LwQvq8s62J6DA_gGvCM0Gfn7QMpgfHvNUS75PoUIJMI7RXD2ST5mWmKHj-UsBRmXjnGsABfctOSJYJ6z0QjumVN0CuRWoj2Cf1-kXMzcnnuyua9tPYfxf66eYSHNIQCX8c5XzZ4ixWV-Vh9Y1qdrdpz0sq-ISmNh2k6IAHzRwk6wilC-av1xdTc7__ojD-wnScRGCpKryaqvQY3rBp0z5DnxQmJz1xFhYXrU" />
                            <img alt="Student 2" className="w-10 h-10 rounded-full border-2 border-[#5046e5] dark:border-indigo-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbtXHitjeGv1Qc_LpdvWtE9cP6fGLojV42y-plKxJNZcnwsgtgDeipz7_ioXS6Vn7gshIj4OUHHmzZpeZM63UkNRsj7JavBqzep60AJMD_vq357keOpQpwQZo4Ph-ec2L6ZM0jax9WDnvhS7RB6OKg2aMhn9sB6KQhds4XBgU-YTyUYNoDh9xU8XHyWHC64MxDWYVP1VsnYZJn42Sws7CSvSh-lECioEWtc6vsKMeNsbcpQBz3N2W74E-Xv9zJwng56MRSr1dYoec" />
                            <img alt="Student 3" className="w-10 h-10 rounded-full border-2 border-[#5046e5] dark:border-indigo-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP3ta3fjanwSHasAOOMSRx-FurLpiG4ID5D5CuOGCtEdzKDivG3X4pfpsEymCbtUTfs6c5mmYWOIFBEEzWSdpWX1oaw86FZUd-tZuFbWHelD8isdju4B2i5t1_s4qB0GVbRZaBFxLPsbsrtJo4w5yuDSRDzpY8FdSmKAlPl6DoaCNiAFvpHYabrdIeRC2z6EMMb63kyYN12Iuu4Ch__gh_LwKaXqS_hGKUsaHWekWtyoIGNLQ2-EUuYj1vsbsPVRaUwczVqbrR5DI" />
                            <div className="w-10 h-10 rounded-full border-2 border-[#5046e5] dark:border-indigo-900 bg-[#fbbf24] flex items-center justify-center text-xs font-bold text-white shadow-sm">
                                +2k
                            </div>
                        </div>
                        <div className="text-right">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="text-lg font-black text-amber-300 drop-shadow-sm"
                            >
                                Very Few Seats Left
                            </motion.div>
                            <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-200 flex items-center justify-end gap-1">
                                <span className="material-icons-round text-[10px]">lock</span> Secure Yours Now
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-gray-400 mt-6 pb-4">
                        By entering the portal, you agree to our <a className="underline hover:text-[#5046e5]" href="#">Terms</a> & <a className="underline hover:text-[#5046e5]" href="#">Privacy Scrolls</a>.
                    </p>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default CTASection;
