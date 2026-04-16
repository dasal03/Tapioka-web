"use client";

import GalleryCell from "@/components/ui/GalleryCell";
import { COLORS, IG_URL } from "@/lib/site/constants";
import { InstagramIcon } from "@/lib/site/icons";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=85&fit=crop",
    label: "Cheesecake de frutos rojos",
    layout: "feature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85&fit=crop",
    label: "Torta personalizada",
    layout: "wide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=85&fit=crop",
    label: "Brownies artesanales",
    layout: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85&fit=crop",
    label: "Pastel de cumpleaños",
    layout: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=85&fit=crop",
    label: "Postre de temporada",
    layout: "wide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=85&fit=crop",
    label: "Cheesecake especial",
    layout: "portrait",
  },
];

function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="intro">
          <div className="header">
            <span className="tag">Nuestra galería</span>
            <h2 className="title">
              Cada postre, <em>una obra de arte</em>
            </h2>
            <p className="subtitle">
              Una selección de pedidos, detalles y postres que muestran el
              estilo artesanal de Tapioka.
            </p>
          </div>

          <div className="summary">
            <p className="summary-title">Detalles que cuidamos</p>
            <p className="summary-copy">
              Texturas, color, montaje y acabados pensados para que cada postre
              se vea tan especial como sabe.
            </p>
          </div>
        </div>

        <div className="grid">
          {galleryItems.map((item, i) => (
            <GalleryCell key={i} item={item} index={i} />
          ))}
        </div>

        <div className="cta">
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={15} /> Ver más en Instagram
          </a>
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background: ${COLORS.cream};
          padding: 7rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle texture overlay */
        .gallery::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(
              ellipse at 20% 50%,
              rgba(184, 142, 77, 0.06) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse at 80% 20%,
              rgba(26, 61, 43, 0.05) 0%,
              transparent 60%
            );
          pointer-events: none;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
        }

        .intro {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
          gap: 2rem;
          align-items: end;
          margin-bottom: 2.7rem;
        }

        .header {
          text-align: left;
        }

        .tag {
          display: inline-block;
          color: ${COLORS.gold};
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 14px;
          position: relative;
          padding: 0 18px;
        }

        .tag::before,
        .tag::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 30px;
          height: 1px;
          background: ${COLORS.gold};
          opacity: 0.5;
        }
        .tag::before {
          right: 100%;
          margin-right: -14px;
        }
        .tag::after {
          left: 100%;
          margin-left: -14px;
        }

        .title {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 600;
          color: ${COLORS.green};
          margin: 0 0 12px;
          line-height: 1.15;
        }

        .title em {
          color: ${COLORS.gold};
          font-style: italic;
        }

        .subtitle {
          color: rgba(26, 61, 43, 0.55);
          font-size: 15px;
          letter-spacing: 0.15px;
          margin: 0;
          max-width: 580px;
          line-height: 1.8;
        }

        .summary {
          padding: 1.35rem 1.4rem;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(184, 147, 63, 0.14);
          box-shadow: 0 16px 40px rgba(26, 61, 43, 0.05);
        }

        .summary-title {
          margin: 0 0 0.55rem;
          color: ${COLORS.gold};
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .summary-copy {
          margin: 0;
          color: rgba(26, 61, 43, 0.62);
          font-size: 14px;
          line-height: 1.75;
        }

        /* ─── GRID ─── */
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(4, minmax(120px, 170px));
          gap: 14px;
        }

        .grid :global(.cell) {
          min-height: 0;
        }

        .grid :global(.cell.feature) {
          grid-column: span 4;
          grid-row: span 3;
        }

        .grid :global(.cell.wide) {
          grid-column: span 4;
          grid-row: span 1;
        }

        .grid :global(.cell.small) {
          grid-column: span 4;
          grid-row: span 2;
        }

        .grid :global(.cell.portrait) {
          grid-column: span 4;
          grid-row: span 3;
        }

        /* ─── CTA ─── */
        .cta {
          text-align: center;
          margin-top: 2.5rem;
        }

        .cta a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: ${COLORS.green};
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          border: 1px solid rgba(26, 61, 43, 0.25);
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          transition:
            background 0.25s,
            color 0.25s,
            border-color 0.25s;
        }

        .cta a:hover {
          background: ${COLORS.green};
          color: #fff;
          border-color: ${COLORS.green};
        }

        /* ─── TABLET ─── */
        @media (max-width: 980px) {
          .intro {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .summary {
            max-width: 520px;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: none;
            grid-auto-rows: 240px;
            gap: 10px;
          }

          .grid :global(.cell.feature),
          .grid :global(.cell.wide),
          .grid :global(.cell.small),
          .grid :global(.cell.portrait) {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        @media (max-width: 768px) {
          .gallery {
            padding: 5rem 1rem;
          }
        }

        /* ─── MOBILE ─── */
        @media (max-width: 480px) {
          .header {
            text-align: center;
          }

          .subtitle {
            font-size: 14px;
          }

          .summary {
            text-align: center;
          }

          .grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
        }
      `}</style>
    </section>
  );
}

export default Gallery;
