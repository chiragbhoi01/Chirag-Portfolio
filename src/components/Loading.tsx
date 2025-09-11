import { Commet } from "react-loading-indicators";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark Radial Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at top, #1c1c1c, #000000)",
        }}
      />
      <div className="flex flex-col items-center w-64 relative z-10">
        <p className="text-white text-xl font-semibold mb-4">Loading... Marshal Craft</p>
        <Commet color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
      </div>
    </div>
  );
}

export default Loading;
