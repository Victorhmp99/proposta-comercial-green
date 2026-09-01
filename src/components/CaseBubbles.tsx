"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/basePath";

const images = [
  "5037628289387793363.jpg",
  "5037628289387793364.jpg",
  "5037628289387793365.jpg",
  "5037628289387793366.jpg",
  "5037628289387793367.jpg",
  "5037628289387793368.jpg",
  "5037628289387793369.jpg",
  "5037628289387793370.jpg",
  "5037628289387793371.jpg",
  "4950009925757242552.jpg",
  "4950009925757242553.jpg",
  "4950009925757242554.jpg",
  "4950009925757242555.jpg",
  "4950009925757242556.jpg",
];

/* Grade de células com margem generosa nas bordas — mesmo no auge do
   "estouro" (scale maior), a bolha não sai da área nem cobre o texto acima. */
const CELLS = [
  { top: "12%", left: "2%" },
  { top: "10%", left: "62%" },
  { top: "42%", left: "30%" },
  { top: "44%", left: "0%" },
  { top: "70%", left: "55%" },
  { top: "68%", left: "12%" },
  { top: "38%", left: "70%" },
];

const SLOT_COUNT = 5;
const MAX_SCALE = 1.9;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

/** Bolhas menores (e menos delas) em telas pequenas. */
function useViewport() {
  const [vw, setVw] = useState(1280);
  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return vw;
}

/* Cada bolha vive seu próprio ciclo: aparece, flutua, "estoura" e renasce em
   outra célula com outra imagem — nunca repetindo imagem ou célula em uso.
   O início de cada bolha é escalonado para nunca dar tela vazia. */
function Bubble({
  index,
  activeImages,
  releaseImage,
  activeCells,
  releaseCell,
  minSize,
  maxSize,
}: {
  index: number;
  activeImages: React.RefObject<Set<string>>;
  releaseImage: (src: string) => void;
  activeCells: React.RefObject<Set<number>>;
  releaseCell: (cell: number) => void;
  minSize: number;
  maxSize: number;
}) {
  const [cycle, setCycle] = useState(0);
  const [src, setSrc] = useState<string | null>(null);
  const [cellIndex, setCellIndex] = useState<number | null>(null);
  const [size] = useState(() => randomBetween(minSize, maxSize));
  const currentSrcRef = useRef<string | null>(null);
  const currentCellRef = useRef<number | null>(null);

  function spawn() {
    const freeImages = images.filter((img) => !activeImages.current.has(img));
    const imgPool = freeImages.length > 0 ? freeImages : images;
    const nextSrc = imgPool[Math.floor(Math.random() * imgPool.length)];

    const freeCells = CELLS.map((_, i) => i).filter((i) => !activeCells.current.has(i));
    const cellPool = freeCells.length > 0 ? freeCells : CELLS.map((_, i) => i);
    const nextCell = cellPool[Math.floor(Math.random() * cellPool.length)];

    activeImages.current.add(nextSrc);
    activeCells.current.add(nextCell);
    currentSrcRef.current = nextSrc;
    currentCellRef.current = nextCell;
    setSrc(nextSrc);
    setCellIndex(nextCell);
  }

  useEffect(() => {
    // Escalona o início de cada bolha para que nunca estourem todas juntas.
    const startDelay = index * randomBetween(700, 1000);
    const t = setTimeout(spawn, startDelay);
    return () => {
      clearTimeout(t);
      if (currentSrcRef.current) releaseImage(currentSrcRef.current);
      if (currentCellRef.current !== null) releaseCell(currentCellRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCycleEnd() {
    if (currentSrcRef.current) releaseImage(currentSrcRef.current);
    if (currentCellRef.current !== null) releaseCell(currentCellRef.current);
    const delay = randomBetween(150, 500);
    setTimeout(() => {
      spawn();
      setCycle((c) => c + 1);
    }, delay);
  }

  if (!src || cellIndex === null) return null;
  const cell = CELLS[cellIndex];

  return (
    <motion.div
      key={cycle}
      className="absolute"
      style={{ top: cell.top, left: cell.left, width: size, height: size * 1.3 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 1, 0],
        scale: [0, 1.15, 1.25, 1.4, MAX_SCALE],
      }}
      transition={{
        duration: randomBetween(6, 9.5),
        times: [0, 0.12, 0.25, 0.9, 1],
        ease: "easeInOut",
      }}
      onAnimationComplete={handleCycleEnd}
    >
      <motion.div
        animate={{ y: [0, -8, 0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#060a08] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] ring-1 ring-mint/20"
      >
        <Image
          src={asset(`/cases/${src}`)}
          alt="Resultado de cliente Green Hub"
          fill
          sizes="160px"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

export function CaseBubbles() {
  const activeImages = useRef<Set<string>>(new Set());
  const activeCells = useRef<Set<number>>(new Set());
  const releaseImage = (src: string) => activeImages.current.delete(src);
  const releaseCell = (cell: number) => activeCells.current.delete(cell);
  const vw = useViewport();

  const isMobile = vw < 640;
  const isTablet = vw >= 640 && vw < 1024;

  const slots = isMobile ? 3 : isTablet ? 4 : SLOT_COUNT;
  const minSize = isMobile ? 84 : isTablet ? 110 : 130;
  const maxSize = isMobile ? 112 : isTablet ? 148 : 178;

  return (
    <div className="relative mx-auto mt-8 h-[420px] sm:h-[560px] lg:h-[760px] w-full max-w-5xl overflow-hidden">
      {Array.from({ length: slots }).map((_, i) => (
        <Bubble
          key={`${i}-${slots}`}
          index={i}
          activeImages={activeImages}
          releaseImage={releaseImage}
          activeCells={activeCells}
          releaseCell={releaseCell}
          minSize={minSize}
          maxSize={maxSize}
        />
      ))}
    </div>
  );
}
