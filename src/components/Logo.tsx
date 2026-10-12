import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'iconOnly';
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  lightText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Emblem: The Q + Nautical Anchor + Wave + Verification Checkmark */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 140 140"
          className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform hover:scale-105 duration-200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Outer Circular Monogram 'Q' Swoosh */}
          <path
            d="M 70 14 C 38 14 16 38 16 70 C 16 98 35 120 62 125 C 68 126 73 124 77 121 C 82 125 90 128 100 128 C 107 128 114 125 119 120 C 111 114 104 110 98 103 C 114 94 124 79 124 62 C 124 34 100 14 70 14 Z"
            fill="#0F2744"
          />

          {/* Inner Light Glow Cutout */}
          <circle cx="70" cy="70" r="46" fill="#FFFFFF" />

          {/* Nautical Anchor Symbol */}
          {/* Top Ring / Shackle */}
          <circle cx="70" cy="38" r="7.5" stroke="#0F2744" strokeWidth="4.5" fill="none" />
          <circle cx="70" cy="38" r="3.5" fill="#FFFFFF" />

          {/* Stock / Crossbar */}
          <rect x="52" y="49" width="36" height="5" rx="2.5" fill="#0F2744" />
          <circle cx="53" cy="51.5" r="3.5" fill="#0F2744" />
          <circle cx="87" cy="51.5" r="3.5" fill="#0F2744" />

          {/* Central Shank */}
          <rect x="67.5" y="48" width="5" height="46" rx="2.5" fill="#0F2744" />

          {/* Curved Lower Flukes / Anchor Arms */}
          <path
            d="M 40 76 C 43 96 55 106 70 106 C 85 106 97 96 100 76"
            stroke="#0F2744"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Arrow Fluke */}
          <path d="M 36 78 L 44 75 L 42 85 Z" fill="#0F2744" />
          {/* Right Arrow Fluke */}
          <path d="M 104 78 L 96 75 L 98 85 Z" fill="#0F2744" />

          {/* Dynamic Turquoise / Teal Wave Ribbon Swoosh */}
          <path
            d="M 22 75 C 38 52 62 82 86 64 C 98 55 108 58 116 66 C 108 60 96 64 84 73 C 60 91 38 67 22 75 Z"
            fill="url(#tealGradient)"
          />

          {/* Quality Accreditation Verification Checkmark (Green) */}
          <path
            d="M 75 73 L 85 84 L 110 57"
            stroke="#10B981"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Definitions for Gradients */}
          <defs>
            <linearGradient id="tealGradient" x1="20" y1="60" x2="116" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0EA5E9" />
              <stop offset="0.6" stopColor="#0284C7" />
              <stop offset="1" stopColor="#0D9488" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography: Wordmark & Tagline */}
      {variant !== 'iconOnly' && (
        <div className="flex flex-col">
          <div className="flex items-baseline tracking-tight">
            <span
              className={`font-heading text-xl sm:text-2xl font-extrabold tracking-tight ${
                lightText ? 'text-white' : 'text-[#0F2744]'
              }`}
            >
              QMS<span className="text-[#0284C7]">Anchor</span>
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`text-[9.5px] sm:text-[10.5px] font-medium tracking-wide uppercase ${
                lightText ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Your Partner in Quality Excellence
            </span>
          )}
        </div>
      )}
    </div>
  );
};
