import React from 'react';
import { carouselDiagnosticImages } from '../data/carouselImages';

export const DiagnosticCarousel: React.FC = () => {
  // Duplicating the list to provide seamless endless loop scrolling
  const fullList = [...carouselDiagnosticImages, ...carouselDiagnosticImages];

  return (
    <div className="w-full my-10 overflow-hidden py-4 relative group">
      {/* Subtle edge gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      {/* Marquee track rolling continuously from right to left */}
      <div className="flex w-max marquee-track gap-4 sm:gap-6 items-center">
        {fullList.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-[200px] sm:w-[260px] md:w-[280px] shrink-0 rounded-2xl overflow-hidden bg-white border border-[#CBDDE4] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="relative aspect-[4/3] bg-[#F4F8FA] overflow-hidden">
              <img
                src={item.localPath}
                alt={item.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = item.fallbackUrl;
                }}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-2.5 left-2.5 bg-[#123B4A]/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Diagnóstico #{((index % carouselDiagnosticImages.length) + 1).toString().padStart(2, '0')}
              </span>
            </div>
            <div className="p-3 bg-white">
              <p className="text-xs sm:text-sm font-bold text-[#123B4A] line-clamp-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
