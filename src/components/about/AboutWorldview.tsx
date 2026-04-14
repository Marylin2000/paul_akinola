"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { TrendingUp, Heart, Eye, Quote, ArrowRight } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// ---------- types ----------
interface WorldviewItem {
  title: string;
  shortTitle: string;
  content: string;
  icon: React.ElementType;
  colorA: string;
  colorB: string;
  pos: "top" | "right" | "bottom";
}

// ---------- data ----------
const worldviewItems: WorldviewItem[] = [
  {
    title: "Outcomes are not random",
    shortTitle: "Outcomes",
    content:
      "At work, results are shaped by systems—how decisions are made, how signals move, how teams align, and how things connect beneath the surface.",
    icon: TrendingUp,
    colorA: "#3b8bd4",
    colorB: "#185fa5",
    pos: "top",
  },
  {
    title: "The same is true in life",
    shortTitle: "Inner Life",
    content:
      "Behaviour, clarity, direction—even how we respond under pressure—are shaped by systems within us: beliefs, patterns, memory, identity, and what we carry quietly.",
    icon: Heart,
    colorA: "#c2622a",
    colorB: "#e8943a",
    pos: "right",
  },
  {
    title: "More than what's visible",
    shortTitle: "Depth",
    content:
      "Underneath both, there is often more going on than what is immediately visible. That is the lens I keep returning to.",
    icon: Eye,
    colorA: "#ba7517",
    colorB: "#854f0b",
    pos: "bottom",
  },
];

// Card positions (percent of container)
const cardPositions: Record<"top" | "right" | "bottom", { top: string; left: string }> = {
  top:    { top: "8%", left: "50%" },
  right:  { top: "50%", left: "88%" },
  bottom: { top: "92%", left: "50%" },
};

// ---------- Interactive 3-D Earth Globe ----------
function GlobeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const frameRef = useRef<number>(0);
  const globeGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Size setup - responsive
    const getSize = () => Math.min(container.clientWidth, container.clientHeight, 400);
    let size = getSize();

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Globe group for rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    
    // Load Earth texture (using reliable CDN)
    const earthTexture = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg'
    );
    const earthSpecular = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'
    );
    const earthNormal = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg'
    );

    // Earth sphere with realistic materials
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      specularMap: earthSpecular,
      normalMap: earthNormal,
      specular: new THREE.Color(0x333333),
      shininess: 15,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    // Tilt earth like real axis (23.5 degrees)
    earth.rotation.z = 23.5 * (Math.PI / 180);
    globeGroup.add(earth);

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x4da6ff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);

    // Cloud layer
    const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    
    // Load cloud texture
    textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png',
      (cloudTexture) => {
        cloudMaterial.map = cloudTexture;
        cloudMaterial.needsUpdate = true;
      }
    );
    
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    clouds.rotation.z = 23.5 * (Math.PI / 180);
    globeGroup.add(clouds);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x4da6ff, 0.3);
    fillLight.position.set(-5, -2, -5);
    scene.add(fillLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 6;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controlsRef.current = controls;

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      
      // Rotate clouds slightly faster than earth
      clouds.rotation.y += 0.0005;
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const newSize = getSize();
      renderer.setSize(newSize, newSize);
    };

    window.addEventListener('resize', handleResize);

    // Pause auto-rotation when user interacts
    const handleInteractionStart = () => {
      controls.autoRotate = false;
    };
    
    const handleInteractionEnd = () => {
      // Resume auto-rotation after 3 seconds of no interaction
      setTimeout(() => {
        if (controlsRef.current) {
          controlsRef.current.autoRotate = true;
        }
      }, 3000);
    };

    container.addEventListener('mousedown', handleInteractionStart);
    container.addEventListener('touchstart', handleInteractionStart);
    container.addEventListener('mouseup', handleInteractionEnd);
    container.addEventListener('touchend', handleInteractionEnd);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleInteractionStart);
      container.removeEventListener('touchstart', handleInteractionStart);
      container.removeEventListener('mouseup', handleInteractionEnd);
      container.removeEventListener('touchend', handleInteractionEnd);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full min-h-[300px] lg:min-h-[400px] cursor-grab active:cursor-grabbing"
      style={{ touchAction: "none" }}
    />
  );
}

// ---------- Orbit Card with Fixed Tooltip ----------
interface OrbitCardProps {
  item: WorldviewItem;
  index: number;
  onHover: (item: WorldviewItem | null, rect?: DOMRect) => void;
  isHovered: boolean;
}

