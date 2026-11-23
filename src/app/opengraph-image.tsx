import { ImageResponse } from "next/og";

export const alt = "Rumwisai Chivasa | Website Designer & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 72, background: "#17191B", color: "#F7F6F2",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: "#35B5C8", display: "flex" }}>
          WEBSITE DESIGNER · FRONTEND DEVELOPER · UX/UI
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.0, letterSpacing: -3, display: "flex", flexDirection: "column" }}>
          <span>Rumwisai</span>
          <span>Chivasa.</span>
        </div>
        <div style={{ fontSize: 28, color: "#9aa0a6", display: "flex" }}>Harare, Zimbabwe</div>
      </div>
    ),
    size,
  );
}
