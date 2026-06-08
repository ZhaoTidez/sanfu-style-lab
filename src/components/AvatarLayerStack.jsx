const paletteByProduct = {
  "top-black-crop": { a: "#151114", b: "#ff4aa0", c: "#f8d7ff" },
  "top-silver-knit": { a: "#edf3ff", b: "#9fb5ff", c: "#ffffff" },
  "top-lime-shirt": { a: "#b8ff45", b: "#21d9ff", c: "#ffffff" },
  "bottom-denim-skirt": { a: "#5f91ff", b: "#b7d7ff", c: "#ffffff" },
  "bottom-cargo": { a: "#657d55", b: "#c5ff58", c: "#28351f" },
  "bottom-white-shorts": { a: "#fff5e8", b: "#ffdf3d", c: "#ff8ecb" },
  "bag-bright": { a: "#22d8ff", b: "#ff4aa0", c: "#fff06b" },
  "bag-silver": { a: "#e8eef8", b: "#bac7d8", c: "#ffffff" },
  "hat-baseball": { a: "#20242f", b: "#ffdf3d", c: "#ffffff" },
  "hat-beanie": { a: "#7c3aed", b: "#21d9ff", c: "#ffffff" },
};

function getLook(product) {
  return paletteByProduct[product.id] || {
    a: product.layerColor || "#ff7cc8",
    b: product.accentColor || "#21d9ff",
    c: "#ffffff",
  };
}

function Defs() {
  return (
    <defs>
      <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffe8df" />
        <stop offset="58%" stopColor="#ffd3c5" />
        <stop offset="100%" stopColor="#eead9d" />
      </linearGradient>
      <linearGradient id="innerWear" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="58%" stopColor="#f2f6ff" />
        <stop offset="100%" stopColor="#dce6ff" />
      </linearGradient>
      <linearGradient id="hairFemale" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3a2927" />
        <stop offset="48%" stopColor="#161111" />
        <stop offset="100%" stopColor="#050505" />
      </linearGradient>
      <linearGradient id="hairMale" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b2d28" />
        <stop offset="100%" stopColor="#0b0908" />
      </linearGradient>
      <radialGradient id="stageGlow" cx="50%" cy="28%" r="68%">
        <stop offset="0%" stopColor="#fff7cc" stopOpacity=".72" />
        <stop offset="42%" stopColor="#ff8ad1" stopOpacity=".26" />
        <stop offset="100%" stopColor="#21d9ff" stopOpacity=".06" />
      </radialGradient>
      <filter id="dollShadow" x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="#1b1b3a" floodOpacity=".22" />
      </filter>
      <filter id="dollGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <pattern id="laceDots" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.1" fill="rgba(255,255,255,.8)" />
        <circle cx="7" cy="6" r=".9" fill="rgba(255,255,255,.45)" />
      </pattern>
    </defs>
  );
}

function Jewel({ cx, cy, color = "#fff7b6", size = 4 }) {
  return (
    <g filter="url(#dollGlow)">
      <circle cx={cx} cy={cy} r={size} fill={color} stroke="#fff" strokeWidth="1.1" />
      <path
        d={`M${cx} ${cy - size - 5}L${cx + 2} ${cy - 1}L${cx + size + 5} ${cy}L${cx + 2} ${cy + 1}L${cx} ${cy + size + 5}L${cx - 2} ${cy + 1}L${cx - size - 5} ${cy}L${cx - 2} ${cy - 1}Z`}
        fill="#fff"
        opacity=".48"
      />
    </g>
  );
}

function StageAura() {
  return (
    <g opacity=".85">
      <ellipse cx="190" cy="288" rx="168" ry="236" fill="url(#stageGlow)" />
      <path d="M60 84L67 110L93 117L67 124L60 150L53 124L27 117L53 110Z" fill="#fff" opacity=".62" />
      <path d="M317 105L323 126L344 132L323 138L317 159L311 138L290 132L311 126Z" fill="#fff" opacity=".56" />
      <path d="M310 404L315 421L332 426L315 431L310 448L305 431L288 426L305 421Z" fill="#fff" opacity=".5" />
      <circle cx="78" cy="428" r="4" fill="#ffdf3d" />
      <circle cx="306" cy="70" r="4" fill="#21d9ff" />
      <circle cx="65" cy="202" r="3" fill="#ff4aa0" />
    </g>
  );
}

