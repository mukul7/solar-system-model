const MULTIPLY_FACTOR = 1;

const RADII = {
  sun: {
    surface: 6955100
  },
  mercury: {
    surface: 2439.7,
    semiMajorAxis: 57909050,
    aphelion: 69816900,
    perihilon: 46001200,
    eccentricity: 0.2056
  },
  venus: {
    surface: 6051.8,
    semiMajorAxis: 108208000,
    aphelion: 108939000,
    perihilon: 107477000,
    eccentricity: 0.0067
  },
  venus2: {
    surface: 6051.8,
    semiMajorAxis: 57909050 * 20,
    aphelion: 69816900 * 10,
    perihilon: 46001200 * 10,
    eccentricity: 0.0067
  },
  earth: {
    surface: 6371.0,
    semiMajorAxis: 149598023,
    aphelion: 152100000,
    perihilon: 147095000
  },
  mars: 3389.5,
  jupiter: 69911,
  saturn: 58232,
  uranus: 25362,
  neptune: 24622,
  aphelion: {
    mars: 249200000,
    jupiter: 816620000,
    saturn: 151450000000,
    uranus: 3008413200,
    neptune: 4537303400
  },
  perihilon: {
    mars: 206700000,
    jupiter: 740520000,
    saturn: 135255000000,
    uranus: 2742129000,
    neptune: 4459512500
  }
};

console.log("mj", RADII["venus"]["semiMajorAxis"]);

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