function OrbitCard({ item, index, onHover, isHovered }: OrbitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;
  const pos = cardPositions[item.pos];

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onHover(item, rect);
    }
  }, [item, onHover]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
      whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.2, type: "spring", stiffness: 200, damping: 20 }}
      style={{ position: "absolute", ...pos, zIndex: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      {/* Pulsing attention ring */}
      <span
        className="pointer-events-none absolute rounded-2xl border-2"
        style={{
          inset: -10,
          borderColor: item.colorA,
          animation: `worldview-pulse 2.5s ${index * 0.8}s ease-in-out infinite`,
        }}
      />

      {/* Card */}
      <div
        className="relative w-[140px] sm:w-[152px] rounded-2xl border bg-white/90 backdrop-blur-sm transition-all duration-300 dark:bg-stone-900/90"
        style={{
          borderColor: isHovered ? item.colorA : "rgba(0,0,0,0.1)",
          transform: isHovered ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
          boxShadow: isHovered ? `0 12px 40px ${item.colorA}33` : "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${item.colorA}, ${item.colorB})`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="p-4">
          <div
            className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: `${item.colorA}1a` }}
          >
            <Icon className="h-4 w-4" style={{ color: item.colorA }} />
          </div>

          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: item.colorA }}>
            {item.shortTitle}
          </p>
          <p className="mb-3 font-serif text-[13px] leading-snug text-stone-800 dark:text-stone-200">
            {item.shortTitle === "Outcomes"
              ? "Results are shaped by systems"
              : item.shortTitle === "Inner Life"
              ? "The same is true in life"
              : "More than what's visible"}
          </p>

          {/* Interaction hint */}
          <div className="flex items-center gap-1.5 text-[10px] text-stone-400 transition-colors duration-200 group-hover:text-stone-600 dark:group-hover:text-stone-300">
            <ArrowRight className="h-2.5 w-2.5" />
            <span>Hover to read more</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ---------- Tooltip Portal ----------
function TooltipPortal({ 
  item, 
  anchorRect, 
  onClose 
}: { 
  item: WorldviewItem; 
  anchorRect: DOMRect; 
  onClose: () => void; 
}) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tooltipRef.current || !anchorRect) return;

    const tooltip = tooltipRef.current;
    const tooltipRect = tooltip.getBoundingClientRect();
    const padding = 16;

    // Calculate position based on card position
    let top = 0;
    let left = 0;

    if (item.pos === "top") {
      // Show below the card
      top = anchorRect.bottom + padding;
      left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
    } else if (item.pos === "bottom") {
      // Show above the card
      top = anchorRect.top - tooltipRect.height - padding;
      left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
    } else if (item.pos === "right") {
      // Show to the left of the card (since card is on the right side)
      top = anchorRect.top + anchorRect.height / 2 - tooltipRect.height / 2;
      left = anchorRect.left - tooltipRect.width - padding;
    }

    // Boundary checks
    const maxLeft = window.innerWidth - tooltipRect.width - padding;
    const maxTop = window.innerHeight - tooltipRect.height - padding;
    
    left = Math.max(padding, Math.min(left, maxLeft));
    top = Math.max(padding, Math.min(top, maxTop));

    setPosition({ top, left });
  }, [anchorRect, item.pos]);

  return (
    <motion.div
      ref={tooltipRef}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed z-[100] w-72 rounded-2xl border bg-white/95 p-5 shadow-2xl backdrop-blur-md dark:bg-stone-900/95"
      style={{
        top: position.top,
        left: position.left,
        borderColor: `${item.colorA}55`,
        boxShadow: `0 8px 32px ${item.colorA}26, 0 0 0 1px ${item.colorA}20`,
      }}
      onMouseLeave={onClose}
    >
      <div
        className="mb-3 h-0.5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${item.colorA}, ${item.colorB})` }}
      />
      <h4 className="mb-2 font-serif text-base font-medium text-stone-900 dark:text-white">
        {item.title}
      </h4>
      <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        {item.content}
      </p>
    </motion.div>
  );
}

