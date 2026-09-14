import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div
      id="secao-0"
      className="w-full text-center text-xs sm:text-sm md:text-base py-3 px-4 font-bold tracking-wide sticky top-0 z-40 shadow-sm"
      style={{ background: '#123B4A', color: '#FFFFFF' }}
    >
      <div className="mx-auto max-w-[1200px] flex items-center justify-center gap-2">
        <span>❄️</span>
        <span>
          +100 DIAGNÓSTICOS PARA FRIGORÍFICOS QUE NÃO GELAM — GUIA DE CONSULTA PRÁTICA
        </span>
      </div>
    </div>
  );
};