function HairBack({ gender }) {
  if (gender !== "female") {
    return (
      <g>
        <path d="M116 80C130 31 263 28 283 77C300 120 267 160 190 163C106 160 99 118 116 80Z" fill="url(#hairMale)" />
        <path d="M126 72C152 43 243 41 276 72C244 64 213 66 184 72C160 78 143 80 126 72Z" fill="#171111" />
      </g>
    );
  }

  return (
    <g>
      <path
        d="M102 79C116 15 271 18 293 84C320 165 287 290 248 378C224 305 230 217 243 153C213 184 159 184 132 154C147 224 150 311 129 378C84 280 78 166 102 79Z"
        fill="url(#hairFemale)"
      />
      <path d="M111 120C84 207 92 309 130 372" fill="none" stroke="#3d2b2b" strokeWidth="8" opacity=".42" />
      <path d="M270 118C298 210 290 312 248 374" fill="none" stroke="#3d2b2b" strokeWidth="8" opacity=".42" />
      <path d="M134 73C159 36 239 31 276 76C254 64 226 67 201 74C171 84 150 84 134 73Z" fill="#151010" />
    </g>
  );
}

function DollBase({ gender }) {
  const female = gender === "female";
  return (
    <g filter="url(#dollShadow)">
      <ellipse cx="190" cy="516" rx="118" ry="18" fill="rgba(0,0,0,.18)" />
      <HairBack gender={gender} />
      <path
        d="M139 78C144 42 274 42 281 87C289 144 251 181 190 181C129 181 122 130 139 78Z"
        fill="url(#skin)"
        stroke="#34201d"
        strokeWidth="2.4"
      />
      <path
        d={
          female
            ? "M128 75C150 43 232 35 276 76C247 66 217 70 191 77C165 84 145 83 128 75Z"
            : "M131 70C152 43 242 41 276 72C244 62 213 64 184 71C160 77 143 79 131 70Z"
        }
        fill="#171010"
      />
      <path d="M151 113C160 102 174 102 183 113" fill="none" stroke="#211719" strokeWidth="4" strokeLinecap="round" />
      <path d="M207 113C216 102 230 102 239 113" fill="none" stroke="#211719" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="167" cy="120" rx="8" ry="10" fill="#211719" />
      <ellipse cx="223" cy="120" rx="8" ry="10" fill="#211719" />
      <circle cx="170" cy="116" r="2.4" fill="#fff" />
      <circle cx="226" cy="116" r="2.4" fill="#fff" />
      <path d="M176 147C188 155 205 155 217 147" fill="none" stroke="#ff6d99" strokeWidth="4.5" strokeLinecap="round" />
      <ellipse cx="145" cy="140" rx="13" ry="7" fill="#ff9db7" opacity=".38" />
      <ellipse cx="236" cy="140" rx="13" ry="7" fill="#ff9db7" opacity=".38" />
      <path
        d={
          female
            ? "M151 185C163 170 219 170 231 185L248 323C229 342 161 342 142 323Z"
            : "M138 184C154 169 226 169 243 184L252 328C231 345 158 345 137 328Z"
        }
        fill="url(#innerWear)"
        stroke="#2b252a"
        strokeWidth="2.6"
      />
      <path d="M151 188L120 272C116 286 129 297 142 290L158 249" fill="url(#skin)" stroke="#2b252a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M229 188L260 272C264 286 251 297 238 290L222 249" fill="url(#skin)" stroke="#2b252a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M164 323L154 491C155 505 178 506 182 492L190 343Z" fill="url(#skin)" stroke="#2b252a" strokeWidth="2.6" />
      <path d="M216 323L226 491C225 505 202 506 198 492L190 343Z" fill="url(#skin)" stroke="#2b252a" strokeWidth="2.6" />
      <path d="M137 490C149 479 178 481 187 495C178 509 143 510 127 502C126 497 130 493 137 490Z" fill="#f9fbff" stroke="#2b252a" strokeWidth="2.6" />
      <path d="M243 490C231 479 202 481 193 495C202 509 237 510 253 502C254 497 250 493 243 490Z" fill="#f9fbff" stroke="#2b252a" strokeWidth="2.6" />
    </g>
  );
}

