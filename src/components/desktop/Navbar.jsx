import React from 'react';

const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto motion-fade-up relative z-50">
      <div className="flex items-center gap-0.5 cursor-pointer group" onClick={(e) => scrollToSection(e, 'hero')}>
        <div className="relative w-10 h-10 flex items-center justify-center mr-1">
          <div className="absolute inset-0 bg-hero-primary/20 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-hero-primary rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center text-white font-display font-black text-xl shadow-lg border border-white/20">
            R
          </div>
        </div>
        <span className="text-2xl font-display font-black tracking-tight text-gray-900 group-hover:text-hero-primary transition-colors duration-300">
          ANKAK
        </span>
      </div>
      <div className="hidden md:flex items-center gap-10 font-bold text-sm text-hero-text-muted-light dark:text-hero-text-muted-dark">
        <a className="hover:text-hero-primary transition-colors duration-200 cursor-pointer" onClick={(e) => scrollToSection(e, 'timeline')}>Timeline</a>
        <a className="hover:text-hero-primary transition-colors duration-200 cursor-pointer" onClick={(e) => scrollToSection(e, 'how-it-works')}>How it works</a>
        <a className="hover:text-hero-primary transition-colors duration-200 cursor-pointer" onClick={(e) => scrollToSection(e, 'cta')}>Get Started</a>
      </div>
      <div className="flex items-center gap-6">
        <button className="hidden md:block font-bold text-hero-primary hover:text-indigo-700 transition-colors duration-200" onClick={(e) => scrollToSection(e, 'cta')}>Log in</button>
        <button
          className="bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-hero-text-main-light dark:text-hero-text-main-dark font-bold py-2 px-6 rounded-full shadow-hero-button hover:translate-y-[2px] hover:shadow-hero-button-hover transition-all duration-300 ease-brand-curve active:translate-y-[4px] active:shadow-none"
          onClick={(e) => scrollToSection(e, 'cta')}
        >
          Get App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
