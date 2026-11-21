// Ilustraciones vectoriales de respaldo: se muestran cuando un producto todavía no tiene foto.

const palettes = {
  gold: { a: "#F3E2B3", b: "#D4AF6A", c: "#8C6A2B", bg1: "#FBEFD5", bg2: "#EBCB8B" },
  rose: { a: "#FBE3E6", b: "#E9A9B6", c: "#A64560", bg1: "#FCEBEC", bg2: "#F0B9C3" },
  plum: { a: "#E9C9DA", b: "#A8456F", c: "#4A1230", bg1: "#F2D7E3", bg2: "#C77A9C" },
  sky: { a: "#DDEBF7", b: "#8DB6DD", c: "#2E5A86", bg1: "#EAF3FB", bg2: "#BAD3EC" },
  mint: { a: "#DDF1E6", b: "#8CC7A6", c: "#2F6B4C", bg1: "#EAF7EF", bg2: "#B9DFCA" },
};

const Button = (p, x, y, r, k) => (
  <g key={k}>
    <circle cx={x} cy={y} r={r} fill={p.a} stroke={p.c} strokeWidth="3" />
    <circle cx={x} cy={y} r={r * 0.68} fill="none" stroke={p.c} strokeWidth="1.5" opacity=".55" />
    {[
      [-0.2, -0.2],
      [0.2, -0.2],
      [-0.2, 0.2],
      [0.2, 0.2],
    ].map(([dx, dy], i) => (
      <circle key={i} cx={x + dx * r} cy={y + dy * r} r={r * 0.09} fill={p.c} />
    ))}
  </g>
);

const Sock = (p, x, y, fill, k) => (
  <g key={k} transform={`translate(${x} ${y})`}>
    <path d="M0 0 H40 V70 C62 78 78 88 78 108 C78 124 62 130 44 128 C14 124 -2 110 0 74Z" fill={fill} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
    <rect x="-3" y="-8" width="46" height="20" rx="4" fill={p.c} />
    <path d="M4 2 H36" stroke={p.a} strokeWidth="2" strokeDasharray="6 4" />
  </g>
);