function TopLayer({ product, gender }) {
  const { a, b, c } = getLook(product);
  const shirt = product.id === "top-lime-shirt";
  const soft = product.id === "top-silver-knit";
  const female = gender === "female";
  const gradientId = `top-${product.id}`;
  const bodyPath = female
    ? shirt
      ? "M126 177C153 160 227 160 254 177L247 314C226 334 155 334 134 314Z"
      : "M139 183C154 170 226 170 241 183L233 284C216 298 164 298 147 284Z"
    : shirt
      ? "M122 177C151 159 229 159 258 177L252 322C229 340 151 340 128 322Z"
      : "M135 184C154 171 226 171 245 184L239 296C218 311 162 311 141 296Z";

  return (
    <g className="avatar-layer-pop">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={c} />
          <stop offset="30%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
      </defs>
      {shirt && (
        <>
          <path d="M126 188L94 270C89 286 105 298 120 288L145 226Z" fill={`url(#${gradientId})`} stroke="#20191d" strokeWidth="2.8" />
          <path d="M254 188L286 270C291 286 275 298 260 288L235 226Z" fill={`url(#${gradientId})`} stroke="#20191d" strokeWidth="2.8" />
        </>
      )}
      <path d={bodyPath} fill={`url(#${gradientId})`} stroke="#20191d" strokeWidth="2.8" />
      <path d="M150 190C164 205 216 205 230 190" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="2.2" />
      <path d="M190 182V312" stroke="rgba(255,255,255,.45)" strokeWidth={shirt ? 3 : 1.5} />
      {soft ? (
        <>
          <path d="M154 218H226M150 242H230M148 266H232" stroke="rgba(115,132,180,.35)" strokeWidth="3" strokeLinecap="round" />
          <path d="M151 292C174 304 206 304 229 292" stroke="#fff" strokeWidth="3" strokeDasharray="4 5" />
        </>
      ) : (
        <>
          <path d="M151 286C172 299 208 299 229 286" stroke={c} strokeWidth="4" strokeDasharray="6 5" opacity=".85" />
          <path d="M145 206C164 224 216 224 235 206" stroke="rgba(255,255,255,.25)" strokeWidth="9" />
        </>
      )}
      {product.id === "top-black-crop" && (
        <>
          <path d="M139 284C158 298 222 298 241 284L241 301C218 320 162 320 139 301Z" fill={b} stroke="#20191d" strokeWidth="2.4" />
          {[160, 178, 202, 220].map((x) => (
            <Jewel key={x} cx={x} cy={290} color="#fff7b6" size={3.5} />
          ))}
        </>
      )}
    </g>
  );
}

function SkirtLayer({ product }) {
  const { a, b, c } = getLook(product);
  const gradientId = `skirt-${product.id}`;
  return (
    <g className="avatar-layer-pop">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={b} />
          <stop offset="36%" stopColor={a} />
          <stop offset="100%" stopColor="#284eb2" />
        </linearGradient>
      </defs>
      <path d="M137 304C158 292 222 292 243 304L274 421C242 444 138 444 106 421Z" fill={`url(#${gradientId})`} stroke="#20191d" strokeWidth="2.8" />
      <path d="M142 313H238" stroke="#1f326c" strokeWidth="7" />
      <circle cx="190" cy="314" r="6" fill="#dfe8f4" stroke="#20191d" strokeWidth="2" />
      <path d="M128 346C151 361 171 361 190 346C210 361 231 361 252 346" fill="none" stroke={c} strokeWidth="3" opacity=".7" />
      <path d="M119 418C155 432 226 432 263 418" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="8 7" opacity=".8" />
      <path d="M130 328L119 408M163 322L153 424M217 322L229 424M250 328L263 408" stroke="rgba(255,255,255,.28)" strokeWidth="2" />
    </g>
  );
}

