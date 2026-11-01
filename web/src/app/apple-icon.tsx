import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#161412",
          borderRadius: 36,
          border: "4px solid #C59B27",
        }}
      >
        <span
          style={{
            color: "#C59B27",
            fontSize: 104,
            fontWeight: 800,
            fontFamily: "serif",
            lineHeight: 1,
            marginTop: -6,
          }}
        >
          R
        </span>
        <span
          style={{
            color: "#FAF8F5",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 4,
            fontFamily: "sans-serif",
            marginTop: 4,
          }}
        >
          RENOVO
        </span>
      </div>
    ),
    { ...size }
  );
}
