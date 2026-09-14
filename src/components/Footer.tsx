import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="secao-rodape"
      className="w-full px-4 py-12 text-xs sm:text-sm border-t border-[#CBDDE4]"
      style={{ background: '#F4F8FA', color: '#263238' }}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        <div>
          <h4 className="font-bold text-base text-[#123B4A]">
            +100 Diagnósticos para Frigoríficos que Não Gelam
          </h4>
          <p className="text-xs sm:text-sm text-[#263238]/85 mt-1">
            E-book de consulta prática para técnicos iniciantes e profissionais de manutenção que buscam mais clareza para investigar frigoríficos que não gelam.
          </p>
        </div>

        <div className="pt-4 border-t border-[#CBDDE4] text-[11px] sm:text-xs text-[#263238]/75 leading-relaxed space-y-2">
          <p>
            Todos os direitos sobre a obra “+100 Diagnósticos para Frigoríficos que Não Gelam” são reservados ao +100 Diagnósticos para Frigoríficos que Não Gelam, nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais). A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais (Art. 184 do Código Penal e Lei 9.610/98), sujeitando os infratores às sanções civis e criminais previstas na legislação aplicável.
          </p>
          <p className="pt-2 font-medium">
            Copyright © 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
