import type { ReactNode } from "react";

type ComponentWithDarkBackgroundProps = {
  children: ReactNode;
};

export default function ComponentWithDarkBackground({
  children,
}: ComponentWithDarkBackgroundProps) {
  return (
    <div className="min-h-screen w-full relative">
      {/* Violet Abyss */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)",
        }}
      />
      <div className="relative z-1 text-white">{children}</div>
    </div>
  );
}
