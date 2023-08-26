import React from "react";
import Particles from "react-particles";
import "./Particle.scss";
import { loadFull } from "tsparticles";
import { ParticleConfig } from "./ParticleConfig";

const ParticleKupuKupu = () => {
  const load1 = loadFull;
  const load2 = loadFull;
  const load3 = loadFull;
  const load4 = loadFull;

  const loadParticles1 = async (main) => {
    load1(main);
  };
  const loadParticles2 = async (main) => {
    load2(main);
  };
  const loadParticles3 = async (main) => {
    load3(main);
  };
  const loadParticles4 = async (main) => {
    load4(main);
  };

  return (
    <>
      <Particles
        init={loadParticles1}
        className="particles"
        options={ParticleConfig}
      />
    </>
  );
};

export default ParticleKupuKupu;
