"use client";

import { useState } from "react";
import Image from "next/image";
import { COLORS } from "@/lib/site/constants";

interface Product {
  image: string;
  name: string;
  tag: string;
  desc: string;
}

function ProductCard({
  product: p,
  index = 0,
  visible = true,
}: {
  product: Product;
  index?: number;
  visible?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`card ${visible ? "in" : ""} ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* ── IMAGE ZONE ── */}
      <div className="image-wrap">
        <Image
          src={p.image}
          alt={p.name}
          className="photo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="cover" />

        {/* Tag badge */}
        <span className="badge">{p.tag}</span>

        {/* Hover description overlay */}
        <div className="desc-overlay">
          <p>{p.desc}</p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="body">
        <div className="body-left">
          <h3 className="name">{p.name}</h3>
          <div className="underline" />
        </div>
        <div className="arrow">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .card {
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(26, 61, 43, 0.07);
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          transition:
            box-shadow 0.4s ease,
            transform 0.4s ease,
            opacity 0.55s ease;
          /* entrance */
          opacity: 0;
          transform: translateY(28px);
        }

        .card.in {
          opacity: 1;
          transform: translateY(0);
        }

        .card.hovered {
          box-shadow: 0 20px 48px rgba(26, 61, 43, 0.14);
          transform: translateY(-4px);
        }

        /* ── IMAGE ── */
        .image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #e8e0d6;
        }

        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition:
            transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 0.4s ease;
          filter: brightness(0.98) saturate(1.05);
        }

        .card.hovered .photo {
          transform: scale(1.07);
          filter: brightness(0.7) saturate(1.08);
        }

        .cover {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              to top,
              rgba(8, 18, 12, 0.72) 0%,
              rgba(8, 18, 12, 0.28) 42%,
              rgba(8, 18, 12, 0.08) 68%,
              rgba(8, 18, 12, 0) 100%
            ),
            linear-gradient(
              180deg,
              rgba(10, 10, 10, 0.14) 0%,
              rgba(10, 10, 10, 0) 34%
            );
          transition:
            opacity 0.35s ease,
            background 0.35s ease;
          pointer-events: none;
        }

        .card.hovered .cover {
          background:
            linear-gradient(
              to top,
              rgba(8, 18, 12, 0.84) 0%,
              rgba(8, 18, 12, 0.48) 48%,
              rgba(8, 18, 12, 0.14) 76%,
              rgba(8, 18, 12, 0.02) 100%
            ),
            linear-gradient(
              180deg,
              rgba(184, 147, 63, 0.08) 0%,
              rgba(10, 10, 10, 0) 38%
            );
        }

        /* Badge */
        .badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(245, 240, 232, 0.92);
          color: ${COLORS.green};
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 50px;
          backdrop-filter: blur(6px);
          z-index: 3;
          transition:
            background 0.3s,
            color 0.3s;
        }

        .card.hovered .badge {
          background: ${COLORS.gold};
          color: #fff;
        }

        /* Description overlay */
        .desc-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.4rem 1.4rem 1.6rem;
          z-index: 2;
        }

        .desc-overlay p {
          color: rgba(245, 240, 232, 0.95);
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 0.35s ease,
            transform 0.35s ease;
        }

        .card.hovered .desc-overlay p {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── BODY ── */
        .body {
          padding: 1.1rem 1.3rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .body-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .name {
          font-family: Georgia, serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: ${COLORS.green};
          margin: 0;
          line-height: 1.1;
        }

        .underline {
          width: 20px;
          height: 1.5px;
          background: ${COLORS.gold};
          border-radius: 2px;
          transition: width 0.35s ease;
        }

        .card.hovered .underline {
          width: 40px;
        }

        .arrow {
          color: ${COLORS.gold};
          opacity: 0.4;
          transition:
            opacity 0.3s,
            transform 0.3s;
          flex-shrink: 0;
        }

        .card.hovered .arrow {
          opacity: 1;
          transform: translateX(3px);
        }
      `}</style>
    </article>
  );
}

export default ProductCard;
