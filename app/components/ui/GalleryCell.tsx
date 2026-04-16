"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  image: string;
  label: string;
  layout?: "feature" | "wide" | "small" | "portrait";
}

function GalleryCell({ item, index }: { item: GalleryItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`cell ${item.layout ?? "small"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Real image */}
      <Image
        src={item.image}
        alt={item.label}
        className="photo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Permanent subtle vignette at bottom */}
      <div className="vignette" />

      {/* Hover overlay */}
      <div className={`overlay ${hovered ? "show" : ""}`}>
        <div className="overlay-content">
          <span className="number">0{index + 1}</span>
          <p className="label">{item.label}</p>
          <div className="line" />
        </div>
      </div>

      <style jsx>{`
        .cell {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          min-height: 100%;
          background: #1a1a1a;
          box-shadow: 0 18px 42px rgba(26, 61, 43, 0.08);
        }

        /* ─── REAL IMAGE ─── */
        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition:
            transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 0.4s ease;
          filter: brightness(0.97) saturate(1.05);
        }

        .cell:hover .photo {
          transform: scale(1.07);
          filter: brightness(0.75) saturate(1.1);
        }

        /* Permanent bottom vignette so label is always legible */
        .vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 30, 18, 0.74) 0%,
            rgba(10, 30, 18, 0.16) 48%,
            transparent 74%
          );
          pointer-events: none;
        }

        /* ─── HOVER OVERLAY ─── */
        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.4rem 1.5rem;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .overlay.show {
          opacity: 1;
        }

        .overlay-content {
          width: 100%;
          transform: translateY(6px);
          transition: transform 0.35s ease;
        }

        .overlay.show .overlay-content {
          transform: translateY(0);
        }

        .number {
          display: block;
          font-size: 10px;
          letter-spacing: 3px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 4px;
          font-variant-numeric: tabular-nums;
        }

        .label {
          color: #fff;
          font-family: Georgia, serif;
          font-size: 15px;
          font-style: italic;
          letter-spacing: 0.2px;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .line {
          width: 28px;
          height: 1.5px;
          background: rgba(184, 142, 77, 0.8);
          border-radius: 2px;
          transition: width 0.4s ease 0.1s;
        }

        .overlay.show .line {
          width: 48px;
        }

        /* ─── MOBILE: overlay always visible ─── */
        @media (max-width: 768px) {
          .overlay {
            opacity: 1;
          }

          .overlay-content {
            transform: translateY(0);
          }

          .cell:hover .photo {
            transform: none;
            filter: brightness(0.97) saturate(1.05);
          }

          .line {
            width: 28px;
          }
        }
      `}</style>
    </div>
  );
}

export default GalleryCell;
