import React from 'react';

interface UrgencyCTAProps {
  onCtaClick: () => void;
}

export const UrgencyCTA: React.FC<UrgencyCTAProps> = ({ onCtaClick }) => {
  return (
    <section
      id="secao-urgencia"
      className="w-full px-4 py-16 sm:py-20 bg-[#123B4A] text-white"
    >
      <div className="mx-auto max-w-[900px] text-center space-y-6">
        <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-300 bg-white/10 px-4 py-1.5 rounded-full">
          Planejamento e Segurança
        </span>

        <h2 className="text-[28px] sm:text-[42px] lg:text-[48px] font-black tracking-tight leading-[1.15] text-white">
          Não espere o próximo frigorífico parar de gelar para descobrir que você não sabe por onde começar
        </h2>

        <p className="text-base sm:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
          Tenha agora uma referência com +100 diagnósticos para consultar quando surgir um problema de refrigeração.
        </p>

        <div className="max-w-xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 text-left text-sm sm:text-base space-y-3">
          <p className="text-white/90">
            Você não sabe quando vai aparecer o próximo atendimento.
          </p>
          <p className="text-white/90 font-medium">
            Mas quando aparecer, a dúvida pode ser sempre a mesma: <strong className="text-amber-300">“Por onde eu começo?”</strong>
          </p>
          <p className="text-white/90">
            Em vez de deixar para procurar informações somente quando o problema surgir, tenha o <strong>+100 Diagnósticos para Frigoríficos que Não Gelam</strong> disponível para consulta.
          </p>
          <p className="text-white/95 font-semibold pt-2 border-t border-white/15">
            Um único guia para ajudar você a investigar possíveis causas de forma mais organizada e ter uma referência à mão quando precisar.
          </p>
        </div>

        <div className="pt-4">
          <a
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              onCtaClick();
            }}
            className="px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-[20px] inline-block text-center transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] pv-pulse font-bold rounded-full tracking-tight uppercase shadow-2xl cursor-pointer text-white"
            style={{
              background: '#16A34A',
              boxShadow: '0 14px 30px -10px rgba(22, 163, 74, 0.65)',
            }}
          >
            QUERO TER ACESSO AO GUIA
          </a>
        </div>
      </div>
    </section>
  );
};
