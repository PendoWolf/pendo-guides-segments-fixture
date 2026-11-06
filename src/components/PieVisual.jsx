import { useId } from 'react'

export default function PieVisual({ colors, view = 'hero', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const shell = colors?.shell || '#D4A373'
  const filling = colors?.filling || '#C23B22'
  const accent = colors?.accent || '#F4A261'

  if (view === 'slice') {
    return (
      <svg className={`pie-visual ${className}`} viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id={`slice-${uid}`} cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor={filling} />
          </radialGradient>
        </defs>
        <path
          d="M100 28 L178 150 A90 90 0 0 1 22 150 Z"
          fill={`url(#slice-${uid})`}
        />
        <path
          d="M100 28 L178 150 L160 158 L100 48 L40 158 L22 150 Z"
          fill={shell}
          opacity="0.95"
        />
        <ellipse cx="100" cy="150" rx="78" ry="14" fill={shell} opacity="0.55" />
        <circle cx="118" cy="96" r="6" fill={accent} opacity="0.8" />
        <circle cx="90" cy="112" r="4" fill="#fff" opacity="0.25" />
      </svg>
    )
  }

  if (view === 'crust') {
    return (
      <svg className={`pie-visual ${className}`} viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="108" r="78" fill={shell} />
        <circle cx="100" cy="100" r="68" fill={filling} />
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="100"
            x2={100 + 60 * Math.cos((deg * Math.PI) / 180)}
            y2={100 + 60 * Math.sin((deg * Math.PI) / 180)}
            stroke={accent}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.85"
          />
        ))}
        <circle cx="100" cy="100" r="10" fill={accent} />
        <path
          d="M30 108 Q100 128 170 108"
          stroke={shell}
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    )
  }

  return (
    <svg className={`pie-visual ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id={`hero-${uid}`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor={accent} />
          <stop offset="55%" stopColor={filling} />
          <stop offset="100%" stopColor={filling} stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="150" rx="82" ry="16" fill={shell} opacity="0.35" />
      <circle cx="100" cy="104" r="78" fill={shell} />
      <circle cx="100" cy="100" r="66" fill={`url(#hero-${uid})`} />
      <path
        d="M42 95 Q70 70 100 95 Q130 120 158 95"
        stroke={accent}
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M48 115 Q80 90 110 115 Q140 140 152 118"
        stroke={accent}
        strokeWidth="3"
        fill="none"
        opacity="0.45"
      />
      <circle cx="78" cy="88" r="5" fill="#fff" opacity="0.3" />
      <circle cx="124" cy="108" r="4" fill="#fff" opacity="0.2" />
    </svg>
  )
}
