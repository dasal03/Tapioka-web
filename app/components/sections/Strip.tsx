"use client";

import { COLORS } from "@/lib/site/constants";

function Strip() {
  const items = [
    "Brownies",
    "Cheesecakes",
    "Pasteles",
    "Postres especiales",
    "Pedidos personalizados",
    "100% Artesanal",
    "Santa Marta",
  ];

  const doubled = [...items, ...items, ...items];

  return (
    <div className="strip">
      <div className="track">
        {doubled.map((item, i) => (
          <span key={i} className="item">
            ✦ {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        .strip {
          background: ${COLORS.gold};
          padding: 12px 0;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .track {
          display: inline-block;
          animation: marquee 32s linear infinite;
        }

        .item {
          display: inline-block;
          color: #fff;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin: 0 2rem;
        }

        /* ✨ suaviza bordes (pro look) */
        .strip::before,
        .strip::after {
          content: "";
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .strip::before {
          left: 0;
          background: linear-gradient(to right, ${COLORS.gold}, transparent);
        }

        .strip::after {
          right: 0;
          background: linear-gradient(to left, ${COLORS.gold}, transparent);
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .strip {
            padding: 10px 0;
          }

          .track {
            animation: marquee 22s linear infinite;
          }

          .item {
            font-size: 10px;
            letter-spacing: 2px;
            margin: 0 1.2rem;
          }
        }

        /* 💻 LARGE SCREENS */
        @media (min-width: 1200px) {
          .track {
            animation: marquee 36s linear infinite;
          }

          .item {
            font-size: 12px;
            margin: 0 2.5rem;
          }
        }

        /* 🧠 UX PRO: pausa en hover */
        @media (hover: hover) {
          .track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

export default Strip;
