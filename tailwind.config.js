/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Unified Brand Colors
                primary: {
                    DEFAULT: "#5b50e5", // Deep Indigo
                    light: "#818cf8",
                    dark: "#4338ca",
                    soft: "#E0E7FF",
                },
                secondary: {
                    DEFAULT: "#84cc16", // Muted Sage
                    light: "#a5b4fc",
                },
                accent: {
                    DEFAULT: "#fbbf24", // Soft Amber
                    light: "#fcd34d",
                    cyan: "#06B6D4",
                    green: "#10B981",
                },
                background: {
                    light: "#fdfbf7", // Warm Off-White / Creamy
                    dark: "#0f172a", // Deep Slate
                },
                surface: {
                    light: "#ffffff",
                    dark: "#1e293b",
                },
                text: {
                    main: "#1e293b",
                    muted: "#64748b",
                    light: "#f1f5f9",
                },
                // Specific palette names from refs for compatibility
                "rankak-indigo": "#4F46E5",
                "rankak-sage": "#10B981",
                "rankak-amber": "#F59E0B",
                "rankak-white": "#FDFBF7",

                // Screen-specific colors (restored)
                "s1-primary": "#5b50e5",
                "s1-accent": "#fbbf24",
                "s3-primary": "#4F46E5",
                "s3-accent": "#F59E0B",
                "s4-primary": "#4F46E5",
                "s5-primary": "#84cc16",
                "s5-secondary": "#10B981",
            },
            fontFamily: {
                body: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Space Grotesk"', 'sans-serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                bloom: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 10px rgba(79, 70, 229, 0.2)' },
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out infinite 2s',
                blob: 'blob 7s infinite',
                bloom: 'bloom 0.6s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
                'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-glow': 'pulse-glow 3s infinite',
            },
        },
    },
    plugins: [],
}
