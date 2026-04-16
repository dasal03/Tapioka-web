"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS } from "@/lib/site/constants";

function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({
  stat,
  started,
  delay,
}: {
  stat: { value: number; suffix: string; label: string; desc: string };
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, 1600, started);

  return (
    <div className="stat" style={{ transitionDelay: `${delay}ms` }}>
      <div className={`stat-inner ${started ? "visible" : ""}`}>
        <div className="number-row">
          <span className="number">
            {count}
            <span className="suffix">{stat.suffix}</span>
          </span>
        </div>
        <div className="stat-text">
          <span className="label">{stat.label}</span>
          <span className="stat-desc">{stat.desc}</span>
        </div>
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{
              transitionDelay: `${delay + 300}ms`,
              width: started ? "100%" : "0%",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .stat {
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
          transition-delay: ${delay}ms;
        }

        .stat-inner {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.55s ease,
            transform 0.55s ease;
          transition-delay: ${delay}ms;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(184, 147, 63, 0.18);
        }

        .stat-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat:last-child .stat-inner {
          border-bottom: none;
        }

        .number-row {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 6px;
        }

        .number {
          font-family: Georgia, serif;
          font-size: clamp(2.6rem, 6vw, 3.8rem);
          color: ${COLORS.gold};
          line-height: 1;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
        }

        .suffix {
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: ${COLORS.gold};
          opacity: 0.7;
        }

        .stat-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          margin-bottom: 14px;
        }

        .label {
          color: rgba(245, 240, 232, 0.85);
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .stat-desc {
          color: rgba(245, 240, 232, 0.35);
          font-size: 11px;
          letter-spacing: 0.5px;
        }

        .bar-track {
          height: 1.5px;
          background: rgba(184, 147, 63, 0.15);
          border-radius: 2px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(184, 147, 63, 0.4),
            ${COLORS.gold}
          );
          border-radius: 2px;
          transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @media (max-width: 768px) {
          .stat-inner {
            text-align: center;
            padding: 1.6rem 0;
          }
          .number-row {
            justify-content: center;
          }
          .stat-text {
            align-items: center;
          }
          .bar-track {
            max-width: 80px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Años de experiencia",
    desc: "Desde 2020 en Santa Marta",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Clientes felices",
    desc: "Y seguimos contando",
  },
  {
    value: 100,
    suffix: "%",
    label: "Ingredientes frescos",
    desc: "Sin preservativos, sin atajos",
  },
];

function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="about" ref={sectionRef}>
      <div className="deco-ring" aria-hidden />

      <div className="container">
        <div className={`text ${started ? "visible" : ""}`}>
          <p className="tag">Nuestra historia</p>

          <h2 className="title">
            4 años endulzando <em>Santa Marta</em>
          </h2>

          <p className="desc">
            Tapioka nació de una pasión: crear postres que contaran una
            historia, que se quedaran en la memoria y que hicieran feliz a quien
            los probara.
          </p>

          <p className="desc">
            Cada cheesecake, cada brownie y cada pastel sale de nuestras manos
            con ingredientes frescos, recetas cuidadas y el cariño de siempre.
            Sin atajos, sin preservativos — solo repostería como debe ser.
          </p>

          <div className="signature">
            <div className="sig-line" />
            <span>Fundado en Santa Marta · 2020</span>
          </div>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              stat={s}
              started={started}
              delay={i * 120}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .about {
          background: ${COLORS.green};
          padding: 7rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Decorative circle */
        .deco-ring {
          position: absolute;
          top: -180px;
          right: -180px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(184, 147, 63, 0.1);
          pointer-events: none;
        }
        .deco-ring::after {
          content: "";
          position: absolute;
          inset: 40px;
          border-radius: 50%;
          border: 1px solid rgba(184, 147, 63, 0.07);
        }

        .container {
          max-width: 1040px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
          position: relative;
        }

        /* ── TEXT ── */
        .text {
          opacity: 0;
          transform: translateX(-24px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .text.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .tag {
          color: ${COLORS.gold};
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tag::before {
          content: "";
          display: inline-block;
          width: 24px;
          height: 1px;
          background: ${COLORS.gold};
          opacity: 0.5;
        }

        .title {
          font-family: Georgia, serif;
          font-size: clamp(1.9rem, 4vw, 2.9rem);
          font-weight: 600;
          color: ${COLORS.cream};
          line-height: 1.15;
          margin: 0 0 1.6rem;
        }

        .title em {
          color: ${COLORS.gold};
          font-style: italic;
        }

        .desc {
          color: rgba(245, 240, 232, 0.55);
          font-size: 14px;
          line-height: 1.95;
          margin-bottom: 1rem;
        }

        .signature {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 2rem;
        }

        .sig-line {
          width: 32px;
          height: 1px;
          background: ${COLORS.gold};
          opacity: 0.4;
        }

        .signature span {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(245, 240, 232, 0.3);
        }

        /* ── STATS ── */
        .stats {
          display: flex;
          flex-direction: column;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .about {
            padding: 5rem 1.2rem;
          }

          .container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .text {
            text-align: center;
            transform: translateY(16px) translateX(0);
          }

          .text.visible {
            transform: translateY(0);
          }

          .tag {
            justify-content: center;
          }

          .signature {
            justify-content: center;
          }

          .deco-ring {
            display: none;
          }
        }

        @media (min-width: 1200px) {
          .container {
            gap: 7rem;
          }
          .desc {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
