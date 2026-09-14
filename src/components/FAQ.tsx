import React, { useState } from 'react';
import { faqList } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="w-full px-4 py-16 sm:py-20 bg-white text-[#263238]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black tracking-tight leading-[1.15] text-[#123B4A]">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#263238]/80 mt-2">
            Tire suas dúvidas sobre o material e como utilizar nos seus atendimentos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqList.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="rounded-xl bg-[#F4F8FA] border border-[#CBDDE4] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-[#E0EDF2]/50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-[#123B4A] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className="h-7 w-7 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-transform duration-300"
                    style={{
                      background: isOpen ? '#123B4A' : '#CBDDE4',
                      color: isOpen ? '#FFFFFF' : '#123B4A',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#263238] leading-relaxed border-t border-[#CBDDE4]/60 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
