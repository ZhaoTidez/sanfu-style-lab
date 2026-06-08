const textureLibrary = {
  blackMesh:
    "https://images.pexels.com/photos/4863011/pexels-photo-4863011.jpeg?auto=compress&cs=tinysrgb&w=900",
  denim:
    "https://images.pexels.com/photos/36319610/pexels-photo-36319610.jpeg?auto=compress&cs=tinysrgb&w=900",
  greenKnit:
    "https://images.pexels.com/photos/36033692/pexels-photo-36033692.jpeg?auto=compress&cs=tinysrgb&w=900",
  darkCloth:
    "https://images.pexels.com/photos/7641151/pexels-photo-7641151.jpeg?auto=compress&cs=tinysrgb&w=900",
  greyCanvas:
    "https://images.pexels.com/photos/459473/pexels-photo-459473.jpeg?auto=compress&cs=tinysrgb&w=900",
  blackSatin:
    "https://images.pexels.com/photos/7946640/pexels-photo-7946640.jpeg?auto=compress&cs=tinysrgb&w=900",
};

function getTexture(product) {
  if (product.textureImage) return product.textureImage;
  if (product.layerType === "skirt") return textureLibrary.denim;
  if (product.layerType === "pants") return textureLibrary.greenKnit;
  if (product.layerType === "shorts") return textureLibrary.greyCanvas;
  if (product.layerType === "bag") return textureLibrary.greyCanvas;
  if (product.layerType === "hat") return textureLibrary.blackSatin;
  if (product.name.includes("青柠")) return textureLibrary.greenKnit;
  return textureLibrary.blackMesh;
}

function PersonBase({ gender }) {
  const female = gender === "female";

  return (
    <g>
      <ellipse cx="190" cy="508" rx="104" ry="20" fill="rgba(0,0,0,.16)" />
      <path
        d={female ? "M112 96C128 33 280 35 294 104C306 166 279 232 190 238C102 232 94 153 112 96Z" : "M121 76C139 36 265 35 280 79C297 121 271 158 190 160C109 158 102 116 121 76Z"}
        fill={female ? "#221919" : "#1f1a18"}
      />
      {female && (
        <>
          <path d="M103 112C71 187 85 318 132 368C146 284 143 180 129 112Z" fill="#1f1716" />
          <path d="M277 112C309 187 295 318 248 368C234 284 237 180 251 112Z" fill="#1f1716" />
        </>
      )}
      <path
        d="M139 79C144 41 276 41 281 88C288 147 249 181 190 181C131 181 122 129 139 79Z"
        fill="#ffd8cb"
        stroke="#191919"
        strokeWidth="3"
      />
      <path
        d={female ? "M130 76C154 38 236 34 273 77C257 62 231 66 210 73C180 83 152 84 130 76Z" : "M132 75C153 47 246 43 276 76C242 66 207 69 178 75C156 80 143 80 132 75Z"}
        fill="#171717"
      />
      <ellipse cx="166" cy="117" rx="8" ry="10" fill="#141414" />
      <ellipse cx="218" cy="117" rx="8" ry="10" fill="#141414" />
      <circle cx="169" cy="113" r="2.4" fill="white" />
      <circle cx="221" cy="113" r="2.4" fill="white" />
      <path d="M174 145C188 153 205 153 218 145" fill="none" stroke="#ff729d" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="145" cy="139" rx="12" ry="7" fill="#ff9ab8" opacity=".45" />
      <ellipse cx="235" cy="139" rx="12" ry="7" fill="#ff9ab8" opacity=".45" />

      <path
        d={female ? "M148 185C158 171 222 171 232 185L249 319C232 336 164 336 145 319Z" : "M137 184C154 169 226 169 243 184L252 326C233 341 160 341 141 326Z"}
        fill="#f8f8f8"
        stroke="#151515"
        strokeWidth="3"
      />
      <path d="M154 185L122 268C117 281 126 294 140 290L155 252" fill="#ffd8cb" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
      <path d="M226 185L258 268C263 281 254 294 240 290L225 252" fill="#ffd8cb" stroke="#151515" strokeWidth="3" strokeLinecap="round" />
      <path d="M165 320L155 490C155 504 178 505 181 491L190 340Z" fill="#ffd8cb" stroke="#151515" strokeWidth="3" />
      <path d="M215 320L225 490C225 504 202 505 199 491L190 340Z" fill="#ffd8cb" stroke="#151515" strokeWidth="3" />
      <path d="M137 489C148 478 177 480 186 494C178 507 142 509 128 501C126 498 130 493 137 489Z" fill="#f7fbff" stroke="#151515" strokeWidth="3" />
      <path d="M243 489C232 478 203 480 194 494C202 507 238 509 252 501C254 498 250 493 243 489Z" fill="#f7fbff" stroke="#151515" strokeWidth="3" />
    </g>
  );
}

