function getPlanet(name) {
  return new Promise(
    (resolve, reject) => {
      var loader = new THREE.GLTFLoader();
      loader.load(
        "/3d-models/" + RADII[name].modelFile,
        function(gltf) {
          window.gltf = gltf;
          gltf.scene.children[0].geometry.scale(
            RADII[name]["scale"],
            RADII[name]["scale"],
            RADII[name]["scale"]
          );
          gltf.scene.children[0].geometry.rotateX(1.5);
          gltf.scene.children[0].geometry.rotateY(3.4);
          gltf.scene.children[0].geometry.rotateZ(4);
          gltf.scene.children[0].position.set(getRadii(name, "aphelion"), 0, 0);

          resolve(gltf.scene.children[0]);
        },
        function(xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function(error) {
          console.log(name, " ki fat gyi ");
          reject("fat gyi code ki");
        }
      );
    }
    // return (sphere = new THREE.Mesh(geometry, material));
  );
}

function getPlanetLabel(name) {
  return new Promise((resolve, reject) => {
    var loader = new THREE.FontLoader();
    loader.load(
      "/fonts/gentilis_bold.typeface.json",
      function(font) {
        var geometry = new THREE.TextGeometry(name, {
          font: font,
          size: 8000,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5
        });
        geometry.computeBoundingBox();
        geometry.computeVertexNormals();
        resolve(geometry);
      },
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function(error) {
        console.error(name, "label ki fat gyi ");
        reject("fat gyi code ki");
      }
    );
  });
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
  // ellipseGeometry.scale(
  //   getRadii(planet, "semiMajorAxis"),
  //   getRadii(planet, "semiMajorAxis"),
  //   getRadii(planet, "semiMajorAxis")
  // );
  window.ellipse1 = ellipseGeometry;
  var orbitMaterial = new THREE.LineDashedMaterial({
    color: "0xffffff",
    linewidth: 1,
    dashSize: 10,
    gapSize: 1000000,
    scale: 1
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
