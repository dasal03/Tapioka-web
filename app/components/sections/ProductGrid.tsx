"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { COLORS } from "@/lib/site/constants";

const products = [
  {
    name: "Cheesecakes",
    desc: "Cremosos, con base crujiente y toppings irresistibles: frutos rojos, caramelo, maracuyá y más.",
    tag: "Especialidad",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=85&fit=crop",
  },
  {
    name: "Pasteles",
    desc: "Tortas personalizadas para cada ocasión — cumpleaños, bodas y celebraciones únicas.",
    tag: "Personalizado",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=85&fit=crop",
  },
  {
    name: "Brownies",
    desc: "Intensos, húmedos y con la textura perfecta. El clásico que nunca decepciona.",
    tag: "Fan favorito",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=85&fit=crop",
  },
  {
    name: "Postres",
    desc: "Dulces artesanales que varían por temporada — siempre frescos, siempre sorprendentes.",
    tag: "De temporada",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=700&q=85&fit=crop",
  },
];

function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="productos" className="section" ref={sectionRef}>
      <div className="container">
        {/* ── HEADER ── */}
        <div className={`header ${visible ? "in" : ""}`}>
          <span className="tag">Lo que hacemos</span>
          <h2 className="title">
            Creados con <em>amor artesanal</em>
          </h2>
          <p className="subtitle">
            Repostería hecha a mano, pensada para cada momento especial
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="grid">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          background: ${COLORS.cream};
          padding: 7rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle ambient gradient */
        .section::before {
          content: "";
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(
            ellipse,
            rgba(184, 147, 63, 0.07) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        /* ── HEADER ── */
        .header {
          text-align: center;
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .header.in {
          opacity: 1;
          transform: translateY(0);
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: ${COLORS.gold};
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .tag::before,
        .tag::after {
          content: "";
          display: inline-block;
          width: 24px;
          height: 1px;
          background: ${COLORS.gold};
          opacity: 0.45;
        }

        .title {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          color: ${COLORS.green};
          line-height: 1.1;
          margin: 0 0 12px;
        }

        .title em {
          color: ${COLORS.gold};
          font-style: italic;
        }

        .subtitle {
          color: rgba(26, 61, 43, 0.45);
          font-size: 14px;
          letter-spacing: 0.2px;
          margin: 0;
        }

        /* ── GRID ── */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .section {
            padding: 5rem 1rem;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default ProductGrid;
