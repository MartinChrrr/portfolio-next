// components/GradientMesh.jsx (ou .tsx)
// Colle ce composant dans ton layout ou ta page principale, juste après l'ouverture du <body> ou du container principal.
// Il se positionne en fixed derrière tout le contenu.

export default function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[10%] left-[5%] w-[40%] h-[50%] blur-[80px] opacity-100"
        style={{
          borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
          background: "rgba(20,184,166,0.07)",
        }}
      />

      <div
        className="absolute bottom-[5%] right-[10%] w-[35%] h-[45%] blur-[80px] opacity-100"
        style={{
          borderRadius: "55% 45% 40% 60% / 45% 55% 45% 55%",
          background: "rgba(99,102,241,0.05)",
        }}
      />

      <div
        className="absolute top-[50%] left-[40%] w-[25%] h-[35%] blur-[60px] opacity-100"
        style={{
          borderRadius: "45% 55% 60% 40% / 50% 45% 55% 50%",
          background: "rgba(20,184,166,0.04)",
        }}
      />
    </div>
  );
}