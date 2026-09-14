import React from 'react';
import { insideMaterialList } from '../data/content';
import { DiagnosticCarousel } from './DiagnosticCarousel';

export const InsideMaterial: React.FC = () => {
  return (
    <section
      id="secao-material"
      className="w-full px-4 py-16 sm:py-20 bg-white text-[#263238]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black tracking-tight leading-[1.15] text-[#123B4A]">
            Veja o que você terá em mãos para consultar quando um frigorífico não gela
          </h2>
          <p className="text-base sm:text-lg text-[#263238]/85 mt-3 leading-relaxed">
            Um guia de consulta prática para deixar de depender apenas da tentativa e erro na hora de investigar um problema.
          </p>
        </div>

        {/* Carrossel infinito rolando da direita para a esquerda */}
        <DiagnosticCarousel />

        <div className="text-center mb-8">
          <span className="inline-block text-sm sm:text-base font-bold text-[#123B4A] bg-[#E0EDF2] px-5 py-2 rounded-full border border-[#CBDDE4]">
            Dentro do material, você encontrará:
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {insideMaterialList.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#F4F8FA] border border-[#CBDDE4] transition-all duration-300 hover:shadow-md hover:border-[#123B4A]/30 flex flex-col justify-start"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-8 w-8 rounded-lg bg-[#123B4A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {index + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#123B4A] leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#263238]/90 leading-relaxed pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Na prática block */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#123B4A] text-white shadow-xl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E0EDF2] bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
            Na prática...
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Imagine chegar diante de um frigorífico que não gela.
          </h3>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            Em vez de ficar alguns minutos pensando:
          </p>
          <div className="p-4 rounded-xl bg-white/10 border border-white/20 mb-4 text-center">
            <span className="text-lg sm:text-xl font-black text-amber-300">
              “Por onde eu começo?”
            </span>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
            Você abre o guia, encontra uma situação semelhante, consulta as possíveis causas e utiliza aquela informação como referência para conduzir sua investigação.
          </p>
          <p className="text-base sm:text-lg font-bold text-emerald-300 pt-2 border-t border-white/15">
            É isso que o +100 Diagnósticos foi pensado para fazer: colocar direcionamento na sua mão quando você mais precisa dele.
          </p>
        </div>
      </div>
    </section>
  );
};
