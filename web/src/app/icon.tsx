import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#161412",
          borderRadius: 6,
          border: "1.5px solid #C59B27",
        }}
      >
        <span
          style={{
            color: "#C59B27",
            fontSize: 20,
            fontWeight: 800,
            fontFamily: "serif",
            lineHeight: 1,
            marginTop: -2,
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size }
  );
}
