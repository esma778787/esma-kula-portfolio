import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 48,
          background: "linear-gradient(135deg, #040814 0%, #0b1220 35%, #101827 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.22) 35%, rgba(15,23,42,0) 72%)",
            left: 760,
            top: 70,
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 260,
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(15,23,42,0) 70%)",
            right: 60,
            bottom: -60,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            top: 64,
            bottom: 64,
            border: "1px solid rgba(148,163,184,0.2)",
            borderRadius: 28,
            background: "rgba(15, 23, 42, 0.18)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            padding: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
                boxShadow: "0 0 18px rgba(96,165,250,0.8)",
              }}
            />
            <span
              style={{
                fontSize: 18,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(191,219,254,0.9)",
              }}
            >
              Portfolio
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 62,
                fontWeight: 700,
                letterSpacing: "-0.07em",
                lineHeight: 1.05,
              }}
            >
              Esma Kula
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                alignItems: "center",
              }}
            >
              {[
                "SEO & GEO",
                "DevOps",
                "AI & Web Technologies",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    border: "1px solid rgba(147,197,253,0.3)",
                    background: "rgba(30,41,59,0.8)",
                    borderRadius: 999,
                    padding: "12px 20px",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#e2e8f0",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(148,163,184,0.2)",
              paddingTop: 18,
            }}
          >
            <div
              style={{
                fontSize: 26,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(191,219,254,0.8)",
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 18,
                color: "rgba(191,219,254,0.75)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#60a5fa" }} />
              Digital Presence
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
