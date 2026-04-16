"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { COLORS } from "@/lib/site/constants";

const products = [
  {
    name: "Cheesecakes",
    desc: "Cremosos, con base crujiente y toppings irresistibles.",
    tag: "Especialidad",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=90&fit=crop",
  },
  {
    name: "Pasteles",
    desc: "Tortas personalizadas para cada ocasión.",
    tag: "Personalizado",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=90&fit=crop",
  },
  {
    name: "Brownies",
    desc: "Intensos, húmedos y perfectos.",
    tag: "Favorito",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=90&fit=crop",
  },
  {
    name: "Postres",
    desc: "Opciones frescas que cambian por temporada.",
    tag: "Temporada",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=900&q=90&fit=crop",
  },
];

export default function ProductGrid() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const isCarousel = products.length > 4;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className={`header ${visible ? "in" : ""}`}>
          <span className="tag">Lo que hacemos</span>
          <h2 className="title">
            Creados con <em>amor artesanal</em>
          </h2>
        </div>

        {/* GRID o CARRUSEL */}
        <div className={isCarousel ? "carousel" : "grid"}>
          {products.map((p, i) => (
            <div key={i} className="item">
              <ProductCard product={p} index={i} visible={visible} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          background: ${COLORS.cream};
          padding: 7rem 1.5rem;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.6s;
        }

        .header.in {
          opacity: 1;
          transform: translateY(0);
        }

        .tag {
          color: ${COLORS.gold};
          font-size: 10px;
          letter-spacing: 4px;
        }

        .title {
          font-family: Georgia, serif;
          font-size: 2.5rem;
          color: ${COLORS.green};
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        /* CARRUSEL */
        .carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
        }

        .carousel::-webkit-scrollbar {
          height: 6px;
        }

        .carousel::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }

        .item {
          flex: 0 0 48%;
          scroll-snap-align: start;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .item {
            flex: 0 0 80%;
          }
        }
      `}</style>
    </section>
  );
}
