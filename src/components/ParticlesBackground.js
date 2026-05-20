import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
          },
          number: { value: 100 },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}