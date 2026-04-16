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

export default function ProductCard({
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
      {/* IMAGE */}
      <div className="image-wrap">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="photo"
          sizes="(max-width: 768px) 100vw, 40vw"
        />

        <div className="cover" />

        <span className="badge">{p.tag}</span>

        <div className="desc-overlay">
          <p>{p.desc}</p>
        </div>
      </div>

      {/* BODY */}
      <div className="body">
        <div>
          <h3 className="name">{p.name}</h3>
          <div className="underline" />
        </div>

        <div className="arrow">
          <svg width="18" height="18" viewBox="0 0 18 18">
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
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(26, 61, 43, 0.06);
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .card.in {
          opacity: 1;
          transform: translateY(0);
        }

        .card.hovered {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.12);
        }

        /* IMAGE */
        .image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          min-height: 260px;
          overflow: hidden;
          background: #e8e0d6;
        }

        .photo {
          object-fit: cover;
          transition:
            transform 0.7s ease,
            filter 0.4s ease;
        }

        .card.hovered .photo {
          transform: scale(1.08);
          filter: brightness(0.7);
        }

        .cover {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 18, 12, 0.75),
            rgba(8, 18, 12, 0.1)
          );
        }

        .badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.92);
          color: ${COLORS.green};
          font-size: 10px;
          letter-spacing: 2px;
          padding: 6px 14px;
          border-radius: 50px;
        }

        .card.hovered .badge {
          background: ${COLORS.gold};
          color: #fff;
        }

        .desc-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.6rem;
        }

        .desc-overlay p {
          color: #fff;
          font-size: 13px;
          opacity: 0;
          transform: translateY(10px);
          transition: 0.3s ease;
        }

        .card.hovered .desc-overlay p {
          opacity: 1;
          transform: translateY(0);
        }

        /* BODY */
        .body {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .name {
          font-family: Georgia, serif;
          font-size: 1.35rem;
          color: ${COLORS.green};
        }

        .underline {
          width: 22px;
          height: 2px;
          background: ${COLORS.gold};
          transition: 0.3s;
        }

        .card.hovered .underline {
          width: 42px;
        }

        .arrow {
          color: ${COLORS.gold};
          opacity: 0.5;
          transition: 0.3s;
        }

        .card.hovered .arrow {
          opacity: 1;
          transform: translateX(4px);
        }
      `}</style>
    </article>
  );
}
