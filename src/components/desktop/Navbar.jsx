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
      <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 'hero')}>
        <div className="w-10 h-10 bg-hero-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl shadow-hero-button hover:rotate-6 transition-transform duration-300">
          R
        </div>
        <span className="text-2xl font-display font-extrabold text-hero-primary tracking-tight">RANKAK</span>
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
