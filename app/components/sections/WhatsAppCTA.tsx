import { COLORS, IG_URL, WA_URL } from "@/lib/site/constants";
import { WhatsAppIcon } from "@/lib/site/icons";

function WhatsAppCTA() {
  return (
    <section
      id="contacto"
      style={{
        background: "#faf7f2",
        padding: "7rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: `1px solid rgba(184,147,63,0.35)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            margin: "0 auto 2rem",
          }}
        >
          🌿
        </div>

        <p
          style={{
            color: COLORS.gold,
            fontSize: 11,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Haz tu pedido
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 600,
            color: COLORS.green,
            lineHeight: 1.15,
            margin: "0 0 1.25rem",
          }}
        >
          ¿Listo para probar{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            algo especial?
          </span>
        </h2>

        <p
          style={{
            color: "#888",
            fontSize: 14,
            lineHeight: 1.8,
            margin: "0 0 2.5rem",
          }}
        >
          Escríbenos por WhatsApp — cuéntanos qué tienes en mente y te ayudamos
          a crear el postre perfecto para tu ocasión.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "#25D366",
            color: "#fff",
            fontSize: 13,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: 500,
            padding: "18px 42px",
            borderRadius: 50,
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(37,211,102,0.25)",
          }}
        >
          <WhatsAppIcon size={18} /> Pedir por WhatsApp
        </a>

        <p
          style={{
            marginTop: "2rem",
            color: "#bbb",
            fontSize: 12,
            letterSpacing: 1,
          }}
        >
          También nos encuentras como{" "}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: COLORS.gold, textDecoration: "none" }}
          >
            @tapioka.sm
          </a>{" "}
          en Instagram
        </p>
      </div>
    </section>
  );
}

export default WhatsAppCTA
