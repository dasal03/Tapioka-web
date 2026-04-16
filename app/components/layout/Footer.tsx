"use client";

import { COLORS, IG_URL, WA_URL } from "@/lib/site/constants";
import { InstagramIcon, WhatsAppIcon } from "@/lib/site/icons";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Productos", href: "#productos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Pedidos", href: "#contacto" },
];

const serviceNotes = [
  "Pedidos por encargo",
  "Detalles para celebraciones",
  "Postres frescos hechos con cuidado",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <div className="shell">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Cierre dulce</p>
            <h2 className="cta-title">
              Hacemos postres que se sienten <span>especiales desde el primer bocado</span>
            </h2>
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            <WhatsAppIcon size={16} /> Pedir por WhatsApp
          </a>
        </div>

        <div className="grid">
          <div className="brand-block">
            <span className="brand">Tapioka</span>
            <p className="brand-copy">
              Reposteria artesanal en Santa Marta, creada para celebrar con
              sabores memorables, ingredientes frescos y presentaciones que
              enamoran.
            </p>

            <div className="socials">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <WhatsAppIcon size={15} />
                WhatsApp
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <InstagramIcon size={15} />
                Instagram
              </a>
            </div>
          </div>

          <div className="column">
            <p className="column-title">Explora</p>
            <nav className="link-list" aria-label="Footer">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="column">
            <p className="column-title">Ideal para</p>
            <div className="note-list">
              {serviceNotes.map((note) => (
                <p key={note} className="note-item">
                  {note}
                </p>
              ))}
            </div>
          </div>

          <div className="column">
            <p className="column-title">Contacto</p>
            <div className="contact-card">
              <p className="contact-line">Santa Marta, Colombia</p>
              <p className="contact-line">Atencion por WhatsApp e Instagram</p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Solicitar cotizacion
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <p className="legal">
            Tapioka · Reposteria artesanal hecha con dedicacion
          </p>
          <p className="legal">Santa Marta, Colombia</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(184, 147, 63, 0.14), transparent 34%),
            linear-gradient(180deg, #101010 0%, #0a0a0a 100%);
          padding: 2rem 1.5rem 1.4rem;
        }

        .glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
          pointer-events: none;
        }

        .glow-left {
          top: -120px;
          left: -80px;
          background: rgba(184, 147, 63, 0.14);
        }

        .glow-right {
          right: -90px;
          bottom: -130px;
          background: rgba(46, 97, 71, 0.22);
        }

        .shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .cta-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem 2rem 2.2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(184, 147, 63, 0.2);
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            rgba(245, 240, 232, 0.04),
            rgba(184, 147, 63, 0.08)
          );
          backdrop-filter: blur(10px);
        }

        .eyebrow {
          margin: 0 0 0.8rem;
          color: ${COLORS.gold};
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .cta-title {
          max-width: 620px;
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.08;
          color: ${COLORS.cream};
        }

        .cta-title span {
          color: ${COLORS.gold};
          font-style: italic;
        }

        .cta-link {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.95rem 1.4rem;
          border-radius: 999px;
          background: ${COLORS.gold};
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          font-size: 11px;
          box-shadow: 0 14px 34px rgba(184, 147, 63, 0.18);
        }

        .grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 0.9fr 1fr;
          gap: 2rem;
          padding: 1.4rem 0 2.1rem;
        }

        .brand {
          display: inline-block;
          margin-bottom: 1rem;
          font-family: Georgia, serif;
          font-size: 1.9rem;
          color: ${COLORS.cream};
        }

        .brand-copy {
          max-width: 360px;
          margin: 0;
          color: rgba(245, 240, 232, 0.62);
          font-size: 14px;
          line-height: 1.9;
        }

        .socials {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          margin-top: 1.4rem;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.7rem 0.95rem;
          border: 1px solid rgba(245, 240, 232, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(245, 240, 232, 0.86);
          text-decoration: none;
          font-size: 12px;
        }

        .column-title {
          margin: 0 0 1rem;
          color: ${COLORS.gold};
          font-size: 11px;
          letter-spacing: 2.8px;
          text-transform: uppercase;
        }

        .link-list,
        .note-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-link,
        .note-item,
        .contact-line,
        .legal {
          margin: 0;
          color: rgba(245, 240, 232, 0.62);
          font-size: 13px;
          line-height: 1.8;
          text-decoration: none;
        }

        .footer-link {
          width: fit-content;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-link:hover {
          color: ${COLORS.cream};
          transform: translateX(3px);
        }

        .contact-card {
          padding: 1rem 1rem 1.1rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(184, 147, 63, 0.12);
        }

        .contact-link {
          display: inline-block;
          margin-top: 0.8rem;
          color: ${COLORS.gold};
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .bottom-bar {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .legal {
          font-size: 11px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.34);
        }

        @media (max-width: 980px) {
          .cta-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 720px) {
          .footer {
            padding: 1.2rem 1.1rem 1.4rem;
          }

          .cta-card {
            padding: 1.6rem 1.2rem 1.7rem;
            border-radius: 22px;
          }

          .cta-link {
            width: 100%;
            justify-content: center;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 1.6rem;
          }

          .bottom-bar {
            flex-direction: column;
          }

          .brand-copy,
          .footer-link,
          .note-item,
          .contact-line {
            font-size: 13px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
