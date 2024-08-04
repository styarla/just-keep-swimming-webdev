import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render( scene, camera );


//shape
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x21618c
});

const torus = new THREE.Mesh( geometry, material );

scene.add(torus);

const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set(5, 5, 5);


const ambientLight = new THREE.AmbientLight( 0xffffff );
scene.add(pointLight, ambientLight);

//const lightHelper = new THREE.PointLightHelper( pointLight )
//const gridHelper = new THREE.GridHelper(200, 50)
//scene.add(lightHelper, gridHelper);

//const controls = new THREE.OrbitControls( camera, renderer.domElement);

const skyTexture = new THREE.TextureLoader().load('/findingnemo.jpeg');
scene.background = skyTexture;

const towerTexture = new THREE.TextureLoader().load('/findingnemofish.jpeg');
const tower = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map: towerTexture})
);

scene.add(tower);

tower.position.z = -5;
tower.position.x = 2;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  tower.rotation.y += 0.01;
  tower.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
};

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.x += 0.01;

  renderer.render( scene, camera );
}

animate()