function PantsLayer({ product }) {
  const { a, b, c } = getLook(product);
  if (product.layerType === "shorts") {
    return (
      <g className="avatar-layer-pop">
        <path d="M143 306H190V379H126Z" fill={a} stroke="#20191d" strokeWidth="2.8" />
        <path d="M190 306H237L254 379H190Z" fill={a} stroke="#20191d" strokeWidth="2.8" />
        <path d="M144 318H236" stroke={b} strokeWidth="5" />
        <path d="M136 373C150 383 173 383 188 373M193 373C209 383 231 383 245 373" stroke={c} strokeWidth="3" strokeDasharray="4 4" />
      </g>
    );
  }

  const gradientId = `pants-${product.id}`;
  return (
    <g className="avatar-layer-pop">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={b} />
          <stop offset="20%" stopColor={a} />
          <stop offset="100%" stopColor="#2c3d28" />
        </linearGradient>
      </defs>
      <path d="M142 306H190L184 496C174 503 153 500 150 490Z" fill={`url(#${gradientId})`} stroke="#20191d" strokeWidth="2.8" />
      <path d="M190 306H238L230 490C227 500 206 503 196 496Z" fill={`url(#${gradientId})`} stroke="#20191d" strokeWidth="2.8" />
      <path d="M190 326V458" stroke="rgba(0,0,0,.42)" strokeWidth="3" />
      <path d="M153 366H183M207 366H237" stroke={c} strokeWidth="2.2" />
      <path d="M155 381H180V420H151Z" fill="rgba(255,255,255,.13)" stroke="rgba(0,0,0,.35)" strokeWidth="1.8" />
      <path d="M206 381H231L235 420H210Z" fill="rgba(255,255,255,.13)" stroke="rgba(0,0,0,.35)" strokeWidth="1.8" />
    </g>
  );
}

function HatLayer({ product, gender }) {
  const { a, b, c } = getLook(product);
  const beanie = product.id === "hat-beanie";
  return (
    <g className="avatar-layer-pop">
      {beanie ? (
        <>
          <path d="M128 70C151 35 239 35 273 70L267 103C238 94 166 94 136 103Z" fill={a} stroke="#20191d" strokeWidth="2.8" />
          <path d="M136 101C164 91 236 91 267 101L263 119C235 109 166 109 139 119Z" fill={b} stroke="#20191d" strokeWidth="2.2" />
          <Jewel cx="190" cy="62" color={c} size={4} />
        </>
      ) : (
        <>
          <path
            d={
              gender === "female"
                ? "M129 70C153 38 240 38 272 70C247 64 215 66 190 70C164 74 145 76 129 70Z"
                : "M128 65C152 38 240 38 274 66C247 59 215 61 190 65C164 69 145 71 128 65Z"
            }
            fill={a}
            stroke="#20191d"
            strokeWidth="2.8"
          />
          <path d="M248 69C280 66 302 74 315 90C286 95 263 89 247 80Z" fill={b} stroke="#20191d" strokeWidth="2.8" />
          <path d="M159 61C173 55 211 53 231 60" stroke={c} strokeWidth="2.4" opacity=".85" />
        </>
      )}
    </g>
  );
}

function BagLayer({ product }) {
  const { a, b, c } = getLook(product);
  return (
    <g className="avatar-layer-pop">
      <path d="M252 260C260 224 316 226 322 265" fill="none" stroke="#20191d" strokeWidth="7" />
      <path d="M252 260H326L334 367C318 386 262 386 244 367Z" fill={a} stroke="#20191d" strokeWidth="2.8" />
      <path d="M263 302H317" stroke={b} strokeWidth="5" />
      <path d="M268 279H311V315H268Z" fill="rgba(255,255,255,.18)" stroke={c} strokeWidth="2" />
      <circle cx="291" cy="344" r="12" fill={c} stroke="#20191d" strokeWidth="2" />
      <path d="M322 360L345 383L326 408L298 389Z" fill={b} stroke="#20191d" strokeWidth="2.6" />
    </g>
  );
}

