import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  width: 512,
  height: 512,
};

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
          background:
            "radial-gradient(circle at top left, rgba(245,194,85,0.28), transparent 28%), linear-gradient(180deg, #09111c 0%, #050a12 100%)",
          color: "#f4f7fb",
          fontSize: 180,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        <div
          style={{
            width: 392,
            height: 392,
            borderRadius: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "8px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            background:
              "linear-gradient(135deg, rgba(255,139,54,0.95), rgba(255,95,109,0.92) 58%, rgba(49,196,192,0.9))",
          }}
        >
          99
        </div>
      </div>
    ),
    size,
  );
}
