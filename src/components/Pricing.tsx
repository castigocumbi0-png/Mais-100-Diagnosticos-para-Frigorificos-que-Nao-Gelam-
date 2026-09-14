import React from 'react';
import { plansList } from '../data/content';

export const Pricing: React.FC = () => {
  const [basicPlan, completePlan] = plansList;

  return (
    <section
      id="planos"
      className="w-full px-4 py-16 sm:py-20 bg-[#F4F8FA] text-[#263238] border-t border-[#E2E8F0] scroll-mt-16"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black tracking-tight leading-[1.15] text-[#123B4A]">
            Escolha como você quer receber o seu material
          </h2>
          <p className="text-base sm:text-lg text-[#263238]/90 max-w-xl mx-auto">
            Tenha o guia que pode ajudar você a responder à pergunta que aparece diante de um frigorífico que não gela:
          </p>
          <div className="py-2 px-6 rounded-xl bg-white border border-[#CBDDE4] inline-block shadow-sm">
            <span className="text-lg sm:text-xl font-black text-[#123B4A]">
              “Por onde eu começo?”
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 mx-auto items-stretch md:grid-cols-2 max-w-4xl">
          {/* Plano Básico */}
          <div className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#CBDDE4] shadow-md transition-all duration-300 hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#123B4A]">
                  {basicPlan.name}
                </h3>
              </div>

              <p className="text-sm font-semibold text-[#123B4A]/80 mb-4">
                {basicPlan.subtitle}
              </p>

              <div className="my-4 flex justify-center">
                <img
                  src={basicPlan.image}
                  alt={basicPlan.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/RGyZRbg5/2.png';
                  }}
                  className="h-48 sm:h-52 w-auto object-contain rounded-xl border border-[#CBDDE4] p-1 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#F4F8FA] border border-[#CBDDE4] mb-4 text-xs sm:text-sm text-[#263238] space-y-2">
                <p className="leading-relaxed">
                  Você recebe o produto principal para consultar possíveis causas e caminhos de investigação diante de diferentes situações de frigoríficos que não gelam.
                </p>
                <p className="font-bold text-[#123B4A]">Você recebe:</p>
                <p className="font-semibold text-[#16A34A]">
                  ✓ +100 Diagnósticos para Frigoríficos que Não Gelam
                </p>
              </div>
            </div>

            <div>
              <div className="text-center my-4">
                <div className="inline-flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-[#263238]/60 line-through font-bold">
                    De {basicPlan.originalPrice || 'R$ 99,90'}
                  </span>
                  <span className="text-[10px] uppercase font-bold bg-[#123B4A]/10 text-[#123B4A] px-2.5 py-0.5 rounded-full">
                    Promoção
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1.5 mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-[#123B4A]">Por apenas</span>
                  <p className="text-3xl sm:text-4xl font-black text-[#123B4A]">
                    {basicPlan.price}
                  </p>
                </div>
                {basicPlan.priceNote && (
                  <p className="text-[11px] text-[#263238]/70 mt-1 font-medium">
                    {basicPlan.priceNote}
                  </p>
                )}
              </div>

              <a
                href={basicPlan.checkoutUrl}
                target={basicPlan.checkoutUrl.startsWith('http') ? '_blank' : undefined}
                rel={basicPlan.checkoutUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-8 py-3.5 text-base sm:text-lg w-full inline-block text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-bold rounded-full tracking-tight uppercase shadow-lg text-white"
                style={{ background: '#123B4A' }}
              >
                {basicPlan.ctaText}
              </a>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white border-2 border-[#16A34A] shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <span
              className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs font-black px-5 py-1 rounded-b-xl whitespace-nowrap shadow-md tracking-wider uppercase text-white"
              style={{ background: '#16A34A' }}
            >
              🔥 MAIS COMPLETO
            </span>

            <div className="pt-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#123B4A]">
                  {completePlan.name}
                </h3>
              </div>

              <p className="text-sm font-semibold text-[#16A34A] mb-4">
                {completePlan.subtitle}
              </p>

              <div className="my-4 flex justify-center">
                <img
                  src={completePlan.image}
                  alt={completePlan.name}
                  className="h-48 sm:h-52 w-auto object-contain rounded-xl border border-[#CBDDE4] p-1 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#E0EDF2]/60 border border-[#CBDDE4] mb-4 text-xs sm:text-sm text-[#263238] space-y-2">
                <p className="leading-relaxed">
                  Tenha o produto principal mais os 3 materiais complementares criados para ajudar você a organizar ainda melhor seu diagnóstico.
                </p>
                <p className="font-bold text-[#123B4A]">Você recebe:</p>
                <ul className="space-y-1.5 font-semibold text-[#263238]">
                  <li className="text-[#16A34A]">✓ +100 Diagnósticos para Frigoríficos que Não Gelam</li>
                  <li>✓ Checklist de Diagnóstico</li>
                  <li>✓ Ficha de Diagnóstico</li>
                  <li>✓ Guia “Por Onde Começar?”</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-center my-4">
                <div className="inline-flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-rose-500 line-through font-bold">
                    De {completePlan.originalPrice || 'R$ 99,90'}
                  </span>
                  <span className="text-[10px] uppercase font-black bg-[#16A34A] text-white px-2.5 py-0.5 rounded-full shadow-sm">
                    Super Promoção
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1.5 mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-[#16A34A]">Por apenas</span>
                  <p className="text-3xl sm:text-4xl font-black text-[#16A34A]">
                    {completePlan.price}
                  </p>
                </div>
                {completePlan.priceNote && (
                  <p className="text-[11px] text-[#16A34A] mt-1 font-bold">
                    {completePlan.priceNote}
                  </p>
                )}
              </div>

              <a
                href={completePlan.checkoutUrl}
                target={completePlan.checkoutUrl.startsWith('http') ? '_blank' : undefined}
                rel={completePlan.checkoutUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-8 py-4 text-base sm:text-lg w-full inline-block text-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] pv-pulse font-bold rounded-full tracking-tight uppercase shadow-xl text-white"
                style={{
                  background: '#16A34A',
                  boxShadow: '0 14px 30px -10px rgba(22, 163, 74, 0.55)',
                }}
              >
                {completePlan.ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Transition note */}
        <div className="mt-12 text-center max-w-xl mx-auto space-y-2">
          <p className="text-sm sm:text-base font-semibold text-[#123B4A]">
            Se você já sabe que precisa de uma referência para consultar durante seus diagnósticos...
          </p>
          <p className="text-xs sm:text-sm text-[#263238]/80">
            Escolha a opção que faz mais sentido para você e tenha acesso ao material.
          </p>
        </div>
      </div>
    </section>
  );
};
