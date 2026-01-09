import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto motion-fade-up">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl shadow-button hover:rotate-6 transition-transform duration-300">
          R
        </div>
        <span className="text-2xl font-display font-extrabold text-primary tracking-tight">RANKAK</span>
      </div>
      <div className="hidden md:flex items-center gap-10 font-bold text-sm text-text-muted-light dark:text-text-muted-dark">
        <a className="hover:text-primary transition-colors duration-200" href="#">How it works</a>
        <a className="hover:text-primary transition-colors duration-200" href="#">Success Stories</a>
        <a className="hover:text-primary transition-colors duration-200" href="#">Pricing</a>
      </div>
      <div className="flex items-center gap-6">
        <button className="hidden md:block font-bold text-primary hover:text-indigo-700 transition-colors duration-200">Log in</button>
        <button className="bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-text-main-light dark:text-text-main-dark font-bold py-2 px-6 rounded-full shadow-button hover:translate-y-[2px] hover:shadow-button-hover transition-all duration-300 ease-brand-curve active:translate-y-[4px] active:shadow-none">
          Get App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;