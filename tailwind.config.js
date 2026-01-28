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
                // --- Hero Section Colors ---
                "hero-primary": "#4F46E5", // Deep Indigo
                "hero-secondary": "#818CF8",
                "hero-accent": "#FCD34D", // Warm yellow
                "hero-sage": "#84A98C",
                "hero-sage-muted": "#84A98C", // Muted Sage
                "hero-sage-light": "#CAD2C5",
                "hero-amber-soft": "#FCD34D", // Soft Amber
                "hero-bg-light": "#FFFBF5", // Warm off-white
                "hero-bg-dark": "#1F2937",
                "hero-card-light": "#FFFFFF",
                "hero-card-dark": "#374151",
                "hero-text-main-light": "#1F2937",
                "hero-text-main-dark": "#F3F4F6",
                "hero-text-muted-light": "#6B7280",
                "hero-text-muted-dark": "#9CA3AF",

                // --- Dashboard Section Colors ---
                "dash-primary": "#6B4EF8", // Deep Violet
                "dash-secondary": "#FFC800", // Warm Yellow
                "dash-accent": "#58CC02", // Growth Green
                "dash-bg-light": "#FFFDF5",
                "dash-bg-dark": "#131F24",
                "dash-card-light": "#FFFFFF",
                "dash-card-dark": "#1F2D35",
                "dash-text-light": "#3C3C3C",
                "dash-text-dark": "#E5E7EB",
                "dash-globe-amber-bg": "#FFFBEB",
                "dash-globe-sage-bg": "#F0FDF4",
                "dash-globe-indigo-bg": "#EEF2FF",
                "dash-globe-cool-bg": "#ECFEFF",

                // --- Timeline Section Colors ---
                "time-primary": "#58CC02",
                "time-primaryHover": "#46A302",
                "time-secondary": "#2B3440",
                "time-bg-light": "#FAFAF9",
                "time-bg-dark": "#0F172A",
                "time-sage": {
                    50: "#F2F9F0",
                    100: "#E3F0D3",
                    200: "#C1E1A3",
                    300: "#A3D479",
                    400: "#88C553",
                    500: "#84CC16",
                    600: "#65A30D",
                    700: "#4D7C0F",
                    800: "#3F6212",
                    900: "#365314",
                },
                "time-amber": {
                    50: "#FFFAEB",
                    100: "#FEEBC2",
                    200: "#FDD685",
                    300: "#FBC148",
                    400: "#F9AB17",
                    500: "#F59E0B",
                    600: "#D97706",
                    700: "#B45309",
                    800: "#92400E",
                    900: "#78350F",
                },
                "time-indigo": {
                    50: "#EEF2FF",
                    100: "#E0E7FF",
                    200: "#C7D2FE",
                    300: "#A5B4FC",
                    400: "#818CF8",
                    500: "#6366F1",
                    600: "#4F46E5",
                    700: "#4338CA",
                    800: "#3730A3",
                    900: "#312E81",
                    950: "#1E1B4B",
                },

                // --- How It Works Section Colors ---
                "rankak-cream": "#FDFBF7",
                "rankak-indigo-deep": "#1e1b4b",
                "rankak-sage-light": "#ECFCCB",
                "rankak-sage-medium": "#84CC16",
                "rankak-moss": "#365314",
                "rankak-amber-soft": "#FEF3C7",
                "rankak-amber-rich": "#F59E0B",
            },
            fontFamily: {
                display: ["Nunito", "sans-serif"],
                body: ["Nunito", "sans-serif"],
                outfit: ["Outfit", "sans-serif"],
                quicksand: ["Quicksand", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                space: ["Space Grotesk", "sans-serif"],
                jakarta: ["Plus Jakarta Sans", "sans-serif"],
            },
            borderRadius: {
                "organic-xl": "2.5rem",
                "organic-2xl": "3.5rem",
                "blob": "40% 60% 70% 30% / 40% 50% 60% 50%",
                "leaf": "2rem 0 2rem 0",
            },
            boxShadow: {
                // Hero
                'hero-soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'hero-button': '0 4px 0 0 rgba(0,0,0,0.1)',
                'hero-button-hover': '0 2px 0 0 rgba(0,0,0,0.1)',
                'hero-glow': '0 0 60px -15px rgba(79, 70, 229, 0.6)',
                'hero-orb': 'inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.4), 0 25px 50px -12px rgba(79, 70, 229, 0.5)',

                // Dashboard
                'dash-soft': '0 8px 30px rgba(107, 78, 248, 0.1)',
                'dash-hard': '0 6px 0px rgba(0,0,0,0.1)',
                'dash-hard-hover': '0 2px 0px rgba(0,0,0,0.1)',
                'dash-glow': '0 0 40px rgba(107, 78, 248, 0.25)',
                'dash-inner-glow': 'inset 0 2px 10px rgba(255,255,255,0.3)',
                'dash-globe-amber': '0 20px 40px -10px rgba(251, 191, 36, 0.5), inset 0 0 20px rgba(251, 191, 36, 0.2)',
                'dash-globe-sage': '0 20px 40px -10px rgba(88, 204, 2, 0.4), inset 0 0 20px rgba(88, 204, 2, 0.2)',
                'dash-globe-indigo': '0 20px 40px -10px rgba(99, 102, 241, 0.5), inset 0 0 20px rgba(99, 102, 241, 0.2)',
                'dash-globe-cool': '0 20px 40px -10px rgba(20, 184, 166, 0.5), inset 0 0 20px rgba(20, 184, 166, 0.2)',
                'dash-orb-card': '0 10px 40px -10px rgba(0,0,0,0.05)',
                'dash-bar-glow': '0 0 15px rgba(88, 204, 2, 0.4)',

                // Timeline
                'time-card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
                'time-card-glow-sage': '0 0 40px -10px rgba(132, 204, 22, 0.4)',
                'time-card-glow-amber': '0 0 40px -10px rgba(245, 158, 11, 0.4)',
                'time-card-glow-indigo': '0 0 50px -10px rgba(99, 102, 241, 0.5)',
                'time-btn-glow': '0 4px 14px 0 rgba(88, 204, 2, 0.39)',
                'time-soft-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
            },
            backgroundImage: {
                'forest-gradient': 'linear-gradient(180deg, #FDFBF7 0%, #F0FDF4 30%, #ECFCCB 100%)',
                'stone-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                'sprout-gradient': 'linear-gradient(to top, #84CC16 0%, #bef264 100%)',
                'root-stream': 'linear-gradient(90deg, transparent 0%, rgba(132, 204, 22, 0.1) 20%, rgba(132, 204, 22, 0.2) 50%, rgba(132, 204, 22, 0.1) 80%, transparent 100%)',
                'forest-map-pattern': 'url("/assets/forest-map.svg")',
                'shimmer': 'linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 60%)',
                'grid-pattern': 'linear-gradient(rgba(132, 204, 22, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 204, 22, 0.05) 1px, transparent 1px)',
                'hero-pattern': 'radial-gradient(#E5E7EB 1px, transparent 1px)',
                'hero-orb-gradient': 'radial-gradient(circle at 35% 30%, #a5b4fc 0%, #6366f1 20%, #4338ca 50%, #312e81 100%)',
                'hero-orb-glow-pattern': 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
                'time-glass-shine': 'linear-gradient(45deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 60%)',
            },
            animation: {
                // Hero
                'float-hero': 'floatHero 8s ease-in-out infinite',
                'float-hero-delayed': 'floatHero 9s ease-in-out infinite 1.5s',
                'float-hero-slow': 'floatHero 10s ease-in-out infinite 2s',
                'float-rotate': 'floatRotate 9s ease-in-out infinite',
                'float-rotate-reverse': 'floatRotateReverse 10s ease-in-out infinite 1.2s',
                'fade-slide-up': 'fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'scale-pop': 'scalePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',

                // Dashboard
                'float-dash': 'floatDash 6s ease-in-out infinite',
                'float-dash-delayed': 'floatDash 7s ease-in-out 2s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 12s linear infinite',
                'bounce-subtle': 'bounceSubtle 3s infinite',
                'bounce-wild': 'bounceWild 2s infinite',
                'flame-flicker': 'flicker 1.5s infinite alternate',
                'grow-in': 'growIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'unfurl': 'unfurl 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'draw-path': 'drawPath 2s ease-out forwards',
                'stagger-pop': 'staggerPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'bar-grow': 'barGrow 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'chart-line': 'chartLine 2s ease-out forwards',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'blob': 'blob 7s infinite',

                // Timeline
                'float-time': 'floatTime 8s ease-in-out infinite',
                'float-time-delayed': 'floatTime 8s ease-in-out 4s infinite',
                'warp-in': 'warpIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'shatter-in': 'shatterIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                'grow-rune': 'growRune 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'bounce-slight': 'bounceSlight 2s infinite',

                // How It Works
                'float-forest': 'floatForest 8s ease-in-out infinite',
                'float-forest-delayed': 'floatForest 9s ease-in-out 2s infinite',
                'sway': 'sway 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                'grow-up': 'growUp 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'pollen-drift': 'pollenDrift 20s linear infinite',
                'bloom-text': 'bloomText 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'leaf-rustle': 'rustle 3s ease-in-out infinite',
                'confetti-burst': 'confettiBurst 0.6s ease-out forwards',
                'stream-flow': 'streamFlow 20s linear infinite',
                'map-drift': 'mapDrift 40s linear infinite alternate',
                'glyph-drift': 'glyphDrift 12s ease-in-out infinite',
                'particle-swirl': 'particleSwirl 25s linear infinite',
                'pixie-flock': 'pixieFlock 15s ease-in-out infinite alternate',
                'sprout-rise': 'sproutRise 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                'scroll-loop': 'scrollLoop 30s linear infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'card-hover': 'cardHover 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                'bar-fill': 'barFill 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
            },
            keyframes: {
                // Hero
                floatHero: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                floatRotate: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
                    '50%': { transform: 'translateY(-8px) rotate(-2deg)' },
                },
                floatRotateReverse: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(2deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(3deg)' },
                },
                fadeSlideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scalePop: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '60%': { transform: 'scale(1.05)', opacity: '1' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },

                // Dashboard
                floatDash: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(-3%)' },
                    '50%': { transform: 'translateY(3%)' },
                },
                bounceWild: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%': { transform: 'translateY(-10px) scale(1.05)' },
                },
                flicker: {
                    '0%': { transform: 'scale(1)', opacity: '0.9', filter: 'brightness(1)' },
                    '50%': { transform: 'scale(0.98)', opacity: '0.8', filter: 'brightness(0.95)' },
                    '100%': { transform: 'scale(1.02)', opacity: '1', filter: 'brightness(1.05)' },
                },
                growIn: {
                    '0%': { transform: 'scale(0.9) translateY(20px)', opacity: '0' },
                    '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
                },
                unfurl: {
                    '0%': { transform: 'scale(0.5) rotate(-15deg)', opacity: '0' },
                    '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
                },
                staggerPop: {
                    '0%': { transform: 'scale(0.5)', opacity: '0' },
                    '80%': { transform: 'scale(1.1)', opacity: '1' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                barGrow: {
                    '0%': { height: '0%', opacity: '0' },
                    '100%': { opacity: '1' },
                },
                chartLine: {
                    '0%': { strokeDasharray: '0, 1000' },
                    '100%': { strokeDasharray: '1000, 0' },
                },
                fadeUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                shimmer: {
                    'from': { transform: 'translateX(-100%)' },
                    'to': { transform: 'translateX(100%)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },

                // Timeline
                floatTime: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                warpIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
                shatterIn: {
                    '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                growRune: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                bounceSlight: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-3px)' },
                },

                // How It Works
                floatForest: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                sway: {
                    '0%, 100%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' },
                },
                growUp: {
                    '0%': { height: '0%', opacity: '0' },
                    '100%': { height: 'var(--target-height)', opacity: '1' },
                },
                pollenDrift: {
                    '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '100%': { transform: 'translate(100px, -50px) rotate(180deg)' },
                },
                bloomText: {
                    '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9) rotate(-2deg)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1) rotate(0deg)' },
                },
                rustle: {
                    '0%, 100%': { transform: 'skewX(0deg)' },
                    '50%': { transform: 'skewX(1deg)' },
                },
                confettiBurst: {
                    '0%': { transform: 'scale(0) translateY(0)', opacity: 0 },
                    '50%': { transform: 'scale(1.2) translateY(-10px)', opacity: 1 },
                    '100%': { transform: 'scale(1) translateY(0)', opacity: 0 }
                },
                streamFlow: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' }
                },
                mapDrift: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 50%' }
                },
                glyphDrift: {
                    '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
                    '33%': { transform: 'translate(20px, -20px) rotate(10deg)' },
                    '66%': { transform: 'translate(-10px, 10px) rotate(-5deg)' }
                },
                particleSwirl: {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '50%': { transform: 'rotate(180deg) scale(1.1)' },
                    '100%': { transform: 'rotate(360deg) scale(1)' }
                },
                pixieFlock: {
                    '0%': { transform: 'translate(0,0)' },
                    '25%': { transform: 'translate(10px, -15px)' },
                    '50%': { transform: 'translate(-5px, -25px)' },
                    '75%': { transform: 'translate(-15px, -10px)' },
                    '100%': { transform: 'translate(0,0)' }
                },
                sproutRise: {
                    '0%': { height: '0%', opacity: 0 },
                    '100%': { height: '80%', opacity: 1 }
                },
                scrollLoop: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(132, 204, 22, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(132, 204, 22, 0.6)' },
                },
                cardHover: {
                    '0%': { transform: 'translateY(0) scale(1)' },
                    '100%': { transform: 'translateY(-8px) scale(1.02)' },
                },
                barFill: {
                    '0%': { width: '0%' },
                    '100%': { width: 'var(--fill-width)' }
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 0.8 }
                },
                drawPath: {
                    to: { strokeDashoffset: 0 },
                },
            },
            transitionTimingFunction: {
                'brand-curve': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                'brand-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
