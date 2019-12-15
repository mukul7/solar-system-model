function getSphere(radii, color = null) {
  var geometry = new THREE.SphereGeometry(radii, 64, 64);
  //   THREE.ImageUtils.loadTexture("textures/sprites/ball.png");
  //   var texture = new THREE.CanvasTexture(generateTexture());
  //   console.log(texture, "textttt");
  var material = new THREE.MeshNormalMaterial({
    side: THREE.DoubleSide,
    // color: new THREE.Color().setHSL(0.3, 0.75, (5 / 15) * 0.4 + 0.1),
    // map: texture,
    depthTest: true,
    depthWrite: true,
    opacity: 1
  });

  return (sphere = new THREE.Mesh(geometry, material));
}

function getOrbit(planet, color) {
  var ellipse = new THREE.EllipseCurve(
    getOrbitalCenterX(planet),
    0, // ax, aY
    getRadii(planet, "semiMajorAxis"),
    getSemiMinorAxis(planet), // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  var ellipsePoints = ellipse.getPoints(500);
  var ellipseGeometry = new THREE.BufferGeometry().setFromPoints(ellipsePoints);

  var orbitMaterial = new THREE.LineBasicMaterial({
    color: color,
    linewidth: 5000000
  });

  // Create the final object to add to the scene
  var planetOrbit = new THREE.Line(ellipseGeometry, orbitMaterial);
  return planetOrbit;
}

function generateTexture() {
  var canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  var context = canvas.getContext("2d");
  for (var i = 0; i < 20000; i++) {
    context.fillStyle = "hsl(0,0%," + (Math.random() * 50 + 50) + "%)";
    context.beginPath();
    context.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() + 0.15,
      0,
      Math.PI * 2,
      true
    );
    context.fill();
  }
  context.globalAlpha = 0.075;
  context.globalCompositeOperation = "lighter";
  return canvas;
}
