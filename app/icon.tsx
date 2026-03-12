import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#ff6b00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="22"
          height="22"
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