function TopLayer({ product, patternId, gender }) {
  const female = gender === "female";
  const shirt = product.name.includes("衬衫");
  return (
    <g className="avatar-layer-pop">
      {shirt && (
        <>
          <path d="M128 186L96 268C91 282 105 294 119 287L143 226Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
          <path d="M252 186L284 268C289 282 275 294 261 287L237 226Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
        </>
      )}
      <path
        d={
          female
            ? shirt
              ? "M129 176C152 163 228 163 251 176L245 306C225 321 158 321 139 306Z"
              : "M140 184C154 172 226 172 240 184L232 280C215 292 164 292 147 280Z"
            : shirt
              ? "M124 176C150 160 230 160 256 176L250 314C228 330 154 330 132 314Z"
              : "M135 184C154 171 226 171 245 184L239 291C216 305 164 305 141 291Z"
        }
        fill={`url(#${patternId})`}
        stroke="#151515"
        strokeWidth="3"
      />
      <path d="M190 176L190 306" stroke="rgba(255,255,255,.38)" strokeWidth="2" />
      <path d="M151 225C168 236 213 236 230 225" fill="none" stroke="rgba(255,255,255,.32)" strokeWidth="2" />
      <path d="M154 288H226" stroke="rgba(0,0,0,.35)" strokeWidth="3" strokeDasharray="6 5" />
    </g>
  );
}

function BottomLayer({ product, patternId, gender }) {
  const female = gender === "female";
  if (product.layerType === "skirt") {
    return (
      <g className="avatar-layer-pop">
        <path d="M139 306C158 293 222 293 241 306L267 407C239 424 161 424 133 407Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
        <path d="M143 313H237" stroke="rgba(0,0,0,.38)" strokeWidth="5" />
        <circle cx="190" cy="314" r="6" fill="#dfe8f4" stroke="#151515" strokeWidth="2" />
        <path d="M154 341C165 350 177 350 187 341M203 341C213 350 226 350 237 341" fill="none" stroke="rgba(255,255,255,.48)" strokeWidth="2" />
      </g>
    );
  }
  if (product.layerType === "shorts") {
    return (
      <g className="avatar-layer-pop">
        <path d="M145 306H190V374H130Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
        <path d="M190 306H235L250 374H190Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
        <path d="M146 318H234" stroke="rgba(0,0,0,.35)" strokeWidth="4" />
      </g>
    );
  }
  return (
    <g className="avatar-layer-pop">
      <path d={female ? "M146 305H190L184 493C174 500 156 497 154 489Z" : "M138 306H190L184 493C172 500 151 497 149 489Z"} fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
      <path d={female ? "M190 305H234L226 489C224 497 206 500 196 493Z" : "M190 306H242L231 489C229 497 208 500 196 493Z"} fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
      <path d="M190 325V454" stroke="rgba(0,0,0,.38)" strokeWidth="3" />
      <path d="M155 363H183M207 363H235" stroke="rgba(255,255,255,.35)" strokeWidth="2" />
    </g>
  );
}

function BagLayer({ patternId }) {
  return (
    <g className="avatar-layer-pop">
      <path d="M250 262C259 228 314 231 320 268" fill="none" stroke="#151515" strokeWidth="7" />
      <path d="M252 261H324L331 365C315 382 263 382 245 365Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
      <path d="M264 300H315" stroke="rgba(0,0,0,.45)" strokeWidth="4" />
      <circle cx="291" cy="342" r="12" fill="rgba(255,255,255,.72)" stroke="#151515" strokeWidth="2" />
    </g>
  );
}

