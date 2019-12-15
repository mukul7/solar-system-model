const MULTIPLY_FACTOR = 2000;

const RADII2 = {
  sun: {
    surface: 695510
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
    perihilon: 1074770008,
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
  mars: 3389.5 / MULTIPLY_FACTOR,
  jupiter: 69911 / MULTIPLY_FACTOR,
  saturn: 58232 / MULTIPLY_FACTOR,
  uranus: 25362 / MULTIPLY_FACTOR,
  neptune: 24622 / MULTIPLY_FACTOR,
  aphelion: {
    mars: 249200000 / MULTIPLY_FACTOR,
    jupiter: 816620000 / MULTIPLY_FACTOR,
    saturn: 151450000000 / MULTIPLY_FACTOR,
    uranus: 3008413200 / MULTIPLY_FACTOR,
    neptune: 4537303400 / MULTIPLY_FACTOR
  },
  perihilon: {
    mars: 206700000 / MULTIPLY_FACTOR,
    jupiter: 740520000 / MULTIPLY_FACTOR,
    saturn: 135255000000 / MULTIPLY_FACTOR,
    uranus: 2742129000 / MULTIPLY_FACTOR,
    neptune: 4459512500 / MULTIPLY_FACTOR
  }
};
function getRadii(planet, property) {
  return RADII2[planet][property] / MULTIPLY_FACTOR;
}
function getSemiMinorAxis(planet) {
  return (
    (RADII2[planet]["semiMajorAxis"] *
      Math.sqrt(
        1 - RADII2[planet]["eccentricity"] * RADII2[planet]["eccentricity"]
      )) /
    MULTIPLY_FACTOR
  );
}

function getOrbitalCenterX(planet) {
  let x =
    (RADII2[planet]["semiMajorAxis"] - RADII2[planet]["perihilon"]) /
    MULTIPLY_FACTOR;
  return x;
}
