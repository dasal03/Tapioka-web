"use client";

import Image from "next/image";
import { COLORS, IG_URL } from "@/lib/site/constants";
import { InstagramIcon } from "@/lib/site/icons";

const posts = [
  {
    img: "/posts/post1.jpg",
    url: "https://www.instagram.com/reel/DXEs2gfBLQo/",
  },
  {
    img: "/posts/post2.jpg",
    url: "https://www.instagram.com/p/DW72qPqDeKo/",
  },
  {
    img: "/posts/post3.jpg",
    url: "https://www.instagram.com/p/DQPy2PmiSYM/",
  },
  {
    img: "/posts/post4.jpg",
    url: "https://www.instagram.com/p/DQPvi_wiSDF/",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-head">
          <p className="tag">Nuestra galería</p>
          <h2 className="title">
            Lo que sale del horno, <em>directo a nuestro feed</em>
          </h2>
        </div>

        <div className="grid">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <div className="image-wrapper">
                <Image
                  src={post.img}
                  alt="Post de Instagram"
                  fill
                  className="image"
                />

                <div className="overlay">
                  <InstagramIcon size={18} />
                  <span>Ver en Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="cta">
          <a href={IG_URL} target="_blank">
            <InstagramIcon size={15} /> Ver perfil completo
          </a>
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background: ${COLORS.cream};
          padding: 7rem 1.5rem;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .section-head {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .tag {
          color: ${COLORS.gold};
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .title {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 600;
          color: ${COLORS.green};
          line-height: 1.15;
        }

        .title em {
          color: ${COLORS.gold};
          font-style: italic;
        }

        /* GRID PRO */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.4rem;
        }

        /* CARD */
        .card {
          display: block;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          transform: translateY(0);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        /* IMAGE */
        .image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 18px;
        }

        .image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .card:hover .image {
          transform: scale(1.08);
        }

        /* OVERLAY PREMIUM */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.05)
          );
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 8px;
          padding: 20px;
          color: white;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;

          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .overlay span {
          transform: translateY(10px);
          transition: transform 0.35s ease;
        }

        .card:hover .overlay span {
          transform: translateY(0);
        }

        /* CTA */
        .cta {
          text-align: center;
          margin-top: 3rem;
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
          transition: all 0.25s ease;
        }

        .cta a:hover {
          background: ${COLORS.green};
          color: #fff;
          border-color: ${COLORS.green};
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .gallery {
            padding: 5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
