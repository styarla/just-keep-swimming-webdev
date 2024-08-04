import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { initSuprSendInbox } from "@suprsend/web-inbox";

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

animate();

initSuprSendInbox(document.getElementById("suprsend-inbox"), suprSendConfig);
const targetElement = docuent.getElementById("suprsend-inbox");
cleanSuprSend(targetElement);

const suprSendConfig={
  workspaceKey: "your_workspace_key",
  distinctId: "your_distinct_id",
  subscriberId: "your_subscriber_id",
  tenantId: "testing",
  themeType: "dark",
  hideToast:true,
  theme: {
    bell: { color: "blue" },
    badge: { backgroundColor: "red", color: "black" },
  }
}

// full theme example

const colors = {
  primary: '#2E70E8',
  primaryText: '#EFEFEF',
  secondaryText: '#CBD5E1',
  border: '#3A4A61',
  main: '#1D2635',
  error: '#F97066'
}

const themeExample= {
  bell: { color: '#fff' },
  badge: { backgroundColor: darkColors.primary },
  header: {
    container: {
      backgroundColor: darkColors.main,
      borderBottom: `0.5px solid ${darkColors.border}`,
      boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)'
    },
    headerText: { color: darkColors.primaryText },
    markAllReadText: { color: darkColors.primary }
  },
  tabs: {
    color: darkColors.primaryText,
    unselectedColor: darkColors.secondaryText + 'D9',
    bottomColor: darkColors.primary,
    badgeColor: 'rgba(100, 116, 139, 0.5)',
    badgeText: darkColors.primaryText
  },
  notificationsContainer: {
    container: {
      backgroundColor: darkColors.main,
      borderColor: darkColors.border
    },
    noNotificationsText: {
      color: darkColors.primaryText
    },
    noNotificationsSubtext: {
      color: darkColors.secondaryText
    },
    loader: { color: darkColors.primary }
  },
  notification: {
    container: {
      borderBottom: `1px solid ${darkColors.border}`,
      readBackgroundColor: darkColors.main,
      unreadBackgroundColor: '#273244',
      hoverBackgroundColor: '#2D3A4D'
    },
    pinnedText: {
      color: darkColors?.secondaryText
    },
    pinnedIcon: {
      color: 'red'
    },
    headerText: { color: darkColors.primaryText },
    bodyText: {
      color: darkColors.secondaryText,
      blockquoteColor: 'rgba(100, 116, 139, 0.5)'
    },
    unseenDot: { backgroundColor: darkColors.primary },
    createdOnText: { color: darkColors.secondaryText },
    subtext: { color: '#94a3b8' },
    actions: [
      { container: { backgroundColor: darkColors.primary } },
      {
        container: {
          borderColor: darkColors.border,
          backgroundColor: 'transparent',
          hoverBackgroundColor: darkColors.main
        },
        text: { color: darkColors.secondaryText }
      }
    ],
    expiresText: {
      backgroundColor: 'rgba(100, 116, 139, 0.5)',
      color: darkColors.secondaryText,
      expiringBackgroundColor: 'rgba(217, 45, 32, 0.15)',
      expiringColor: darkColors.error
    },
    actionsMenuIcon: {
      color: darkColors.secondaryText,
      hoverBackgroundColor: 'rgba(100, 116, 139, 0.5)'
    },
    actionsMenu: {
      backgroundColor: darkColors.main,
      borderColor: darkColors.border
    },
    actionsMenuItem: { hoverBackgroundColor: 'rgba(100, 116, 139, 0.2)' },
    actionsMenuItemIcon: { color: darkColors.secondaryText },
    actionsMenuItemText: {
      color: darkColors.secondaryText
    }
  },
  toast: {
    container: {
      backgroundColor: darkColors.main,
      borderColor: darkColors.border
    },
    headerText: { color: darkColors.primaryText },
    bodyText: {
      color: darkColors.secondaryText,
      blockquoteColor: darkColors.border
    }
  }
}
