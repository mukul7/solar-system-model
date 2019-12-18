const MULTIPLY_FACTOR = 1;

const RADII = {
  sun: {
    surface: 695510,
    scale: 69551,
    semiMajorAxis: 0,
    aphelion: 0,
    perihilon: 0,
    eccentricity: 0,
    revolutionPeriod: 0,
    modelFile: "Sun.glb"
  },
  mercury: {
    surface: 2439.7,
    scale: 2439.7,
    semiMajorAxis: 57909050,
    aphelion: 69816900,
    perihilon: 46001200,
    eccentricity: 0.2056,
    revolutionPeriod: 87.969,
    modelFile: "Mercury.glb"
  },
  venus: {
    surface: 6051.8,
    scale: 6051.8,
    semiMajorAxis: 108208000,
    aphelion: 108939000,
    perihilon: 107477000,
    eccentricity: 0.0067,
    revolutionPeriod: 224.701,
    modelFile: "Venus.glb"
  },
  earth: {
    surface: 6371.0,
    scale: 6371.0,
    semiMajorAxis: 149598023,
    aphelion: 152100000,
    perihilon: 147095000,
    eccentricity: 0.0167,
    revolutionPeriod: 365.256,
    modelFile: "Earth.glb"
  },
  mars: {
    surface: 3389.5,
    scale: 3389.5,
    semiMajorAxis: 227939200,
    aphelion: 249200000,
    perihilon: 206700000,
    eccentricity: 0.0934,
    revolutionPeriod: 686.971,
    modelFile: "Mars.glb"
  },
  jupiter: {
    surface: 69911,
    scale: 69911,
    semiMajorAxis: 778299000,
    aphelion: 816040000,
    perihilon: 740550000,
    eccentricity: 0.0489,
    revolutionPeriod: 4332.59,
    modelFile: "Jupiter.glb"
  },
  saturn: {
    surface: 58232,
    scale: 58232,
    semiMajorAxis: 1433530000,
    aphelion: 1514500000,
    perihilon: 1352550000,
    eccentricity: 0.0565,
    revolutionPeriod: 10759.22,
    modelFile: "Saturn.glb"
  },
  uranus: {
    surface: 25362,
    scale: 25362,
    semiMajorAxis: 2872460000,
    aphelion: 3003620000,
    perihilon: 2741300000,
    eccentricity: 0.046381,
    revolutionPeriod: 30688.5,
    modelFile: "Uranus.glb"
  },
  neptune: {
    surface: 24622,
    scale: 24622,
    semiMajorAxis: 4495060000,
    aphelion: 4537303400,
    perihilon: 4459512500,
    eccentricity: 0.0113,
    revolutionPeriod: 60189,
    modelFile: "Neptune.glb"
  }
};

function getRadii(planet, property) {
  return RADII[planet][property] / MULTIPLY_FACTOR;
}
function getSemiMinorAxis(planet) {
  return (
    (RADII[planet]["semiMajorAxis"] *
      Math.sqrt(
        1 - RADII[planet]["eccentricity"] * RADII[planet]["eccentricity"]
      )) /
    MULTIPLY_FACTOR
  );
}

function getOrbitalCenterX(planet) {
  let x =
    (RADII[planet]["semiMajorAxis"] - RADII[planet]["perihilon"]) /
    MULTIPLY_FACTOR;
  return x;
}
