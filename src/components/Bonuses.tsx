import React from 'react';
import { bonusList } from '../data/content';

export const Bonuses: React.FC = () => {
  return (
    <section
      id="secao-bonus"
      className="w-full px-4 py-16 sm:py-20 bg-white text-[#263238]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black tracking-tight leading-[1.15] text-[#123B4A]">
            E ainda tem mais...
          </h2>
          <p className="text-base sm:text-lg text-[#263238]/90 mt-2">
            Para deixar seu diagnóstico ainda mais organizado, você também recebe estes <strong>3 bônus</strong>:
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonusList.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-2xl bg-[#F4F8FA] border border-[#CBDDE4] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-white p-4 flex items-center justify-center border-b border-[#CBDDE4]">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  onError={(e) => {
                    const fallbacks: Record<number, string> = {
                      1: 'https://i.ibb.co/yBRYYdzn/bonus-1.png',
                      2: 'https://i.ibb.co/Xkb7f8Ht/bonus-2.png',
                      3: 'https://i.ibb.co/ynCkZBk3/bonus-3.png',
                    };
                    if (fallbacks[bonus.id]) {
                      (e.currentTarget as HTMLImageElement).src = fallbacks[bonus.id];
                    }
                  }}
                  className="h-60 sm:h-64 w-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-base sm:text-lg text-[#123B4A] mb-2 leading-tight">
                    {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#263238]/90 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#CBDDE4] text-center">
                  <span className="text-xs font-bold text-[#16A34A] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#16A34A]/30">
                    Incluso no Plano Completo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
