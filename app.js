// to display anything with three.js, we need:
// scene, camera, and renderer

// 1. scene
const scene = new THREE.Scene();

// 2. camera
// we are setting up a perspective camera (there are different types of cameras in three.js)
const camera = new THREE.PerspectiveCamera(
  75, // field of view - extent of scene that is seen on display at any given moment. value is in degrees
  window.innerWidth / window.innerHeight, // aspect ratio - usually want to use width / height of element
  0.1, // near clipping plane - objects nearer to this wont be rendered
  1000 // far clipping plane - objects farther than this wont be rendered
);

// 3. renderer
// we set up a webGLrenderer. there are others for older browseres without WebGL support
const renderer = new THREE.WebGLRenderer();

// setting the renderer to be the width and height of the space we want to fill
renderer.setSize(window.innerWidth, window.innerHeight);

// append the renderer to the dom
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
