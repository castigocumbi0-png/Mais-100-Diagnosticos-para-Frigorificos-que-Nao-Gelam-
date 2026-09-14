import React from 'react';
import { receiveChecklist } from '../data/content';

export const Deliverables: React.FC = () => {
  return (
    <section
      id="secao-receber"
      className="w-full px-4 py-16 sm:py-20 bg-[#F4F8FA] text-[#263238] border-t border-b border-[#E2E8F0]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black tracking-tight leading-[1.15] text-[#123B4A]">
            Tudo o que você vai receber
          </h2>
          <p className="text-base sm:text-lg text-[#263238]/85 mt-2">
            Um guia criado para ajudar você a encontrar um ponto de partida quando um frigorífico não gela.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-10 bg-white border border-[#CBDDE4] shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📘</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#123B4A]">
                +100 Diagnósticos para Frigoríficos que Não Gelam
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#16A34A] uppercase tracking-wider">
                O seu material principal de consulta
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#263238] leading-relaxed">
            Um e-book reunindo <strong>+100 situações de frigoríficos que não gelam</strong>, organizadas para ajudar você a consultar possíveis causas e entender quais pontos podem ser investigados.
          </p>

          <div className="p-4 rounded-xl bg-[#F4F8FA] border border-[#CBDDE4]">
            <p className="font-bold text-sm sm:text-base text-[#123B4A] mb-3">
              Você terá acesso a:
            </p>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#263238]">
              {receiveChecklist.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <span className="text-[#16A34A] font-bold text-base">●</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não é sobre decorar callout */}
          <div className="p-5 rounded-xl bg-[#E0EDF2] border border-[#CBDDE4] space-y-2">
            <p className="font-bold text-sm sm:text-base text-[#123B4A]">
              🔎 Não é sobre decorar +100 problemas.
            </p>
            <p className="text-xs sm:text-sm text-[#263238] leading-relaxed">
              É sobre ter uma referência para consultar quando aparecer aquele atendimento em que você pensa:
            </p>
            <p className="text-xs sm:text-sm font-semibold italic text-[#123B4A]">
              “Eu sei que esse frigorífico não está gelando... mas por onde eu começo?”
            </p>
            <p className="text-xs sm:text-sm text-[#263238]/90 leading-relaxed pt-1">
              O objetivo do guia é justamente colocar essas informações em um único lugar, para que você possa consultar o material e ter mais clareza sobre os possíveis caminhos de investigação.
            </p>
          </div>

          {/* Feito para consulta */}
          <div className="border-t border-[#E2E8F0] pt-4 space-y-2">
            <p className="font-bold text-sm sm:text-base text-[#123B4A]">
              🧰 Feito para consulta, não para ficar esquecido na estante
            </p>
            <p className="text-xs sm:text-sm text-[#263238]/85">
              Você poderá voltar ao material sempre que surgir uma nova situação.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold pt-2">
              <div className="p-2 rounded-lg bg-[#F4F8FA] border border-[#CBDDE4] text-[#123B4A]">
                1. Abriu o atendimento
              </div>
              <div className="p-2 rounded-lg bg-[#F4F8FA] border border-[#CBDDE4] text-[#123B4A]">
                2. Identificou o sintoma
              </div>
              <div className="p-2 rounded-lg bg-[#F4F8FA] border border-[#CBDDE4] text-[#123B4A]">
                3. Surgiu a dúvida
              </div>
              <div className="p-2 rounded-lg bg-[#E0EDF2] border border-[#CBDDE4] text-[#16A34A]">
                4. Consulte o guia
              </div>
            </div>
            <p className="text-xs text-[#263238] font-medium text-center pt-2">
              Consulte o guia e comece sua investigação com mais direção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