const glyphs = {
  /* ---------- Mercería ---------- */
  spool: (p) => (
    <g>
      <rect x="64" y="48" width="72" height="104" fill={p.b} />
      {[60, 70, 80, 90, 100, 110, 120, 130, 140].map((y) => (
        <path key={y} d={`M64 ${y} H136`} stroke={p.a} strokeWidth="2" opacity=".7" />
      ))}
      <rect x="50" y="34" width="100" height="16" rx="8" fill={p.c} />
      <rect x="50" y="150" width="100" height="16" rx="8" fill={p.c} />
      <path d="M136 120 C168 124 176 150 160 176 C150 188 130 184 120 188" fill="none" stroke={p.b} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
  needles: (p) => (
    <g>
      {[-30, -10, 12, 32].map((a, i) => (
        <g key={a} transform={`rotate(${a} 100 140)`}>
          <line x1="100" y1="140" x2="100" y2="38" stroke={p.c} strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="36" r="6" fill={i % 2 ? p.a : p.b} stroke={p.c} strokeWidth="2" />
        </g>
      ))}
      <path d="M46 140 C46 120 154 120 154 140 C158 170 142 186 100 186 C58 186 42 170 46 140Z" fill={p.b} stroke={p.c} strokeWidth="3" />
      <path d="M54 146 C80 156 120 156 146 146" fill="none" stroke={p.a} strokeWidth="2.5" strokeDasharray="2 5" strokeLinecap="round" />
    </g>
  ),
  buttons: (p) => (
    <g>
      {Button(p, 68, 74, 30, "a")}
      {Button(p, 132, 92, 24, "b")}
      {Button(p, 84, 146, 26, "c")}
      {Button(p, 140, 152, 18, "d")}
    </g>
  ),
  zipper: (p) => (
    <g>
      <rect x="66" y="26" width="22" height="150" fill={p.b} stroke={p.c} strokeWidth="2" />
      <rect x="112" y="26" width="22" height="150" fill={p.b} stroke={p.c} strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i}>
          <rect x="88" y={66 + i * 9} width="12" height="6" rx="2" fill={p.c} />
          <rect x="100" y={70.5 + i * 9} width="12" height="6" rx="2" fill={p.a} stroke={p.c} strokeWidth="1" />
        </g>
      ))}
      <rect x="86" y="30" width="28" height="30" rx="8" fill={p.a} stroke={p.c} strokeWidth="3" />
      <rect x="93" y="58" width="14" height="30" rx="7" fill={p.c} />
    </g>
  ),
  tape: (p) => (
    <g>
      <rect x="22" y="62" width="156" height="46" rx="6" fill={p.a} stroke={p.c} strokeWidth="3" />
      {Array.from({ length: 17 }).map((_, i) => (
        <line key={i} x1={34 + i * 7.5} y1="62" x2={34 + i * 7.5} y2={i % 5 === 0 ? 86 : 76} stroke={p.c} strokeWidth="1.6" />
      ))}
      <circle cx="70" cy="150" r="26" fill={p.b} stroke={p.c} strokeWidth="3" />
      <circle cx="70" cy="150" r="9" fill={p.a} stroke={p.c} strokeWidth="2" />
      <path d="M96 150 H170 V132 H150" fill="none" stroke={p.c} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  scissors: (p) => (
    <g>
      <circle cx="68" cy="156" r="22" fill="none" stroke={p.c} strokeWidth="8" />
      <circle cx="132" cy="156" r="22" fill="none" stroke={p.c} strokeWidth="8" />
      <path d="M76 136 L124 34" stroke={p.c} strokeWidth="12" strokeLinecap="round" />
      <path d="M124 136 L76 34" stroke={p.c} strokeWidth="12" strokeLinecap="round" />
      <path d="M76 136 L124 34" stroke={p.a} strokeWidth="6" strokeLinecap="round" />
      <path d="M124 136 L76 34" stroke={p.b} strokeWidth="6" strokeLinecap="round" />
      <circle cx="100" cy="85" r="6" fill={p.c} />
    </g>
  ),
  yarn: (p) => (
    <g>
      <circle cx="100" cy="100" r="62" fill={p.b} stroke={p.c} strokeWidth="3" />
      <g fill="none" stroke={p.a} strokeWidth="3" strokeLinecap="round" opacity=".85">
        <path d="M48 80 C76 58 124 58 152 80" />
        <path d="M40 104 C74 80 128 82 160 106" />
        <path d="M46 130 C78 108 124 110 154 132" />
        <path d="M70 48 C92 84 92 124 76 156" />
        <path d="M120 44 C106 84 112 124 134 154" />
      </g>
      <path d="M130 156 C158 180 120 196 96 180" fill="none" stroke={p.c} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
  ribbon: (p) => (
    <g>
      <path d="M100 92 C58 34 24 66 48 104 C62 124 90 108 100 92Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M100 92 C142 34 176 66 152 104 C138 124 110 108 100 92Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M92 104 L66 176 L88 166 L98 184 L108 108Z" fill={p.a} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M108 104 L134 176 L112 166 L102 184 L92 108Z" fill={p.a} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <rect x="86" y="80" width="28" height="26" rx="10" fill={p.c} />
    </g>
  ),

  /* ---------- Bebé ---------- */
  onesie: (p) => (
    <g>
      <path d="M76 36 C84 52 116 52 124 36 L158 54 L146 84 L132 76 L132 140 C132 154 128 168 124 178 L76 178 C72 168 68 154 68 140 L68 76 L54 84 L42 54 Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M76 36 C84 52 116 52 124 36" fill="none" stroke={p.c} strokeWidth="4" />
      {[88, 100, 112].map((x) => (
        <circle key={x} cx={x} cy="168" r="3.5" fill={p.a} stroke={p.c} strokeWidth="1.5" />
      ))}
      <path d="M72 112 H128" stroke={p.a} strokeWidth="2.5" strokeDasharray="3 6" strokeLinecap="round" />
    </g>
  ),
  booties: (p) => (
    <g>
      {[
        [22, 48],
        [96, 100],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path d="M0 34 C0 6 30 0 36 24 L74 30 C96 36 96 66 76 70 L6 72 C-2 64 0 48 0 34Z" fill={i ? p.b : p.a} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
          <path d="M6 56 H82" stroke={p.c} strokeWidth="2" strokeDasharray="2 5" />
          <circle cx="26" cy="20" r="6" fill={p.c} />
        </g>
      ))}
    </g>
  ),
  bonnet: (p) => (
    <g>
      <path d="M48 126 C48 52 152 52 152 126Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M100 58 V126 M78 66 C66 86 62 106 62 126 M122 66 C134 86 138 106 138 126" fill="none" stroke={p.a} strokeWidth="2.5" opacity=".7" />
      <rect x="44" y="120" width="112" height="22" rx="11" fill={p.a} stroke={p.c} strokeWidth="3" />
      <circle cx="100" cy="54" r="11" fill={p.a} stroke={p.c} strokeWidth="3" />
      <path d="M60 140 C56 164 60 176 52 188 M140 140 C144 164 140 176 148 188" fill="none" stroke={p.c} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  /* ---------- Hombre ---------- */
  boxer: (p) => (
    <g>
      <path d="M56 50 H144 L152 146 C152 158 138 162 126 160 C110 158 106 140 100 122 C94 140 90 158 74 160 C62 162 48 158 48 146Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <rect x="54" y="36" width="92" height="20" rx="4" fill={p.c} />
      <path d="M62 46 H138" stroke={p.a} strokeWidth="3" strokeDasharray="10 5" />
      <path d="M100 122 V58" stroke={p.c} strokeWidth="2" opacity=".5" />
    </g>
  ),
  tank: (p) => (
    <g>
      <path d="M68 28 C68 54 86 66 100 66 C114 66 132 54 132 28 L148 32 C152 70 140 96 148 178 L52 178 C60 96 48 70 52 32Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M100 70 V176 M80 78 V176 M120 78 V176" stroke={p.a} strokeWidth="2" opacity=".6" />
      <path d="M68 28 C68 54 86 66 100 66 C114 66 132 54 132 28" fill="none" stroke={p.c} strokeWidth="4" />
    </g>
  ),
  socks: (p) => (
    <g>
      {Sock(p, 40, 30, p.b, "a")}
      {Sock(p, 82, 48, p.a, "b")}
    </g>
  ),

  /* ---------- Joyas, bijouterie, ropa, lencería y varios ---------- */
  ring: (p) => (
    <g>
      <circle cx="100" cy="128" r="46" fill="none" stroke={p.c} strokeWidth="9" />
      <circle cx="100" cy="128" r="46" fill="none" stroke={p.b} strokeWidth="5" />
      <path d="M78 78 L100 52 L122 78 L100 96 Z" fill={p.a} stroke={p.c} strokeWidth="3" />
      <path d="M78 78 H122 M100 52 V96" stroke={p.c} strokeWidth="2" opacity=".5" />
    </g>
  ),
  necklace: (p) => (
    <g>
      <path d="M32 40 C40 140 160 140 168 40" fill="none" stroke={p.b} strokeWidth="4" strokeLinecap="round" />
      <path d="M32 40 C40 140 160 140 168 40" fill="none" stroke={p.c} strokeWidth="1.5" strokeDasharray="2 6" />
      <circle cx="100" cy="122" r="20" fill={p.a} stroke={p.c} strokeWidth="3" />
      <ellipse cx="93" cy="115" rx="6" ry="4" fill="#fff" opacity=".8" />
      <circle cx="68" cy="108" r="7" fill={p.a} stroke={p.c} strokeWidth="2" />
      <circle cx="132" cy="108" r="7" fill={p.a} stroke={p.c} strokeWidth="2" />
    </g>
  ),
  earrings: (p) => (
    <g>
      {[62, 138].map((x) => (
        <g key={x}>
          <circle cx={x} cy="52" r="6" fill={p.b} stroke={p.c} strokeWidth="2" />
          <line x1={x} y1="58" x2={x} y2="88" stroke={p.b} strokeWidth="3" />
          <path d={`M${x} 88 C${x - 22} 118 ${x - 14} 150 ${x} 160 C${x + 14} 150 ${x + 22} 118 ${x} 88Z`} fill={p.a} stroke={p.c} strokeWidth="3" />
          <path d={`M${x - 6} 108 C${x - 10} 122 ${x - 7} 136 ${x - 2} 144`} fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".8" />
        </g>
      ))}
    </g>
  ),
  bracelet: (p) => (
    <g>
      <ellipse cx="100" cy="110" rx="60" ry="48" fill="none" stroke={p.c} strokeWidth="12" />
      <ellipse cx="100" cy="110" rx="60" ry="48" fill="none" stroke={p.b} strokeWidth="7" strokeDasharray="14 5" />
      <circle cx="100" cy="62" r="9" fill={p.a} stroke={p.c} strokeWidth="3" />
    </g>
  ),
  dress: (p) => (
    <g>
      <path d="M78 36 C84 60 116 60 122 36 L134 52 L126 88 L150 176 C120 188 80 188 50 176 L74 88 L66 52 Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M74 88 H126" stroke={p.c} strokeWidth="3" />
      <path d="M90 100 C88 130 86 150 80 180 M110 100 C112 130 114 150 120 180" fill="none" stroke={p.a} strokeWidth="2" opacity=".7" />
    </g>
  ),
  blazer: (p) => (
    <g>
      <path d="M70 36 L100 60 L130 36 L164 56 L158 112 L136 108 L136 176 L64 176 L64 108 L42 112 L36 56 Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M100 60 L82 100 L100 176 M100 60 L118 100" fill="none" stroke={p.c} strokeWidth="3" />
      <circle cx="100" cy="124" r="3.5" fill={p.a} />
      <circle cx="100" cy="146" r="3.5" fill={p.a} />
    </g>
  ),
  lingerie: (p) => (
    <g>
      <path d="M40 48 C44 100 82 108 100 86 C118 108 156 100 160 48 C140 48 128 58 124 72 C112 66 88 66 76 72 C72 58 60 48 40 48Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M52 62 C60 84 80 90 90 82 M148 62 C140 84 120 90 110 82" fill="none" stroke={p.a} strokeWidth="2.5" strokeDasharray="1 5" strokeLinecap="round" />
      <path d="M56 142 H144 C140 164 120 178 100 178 C80 178 60 164 56 142Z" fill={p.b} stroke={p.c} strokeWidth="3" />
      <path d="M62 150 H138" stroke={p.a} strokeWidth="2.5" strokeDasharray="1 5" strokeLinecap="round" />
    </g>
  ),
  bag: (p) => (
    <g>
      <path d="M66 82 C66 30 134 30 134 82" fill="none" stroke={p.c} strokeWidth="5" strokeLinecap="round" />
      <path d="M44 82 H156 L148 168 H52 Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <path d="M44 82 L100 118 L156 82" fill={p.a} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="120" r="6" fill={p.c} />
    </g>
  ),
  glasses: (p) => (
    <g>
      <path d="M26 92 C26 70 44 66 64 70 C84 74 90 90 84 108 C78 126 40 130 30 112 Z" fill={p.c} opacity=".9" stroke={p.b} strokeWidth="4" />
      <path d="M174 92 C174 70 156 66 136 70 C116 74 110 90 116 108 C122 126 160 130 170 112 Z" fill={p.c} opacity=".9" stroke={p.b} strokeWidth="4" />
      <path d="M84 90 C94 82 106 82 116 90" fill="none" stroke={p.b} strokeWidth="4" />
      <path d="M26 92 L10 80 M174 92 L190 80" stroke={p.b} strokeWidth="4" strokeLinecap="round" />
      <path d="M40 84 L56 80" stroke="#fff" strokeWidth="3" opacity=".6" strokeLinecap="round" />
    </g>
  ),
  scarf: (p) => (
    <g>
      <path d="M40 40 C80 80 120 20 160 60 L160 150 C120 110 80 170 40 130Z" fill={p.b} stroke={p.c} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="78" cy="82" r="6" fill={p.a} />
      <circle cx="108" cy="92" r="5" fill={p.a} />
      <circle cx="132" cy="84" r="6" fill={p.a} />
      <circle cx="92" cy="116" r="5" fill={p.a} />
      <circle cx="122" cy="122" r="4" fill={p.a} />
    </g>
  ),
};

export default function ProductArt({ art = "spool", hue = "gold", label = "" }) {
  const p = palettes[hue] || palettes.gold;
  const id = `bg-${art}-${hue}`;
  return (
    <svg viewBox="0 0 200 220" role={label ? "img" : "presentation"} aria-label={label || undefined} className="product-art" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={id} cx="50%" cy="35%" r="80%">
          <stop offset="0%" stopColor={p.bg1} />
          <stop offset="100%" stopColor={p.bg2} />
        </radialGradient>
      </defs>
      <rect width="200" height="220" fill={`url(#${id})`} />
      <g transform="translate(0 10)">{(glyphs[art] || glyphs.spool)(p)}</g>
      <g fill="#fff" opacity=".9">
        <path d="M168 34 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" />
        <path d="M30 168 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" />
      </g>
    </svg>
  );
}
