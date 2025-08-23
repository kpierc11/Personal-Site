import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default class Game {
  renderer;
  scene;
  camera;
  cube;
  particles;
  controls;

  constructor() {
    this.draw = this.draw.bind(this);
  }

  init() {
    const canvasContainer = document.querySelector("#canvas-container");
    // Setup renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(
      canvasContainer.clientWidth,
      canvasContainer.clientWidth
    );
    this.renderer.setAnimationLoop(this.draw);

    if (canvasContainer) {
      canvasContainer.appendChild(this.renderer.domElement);
    } else {
      document.body.appendChild(this.renderer.domElement);
    }

    // Setup scene
    this.scene = new THREE.Scene();

    // Setup camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      canvasContainer.clientWidth / canvasContainer.clientWidth,
      0.1,
      1000
    );

    this.camera.position.z = 5;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();

    const particleCount = 10000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    const colors = new Float32Array(particleCount * 3);
    const colorInside = new THREE.Color("#D8BFD8");
    const colorOutside = new THREE.Color("#191970");

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      //Position
      const radius = Math.random() * 5;
      const spinAngle = radius * 1;
      const branchAngle = ((i % 6) / 6) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? 1 : -1) *
        0.2 *
        radius;
      const randomY =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? 1 : -1) *
        0.2 *
        radius;
      const randomZ =
        Math.pow(Math.random(), 3) *
        (Math.random() < 0.5 ? 1 : -1) *
        0.2 *
        radius;

      positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      //Colors

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / 5);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);

    // Handle resize
    // window.addEventListener("resize", () => {
    //   this.camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
    //   this.camera.updateProjectionMatrix();
    //   this.renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    // });

    this.camera.position.z = 7;
    this.particles.rotation.x = 1;
    this.particles.rotation.z = 0.05;
  }

  draw() {
    if (!this.scene || !this.camera || !this.renderer) return;

    const positions = this.particles.geometry.attributes.position;
    const time = performance.now() * 0.0000009; // smaller = slower

    for (let i = 0; i < positions.count; i++) {
      const i3 = i * 3;
      const x = positions.array[i3];
      const z = positions.array[i3 + 2];

      // rotation speed depends on radius
      const radius = Math.sqrt(x * x + z * z);
      const angle = 0.0016 * (0.2 + radius * 0.05);

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      positions.array[i3] = x * cos - z * sin;
      positions.array[i3 + 2] = x * sin + z * cos;
    }

    positions.needsUpdate = true;
this.controls.update()

    // Render scene
    this.renderer.render(this.scene, this.camera);
  }
}
