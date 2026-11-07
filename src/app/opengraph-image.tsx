import { ImageResponse } from "next/og"
import { profileData } from "@/content/portfolio-data"

export const alt = "DevSpace Developer Portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage: "radial-gradient(circle at 25px 25px, #18181b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #18181b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#10b981",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            &lt;/&gt;
          </div>
          <span style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
            devspace<span style={{ color: "#10b981" }}>.io</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: "9999px",
              padding: "6px 16px",
              color: "#10b981",
              fontSize: "14px",
              fontWeight: "600",
              width: "auto",
            }}
          >
            ● {profileData.status}
          </div>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "900",
              letterSpacing: "-1.5px",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {profileData.name}
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              margin: 0,
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {profileData.role}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
            color: "#71717a",
            fontSize: "16px",
          }}
        >
          <span>Next.js 16 • React 19 • Tailwind CSS v4 • shadcn/ui</span>
          <span style={{ color: "#10b981", fontWeight: "600" }}>Available Worldwide</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
