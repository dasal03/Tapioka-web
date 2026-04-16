"use client";

import { useEffect, useState } from "react";
import { COLORS } from "@/lib/site/constants";

function InitialScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const dismiss = () => {
      window.requestAnimationFrame(() => {
        setIsFading(true);
        window.setTimeout(() => {
          setIsVisible(false);
        }, 380);
      });
    };

    if (document.readyState === "complete") {
      dismiss();
      return;
    }

    window.addEventListener("load", dismiss, { once: true });
    return () => window.removeEventListener("load", dismiss);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: `
          radial-gradient(circle at top, rgba(212,170,88,0.08), transparent 32%),
          linear-gradient(180deg, #204d37 0%, ${COLORS.green} 45%, #153224 100%)
        `,
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.38s ease",
        pointerEvents: "none",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 0.85rem",
            color: COLORS.gold,
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Tapioka
        </p>

        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 1rem",
            borderRadius: "50%",
            border: "1px solid rgba(212,170,88,0.45)",
            borderTopColor: COLORS.gold,
            animation: "spin 1s linear infinite",
          }}
        />

        <p
          style={{
            margin: 0,
            color: "rgba(245,240,232,0.66)",
            fontSize: 13,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
          }}
        >
          Cargando experiencia
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default InitialScreen;
