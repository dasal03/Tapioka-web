"use client";

import { motion } from "framer-motion";
import { COLORS, WA_URL } from "@/lib/site/constants";
import { WhatsAppIcon } from "@/lib/site/icons";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Hero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(circle at top, rgba(212,170,88,0.14), transparent 26%),
          linear-gradient(180deg, #254f3a 0%, ${COLORS.green} 45%, #132b1f 100%)
        `,
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "5rem 1.5rem 4rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 30, 0],
            y: [0, -18, 0],
          }}
          transition={{
            opacity: { duration: 1.1, delay: 0.15 },
            scale: { duration: 1.1, delay: 0.15 },
            x: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            y: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            top: "12%",
            left: "-2%",
            width: "34vw",
            minWidth: 240,
            maxWidth: 520,
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,170,88,0.24) 0%, rgba(212,170,88,0.06) 48%, transparent 72%)",
            filter: "blur(26px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, -34, 0],
            y: [0, 22, 0],
          }}
          transition={{
            opacity: { duration: 1.1, delay: 0.25 },
            scale: { duration: 1.1, delay: 0.25 },
            x: {
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            y: {
              duration: 11,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            right: "-4%",
            top: "18%",
            width: "28vw",
            minWidth: 220,
            maxWidth: 420,
            aspectRatio: "1 / 1",
            borderRadius: "42%",
            background:
              "radial-gradient(circle, rgba(45,97,71,0.34) 0%, rgba(45,97,71,0.1) 46%, transparent 72%)",
            filter: "blur(30px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.34,
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.4 },
            backgroundPosition: {
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 22%, transparent 78%, rgba(255,255,255,0.04) 100%)",
            backgroundSize: "140% 140%",
            maskImage:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.85) 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.85) 80%, transparent)",
          }}
        />

        {[520, 360, 220].map((size, index) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.84 }}
            animate={{
              opacity: 0.65,
              scale: 1,
              y: [0, index % 2 === 0 ? -8 : 8, 0],
              rotate: [0, index % 2 === 0 ? 6 : -6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.95,
                delay: 0.18 + index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: 1.05,
                delay: 0.18 + index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                duration: 6 + index,
                delay: 1.1 + index * 0.12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              rotate: {
                duration: 11 + index,
                delay: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            style={{
              position: "absolute",
              width: size,
              height: size,
              top: "50%",
              left: "50%",
              borderRadius: "50%",
              border: `1px solid rgba(184,147,63,${0.1 - index * 0.022})`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30, scaleX: 0.86, scaleY: 0.72 }}
          animate={{
            opacity: 1,
            y: 0,
            scaleX: 1,
            scaleY: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 640,
            height: 260,
            background:
              "radial-gradient(circle, rgba(184,147,63,0.22) 0%, rgba(184,147,63,0.08) 42%, transparent 72%)",
            borderRadius: "50%",
            filter: "blur(72px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "20%",
            left: "18%",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "rgba(245,240,232,0.38)",
            boxShadow: "0 0 32px rgba(245,240,232,0.16)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: 28, y: 26 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "28%",
            right: "19%",
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "1px solid rgba(184,147,63,0.45)",
          }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ position: "relative", zIndex: 1, maxWidth: 700 }}
      >
        <motion.p
          variants={itemVariants}
          style={{
            color: COLORS.gold,
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          ✦ Repostería artesanal · Santa Marta ✦
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
            fontWeight: 600,
            color: COLORS.cream,
            lineHeight: 1.05,
            margin: "0 0 1rem",
          }}
        >
          Postres que
          <br />
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            enamoran
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            color: "rgba(245,240,232,0.45)",
            fontSize: 12,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            margin: "0 0 2.5rem",
          }}
        >
          Brownies · Cheesecakes · Pasteles · Postres especiales
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: COLORS.gold,
              color: "#fff",
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "15px 34px",
              borderRadius: 50,
              textDecoration: "none",
              boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
            }}
          >
            <WhatsAppIcon size={15} /> Hacer un pedido
          </motion.a>

          <motion.a
            href="#productos"
            whileHover={{ x: 4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(245,240,232,0.55)",
              fontSize: 12,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Ver productos ↓
          </motion.a>
        </motion.div>
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          pointerEvents: "none",
        }}
      >
        <motion.a
          href="#productos"
          initial={{ opacity: 0, y: 22 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            y: {
              duration: 2.4,
              delay: 1.35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.03, y: -2 }}
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "0.85rem 1rem 0.85rem 1.1rem",
            borderRadius: 999,
            background: "rgba(245,240,232,0.09)",
            border: "1px solid rgba(245,240,232,0.14)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: COLORS.cream,
            textDecoration: "none",
            boxShadow: "0 16px 34px rgba(0,0,0,0.14)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "2.8px",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.82)",
              whiteSpace: "nowrap",
            }}
          >
            Desliza y descubre
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: COLORS.gold,
              color: "#fff",
              fontSize: 16,
              lineHeight: 1,
              boxShadow: "0 8px 18px rgba(184,147,63,0.28)",
            }}
          >
            ↓
          </span>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
