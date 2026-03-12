import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#ff6b00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="#0a0a0b" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" stroke="#0a0a0b" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.5" fill="#0a0a0b" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