function AccessoryLayer({ product }) {
  const { b, c } = getLook(product);
  if (product.layerType === "earrings") {
    return (
      <g className="avatar-layer-pop">
        <circle cx="132" cy="143" r="10" fill="#e8edf5" stroke="#20191d" strokeWidth="2.4" />
        <circle cx="268" cy="143" r="10" fill="#e8edf5" stroke="#20191d" strokeWidth="2.4" />
        <path d="M132 153C121 172 121 188 132 198C143 188 143 172 132 153Z" fill={product.accentColor} stroke="#20191d" strokeWidth="2" />
        <path d="M268 153C257 172 257 188 268 198C279 188 279 172 268 153Z" fill={product.accentColor} stroke="#20191d" strokeWidth="2" />
      </g>
    );
  }
  if (product.layerType === "lip") {
    return <path className="avatar-layer-pop" d="M175 147C188 157 205 157 218 147" fill="none" stroke={product.layerColor} strokeWidth="6" strokeLinecap="round" />;
  }
  if (product.layerType === "eye") {
    return (
      <g className="avatar-layer-pop" filter="url(#dollGlow)">
        <path d="M150 108C160 99 174 99 184 108" stroke={product.layerColor} strokeWidth="5" strokeLinecap="round" />
        <path d="M206 108C216 99 230 99 240 108" stroke={product.layerColor} strokeWidth="5" strokeLinecap="round" />
        <Jewel cx="183" cy="103" color={product.accentColor} size={2.5} />
        <Jewel cx="207" cy="103" color={product.accentColor} size={2.5} />
      </g>
    );
  }
  if (product.layerType === "charm") {
    return (
      <g className="avatar-layer-pop">
        <path d="M318 340L344 363L325 392L294 371Z" fill={product.layerColor} stroke="#20191d" strokeWidth="2.6" />
        <circle cx="322" cy="365" r="3.2" fill="#20191d" />
        <circle cx="334" cy="374" r="3.2" fill="#20191d" />
        <path d="M318 384C327 391 336 391 343 383" stroke={c} strokeWidth="2" />
      </g>
    );
  }
  if (product.layerType === "blindbox") {
    return (
      <g className="avatar-layer-pop">
        <rect x="55" y="376" width="58" height="76" rx="16" fill={product.layerColor} stroke="#20191d" strokeWidth="2.8" transform="rotate(-8 84 414)" />
        <path d="M64 391L105 386" stroke="#fff" strokeWidth="3" opacity=".65" />
        <circle cx="75" cy="406" r="4" fill="#20191d" />
        <circle cx="95" cy="403" r="4" fill="#20191d" />
      </g>
    );
  }
  return null;
}

function ClothingLayer({ product, gender }) {
  if (product.layerType === "top") return <TopLayer product={product} gender={gender} />;
  if (product.layerType === "skirt") return <SkirtLayer product={product} />;
  if (["pants", "shorts"].includes(product.layerType)) return <PantsLayer product={product} />;
  if (product.layerType === "hat") return <HatLayer product={product} gender={gender} />;
  if (product.layerType === "bag") return <BagLayer product={product} />;
  return <AccessoryLayer product={product} />;
}

export default function AvatarLayerStack({ selectedItems, selectedGender = "female" }) {
  const layers = Object.values(selectedItems);

  return (
    <div className="relative z-10 h-[540px] w-[380px] max-w-[92vw]">
      <svg
        viewBox="0 0 380 540"
        className="h-full w-full drop-shadow-[0_24px_28px_rgba(0,0,0,.24)]"
        role="img"
        aria-label={`${selectedGender === "female" ? "female" : "male"} anime paper doll dress-up avatar`}
      >
        <Defs />
        <StageAura />
        <DollBase gender={selectedGender} />
        {layers.map((product) => (
          <ClothingLayer key={product.id} product={product} gender={selectedGender} />
        ))}
        <path d="M78 514C124 530 255 530 302 514" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="3" />
      </svg>
    </div>
  );
}