function HatLayer({ patternId, gender }) {
  return (
    <g className="avatar-layer-pop">
      <path d={gender === "female" ? "M130 72C150 38 241 37 270 72C249 65 219 67 190 70C161 73 146 76 130 72Z" : "M128 65C151 37 242 37 274 66C247 58 215 60 190 64C164 68 145 70 128 65Z"} fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
      <path d="M248 69C278 66 298 73 310 88C286 91 265 88 248 80Z" fill={`url(#${patternId})`} stroke="#151515" strokeWidth="3" />
    </g>
  );
}

function AccessoryLayer({ product }) {
  if (product.layerType === "earrings") {
    return (
      <g className="avatar-layer-pop">
        <circle cx="133" cy="142" r="10" fill="#e8edf5" stroke="#151515" strokeWidth="3" />
        <circle cx="267" cy="142" r="10" fill="#e8edf5" stroke="#151515" strokeWidth="3" />
        <circle cx="133" cy="166" r="8" fill={product.accentColor} stroke="#151515" strokeWidth="2" />
        <circle cx="267" cy="166" r="8" fill={product.accentColor} stroke="#151515" strokeWidth="2" />
      </g>
    );
  }
  if (product.layerType === "lip") {
    return <path className="avatar-layer-pop" d="M174 145C188 155 205 155 219 145" fill="none" stroke={product.layerColor} strokeWidth="6" strokeLinecap="round" />;
  }
  if (product.layerType === "eye") {
    return (
      <g className="avatar-layer-pop" opacity=".9">
        <path d="M151 108C160 100 172 100 181 108" stroke={product.layerColor} strokeWidth="5" strokeLinecap="round" />
        <path d="M209 108C218 100 230 100 239 108" stroke={product.layerColor} strokeWidth="5" strokeLinecap="round" />
      </g>
    );
  }
  if (product.layerType === "charm") {
    return (
      <g className="avatar-layer-pop">
        <path d="M318 341L343 364L324 390L295 370Z" fill={product.layerColor} stroke="#151515" strokeWidth="3" />
        <circle cx="323" cy="365" r="3" fill="#151515" />
        <circle cx="333" cy="373" r="3" fill="#151515" />
      </g>
    );
  }
  if (product.layerType === "blindbox") {
    return (
      <g className="avatar-layer-pop">
        <rect x="55" y="376" width="56" height="74" rx="15" fill={product.layerColor} stroke="#151515" strokeWidth="3" transform="rotate(-8 83 413)" />
        <circle cx="75" cy="405" r="4" fill="#151515" />
        <circle cx="94" cy="402" r="4" fill="#151515" />
      </g>
    );
  }
  return null;
}

function ClothingLayer({ product, gender, index }) {
  const patternId = `cloth-${product.id}-${index}`;
  const texture = getTexture(product);
  return (
    <>
      <defs>
        <pattern id={patternId} patternUnits="objectBoundingBox" width="1" height="1">
          <image href={texture} x="0" y="0" width="360" height="520" preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>
      {product.layerType === "top" && <TopLayer product={product} patternId={patternId} gender={gender} />}
      {["skirt", "pants", "shorts"].includes(product.layerType) && <BottomLayer product={product} patternId={patternId} gender={gender} />}
      {product.layerType === "bag" && <BagLayer patternId={patternId} />}
      {product.layerType === "hat" && <HatLayer patternId={patternId} gender={gender} />}
      {!["top", "skirt", "pants", "shorts", "bag", "hat"].includes(product.layerType) && <AccessoryLayer product={product} />}
    </>
  );
}

export default function AvatarLayerStack({ selectedItems, selectedGender = "female" }) {
  const layers = Object.values(selectedItems);

  return (
    <div className="relative z-10 h-[540px] w-[380px] max-w-[92vw]">
      <svg
        viewBox="0 0 380 540"
        className="h-full w-full drop-shadow-[0_24px_28px_rgba(0,0,0,.22)]"
        role="img"
        aria-label={`${selectedGender === "female" ? "女生" : "男生"}动漫换装数字人`}
      >
        <PersonBase gender={selectedGender} />
        {layers.map((product, index) => (
          <ClothingLayer key={product.id} product={product} gender={selectedGender} index={index} />
        ))}
      </svg>
    </div>
  );
}