// ---------- Main Component ----------
export default function AboutWorldview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<WorldviewItem | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | undefined>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const handleHover = useCallback((item: WorldviewItem | null, rect?: DOMRect) => {
    setHoveredItem(item);
    setHoveredRect(rect);
  }, []);

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes worldview-pulse {
          0%   { opacity: 0.7; transform: scale(1); }
          70%  { opacity: 0;   transform: scale(1.18); }
          100% { opacity: 0;   transform: scale(1.18); }
        }
        @keyframes worldview-orbit-spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <section
        ref={containerRef}
        className="relative min-h-screen overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-stone-950 lg:py-0"
      >
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(var(--tw-border-opacity, rgba(0,0,0,0.05)) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(194,98,42,0.06),transparent_60%)] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,139,212,0.05),transparent_60%)] blur-3xl" />
        </div>

        {/* Top divider */}
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-stone-300/50 to-transparent dark:via-stone-700/50" />

        <div className="container mx-auto flex min-h-screen items-center px-6 lg:px-12">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">

            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 py-12 lg:py-20"
            >
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c2622a]/30 bg-[#c2622a]/8 px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c2622a]" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c2622a]">
                  Philosophy
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl lg:text-6xl xl:text-7xl">
                How I see the{" "}
                <span className="relative inline-block italic text-[#c2622a]">
                  world
                  <span className="absolute -inset-x-1 bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#c2622a] to-transparent" />
                </span>
              </h2>

              {/* Sub */}
              <p className="max-w-md text-base leading-relaxed text-stone-500 dark:text-stone-400 sm:text-lg">
                A lens that helps me make sense of what's really happening—beneath the surface, beyond the obvious, behind the noise.
              </p>

              {/* Animated line */}
              <div className="relative h-0.5 max-w-sm overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c2622a] via-[#e8943a] to-[#ba7517]"
                  style={{ width: lineWidth }}
                />
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative max-w-sm overflow-hidden rounded-2xl border border-stone-200/60 bg-gradient-to-br from-stone-50 to-white p-6 dark:border-stone-700/60 dark:from-stone-900/80 dark:to-stone-900/60"
              >
                {/* Left accent */}
                <span className="absolute left-0 top-0 h-full w-0.5 rounded-l-2xl bg-gradient-to-b from-[#c2622a] to-[#e8943a]" />
                <Quote className="mb-2 h-5 w-5 rotate-180 text-[#c2622a]/40" />
                <p className="font-serif text-lg italic leading-relaxed text-stone-700 dark:text-stone-200">
                  Most visible problems are being shaped by something deeper.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-6 bg-gradient-to-r from-[#c2622a]/40 to-transparent" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c2622a]/70">
                    The Core Lens
                  </span>
                </div>
              </motion.blockquote>

              {/* Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="hidden items-center gap-2 text-xs text-stone-400 lg:flex"
              >
                <span>Hover over the cards to explore</span>
                <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Globe + Cards ── */}
            <div className="relative flex h-[500px] items-center justify-center lg:h-[620px]">
              
              {/* Orbit ring decoration */}
              <div
                className="absolute rounded-full border border-dashed border-[#c2622a]/25"
                style={{
                  width: 360,
                  height: 360,
                  top: "50%",
                  left: "50%",
                  animation: "worldview-orbit-spin 40s linear infinite",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Inner glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.5, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute h-[240px] w-[240px] rounded-full bg-gradient-to-br from-[#c2622a]/10 to-[#e8943a]/10 blur-2xl"
              />

              {/* 3-D Globe Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative z-10 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]"
              >
                <GlobeCanvas />
                
                {/* Drag hint overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 opacity-60 pointer-events-none">
                  Drag to rotate
                </div>
              </motion.div>

              {/* SVG connector lines - positioned behind cards but visible */}
              <svg
                className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
                viewBox="0 0 560 560"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <marker id="c-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L6 4L1 7" fill="none" stroke="#c2622a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                </defs>
                {/* top */}
                <motion.line
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  x1="280" y1="210" x2="280" y2="118"
                  stroke="#c2622a" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4"
                  markerEnd="url(#c-arrow)"
                />
                {/* right */}
                <motion.line
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  x1="310" y1="280" x2="436" y2="280"
                  stroke="#c2622a" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4"
                  markerEnd="url(#c-arrow)"
                />
                {/* bottom */}
                <motion.line
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  x1="280" y1="350" x2="280" y2="442"
                  stroke="#c2622a" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4"
                  markerEnd="url(#c-arrow)"
                />
              </svg>

              {/* Orbit Cards */}
              {worldviewItems.map((item, i) => (
                <OrbitCard 
                  key={item.title} 
                  item={item} 
                  index={i} 
                  onHover={handleHover}
                  isHovered={hoveredItem?.title === item.title}
                />
              ))}

              {/* Floating particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  animate={{ y: [0, -10, 0], x: [0, i % 2 === 0 ? 8 : -8, 0] }}
                  // @ts-ignore framer-motion allows two `transition` props when `animate` is present
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-[#c2622a]/30"
                  style={{ left: `${20 + i * 13}%`, top: `${28 + (i * 11) % 44}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center lg:hidden">
          <p className="text-xs text-stone-400">Tap cards to explore</p>
          <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-[#c2622a]/40 to-transparent" />
        </div>

        {/* Tooltip Portal - renders outside normal flow to avoid overlap issues */}
        {hoveredItem && hoveredRect && (
          <TooltipPortal 
            item={hoveredItem} 
            anchorRect={hoveredRect} 
            onClose={() => handleHover(null)} 
          />
        )}
      </section>
    </>
  );
}