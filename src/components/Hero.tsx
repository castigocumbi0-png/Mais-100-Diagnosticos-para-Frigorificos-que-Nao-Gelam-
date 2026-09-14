import React from 'react';
import { heroData } from '../data/content';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section
      id="secao-hero"
      className="w-full px-4 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 border-b border-[#E2E8F0]"
      style={{ background: '#F4F8FA', color: '#263238' }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2 rounded-full mb-6 bg-[#E0EDF2] text-[#123B4A] border border-[#CBDDE4]">
            {heroData.badge}
          </div>

          {/* Headline */}
          <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-black tracking-tight leading-[1.12] text-[#123B4A]">
            {heroData.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-[17px] sm:text-[20px] lg:text-[22px] max-w-2xl mx-auto mt-4 text-[#263238]/90 font-medium leading-[1.45]">
            {heroData.subheadline}
          </p>

          {/* Imagem da Capa solicitada */}
          <div className="my-8 sm:my-10 flex justify-center">
            <div className="relative max-w-md w-full px-2">
              <img
                src="/src/assets/images/capa_frigorificos.png"
                onError={(e) => {
                  // Fallback para a URL direta caso necessário
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/TB0Lv2Y6/capa.png';
                }}
                alt="+100 Diagnósticos para Frigoríficos que Não Gelam"
                className="w-full max-w-[360px] mx-auto h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-8">
            <a
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                onCtaClick();
              }}
              className="px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-[20px] inline-block text-center transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] pv-pulse cursor-pointer shadow-xl font-bold rounded-full tracking-tight uppercase text-white"
              style={{
                background: '#16A34A',
                boxShadow: '0 14px 30px -10px rgba(22, 163, 74, 0.55)',
              }}
            >
              {heroData.ctaText}
            </a>
          </div>

          <p className="text-xs text-[#263238]/70 mt-3">
            Acesso imediato ao material completo em formato digital para consulta no celular ou computador.
          </p>
        </div>
      </div>
    </section>
  );
};
