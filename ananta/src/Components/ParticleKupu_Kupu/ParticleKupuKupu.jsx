import React from "react";
import Particles from "react-particles";
import "./Particle.scss";
import { loadFull } from "tsparticles";
import { ParticleConfig } from "./ParticleConfig";

const ParticleKupuKupu = () => {
  const loadParticles = async (main) => {
    loadFull(main);
  };

  return (
    <>
      <Particles
        init={loadParticles}
        className="particles"
        options={ParticleConfig}
      />
    </>
  );
};

export default ParticleKupuKupu;
