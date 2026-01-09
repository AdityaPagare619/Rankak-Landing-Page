import React from 'react';

const TestimonialBanner: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto motion-fade-up px-6 mb-20">
      <div className="bg-gradient-to-br from-indigo-600 to-primary rounded-[2.5rem] p-8 md:p-14 text-center shadow-2xl shadow-indigo-500/40 overflow-hidden relative border-4 border-indigo-400/30 group cursor-default hover:scale-[1.01] transition-transform duration-400 ease-brand-curve">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        {/* SVG background pattern using data URI */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjwvc3ZnPg==')]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-lg animate-float-slow group-hover:bg-white/20 transition-colors duration-300">
            <span className="material-symbols-outlined text-accent text-4xl drop-shadow-md">insights</span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-relaxed max-w-3xl drop-shadow-sm">
            "Students joining with <span className="bg-indigo-900/40 px-4 py-1.5 rounded-xl border border-indigo-300/30 text-accent font-black whitespace-nowrap shadow-inner transition-colors duration-300 group-hover:bg-indigo-900/60">&lt;90 days</span> improved <span className="text-accent font-black text-5xl mx-1 filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">60+</span> percentile points because we show them what actually matters now."
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBanner;