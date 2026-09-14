import React, { useState, useEffect } from 'react';

interface StickyBottomBarProps {
  onCtaClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onCtaClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-md transition-all duration-300 animate-fade-in"
      style={{
        background: 'rgba(18, 59, 74, 0.96)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#FFFFFF',
      }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="h-8 w-8 rounded-full hidden sm:flex items-center justify-center font-black text-sm shrink-0"
          style={{ background: '#16A34A', color: '#FFFFFF' }}
        >
          ❄️
        </span>
        <div className="truncate">
          <p className="font-bold text-xs sm:text-sm truncate text-white">
            +100 Diagnósticos para Frigoríficos que Não Gelam
          </p>
          <p className="text-[10px] sm:text-xs text-white/75 truncate">
            E-book de consulta prática
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] uppercase tracking-wider text-white/70">
            De <span className="line-through text-red-300 font-bold">R$ 99,90</span> por
          </p>
          <p className="text-base sm:text-lg font-black leading-none text-emerald-300">
            R$ 17,90
          </p>
        </div>
        <a
          href="#planos"
          onClick={(e) => {
            e.preventDefault();
            onCtaClick();
          }}
          className="px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-black rounded-full uppercase tracking-tight shadow-lg transition-transform active:scale-95 text-white"
          style={{
            background: '#16A34A',
            boxShadow: '0 8px 20px -6px rgba(22, 163, 74, 0.7)',
          }}
        >
          QUERO O GUIA
        </a>
      </div>
    </div>
  );
};
