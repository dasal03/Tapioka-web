"use client";

import { useEffect, useState } from "react";
import { COLORS, WA_URL } from "@/lib/site/constants";
import { WhatsAppIcon } from "@/lib/site/icons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById("tapioka-root");

    const onScroll = () => {
      const scrollY = el?.scrollTop ?? window.scrollY;
      setScrolled(scrollY > 40);
    };

    el?.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      el?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    { label: "Productos", href: "#productos" },
    { label: "Galería", href: "#galeria" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Pedidos", href: "#contacto" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(26,61,43,0.92)"
          : "rgba(255,255,255,0.96)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(184,147,63,0.2)"
          : "1px solid rgba(184,147,63,0.12)",
        boxShadow: scrolled ? "none" : "0 6px 24px rgba(17,17,17,0.04)",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0.9rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: scrolled ? COLORS.cream : COLORS.goldDark,
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          Tapioka
        </a>

        {/* Desktop */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-menu"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link"
                style={{
                  fontSize: 11,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: scrolled
                    ? "rgba(245,240,232,0.75)"
                    : "rgba(154,120,48,0.82)",
                  textDecoration: "none",
                  transition: "color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = scrolled
                    ? "#fff"
                    : COLORS.gold)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled
                    ? "rgba(245,240,232,0.75)"
                    : "rgba(154,120,48,0.82)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: COLORS.gold,
            color: "#fff",
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: 500,
            padding: "10px 18px",
            borderRadius: 50,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          <WhatsAppIcon size={13} /> Pedir
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "transparent",
            border: "none",
            color: scrolled ? COLORS.cream : COLORS.goldDark,
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            padding: "1rem 1.5rem",
            background: scrolled ? "rgba(26,61,43,0.98)" : "rgba(255,255,255,0.98)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                padding: "12px 0",
                color: scrolled ? "#fff" : COLORS.green,
                textDecoration: "none",
                borderBottom: scrolled
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(26,61,43,0.08)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href={WA_URL}
            target="_blank"
            style={{
              display: "block",
              marginTop: 12,
              background: COLORS.gold,
              padding: "12px",
              textAlign: "center",
              borderRadius: 30,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Pedir ahora
          </a>
        </div>
      )}

      {/* Responsive styles */}
      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-flex;
          padding-bottom: 6px;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1.5px;
          border-radius: 999px;
          background: ${COLORS.gold};
          transform: scaleX(0.35);
          transform-origin: center;
          opacity: 0;
          transition:
            transform 0.22s ease,
            opacity 0.22s ease;
        }

        .nav-link:hover {
          transform: translateY(-1px);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          opacity: 1;
        }

        .mobile-menu-btn {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
