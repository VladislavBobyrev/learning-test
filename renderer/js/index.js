const cnv = document.getElementById('canvas')
let w = window.innerWidth
let h = window.innerHeight

const renderer = new THREE.WebGLRenderer({ canvas: cnv }) 
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, w / h , 0.5, 5000)
const light = new THREE.AmbientLight(0xfffffff)
const geometry = new THREE.PlaneGeometry(300,300, 12, 12)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })


const resize = () =>
  {
    cnv.width = w
    cnv.height = h
    renderer.setClearColor(0x000000)
    scene.add(light)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    renderer.render(scene, camera)
  }
resize()
addEventListener('resize', resize)


renderer.setClearColor(0x000000)

camera.position.set(10, 10 , 999)
scene.add(light)
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

renderer.render(scene, camera)




// const cnv = document.getElementById('canvas');
// let w = window.innerWidth;
// let h = window.innerHeight;
// cnv.width = w;
// cnv.height = h;

// const renderer = new THREE.WebGLRenderer({canvas: cnv});
// const scene = new THREE.Scene();
// scene.background = new THREE.Color('#fff');
// const camera = new THREE.PerspectiveCamera(60, w / h, 0.5, 5000);
// const light = new THREE.SpotLight(0xfffffff, 0.8);
// const light1 = new THREE.SpotLight(0xfffffff, 0.8);
// light.position.set(-10, 10, 10);
// light1.position.set(100, -10, -100);
// // const geometry = new THREE.BoxGeometry(30, 10, 12)
// // const geometry = new THREE.PlaneGeometry()
// const geometry = new THREE.SphereGeometry();
// // const material = new THREE.MeshBasicMaterial({color: 0x0000f0, wireframe: false});
// const material = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});

// const resize = () =>
// {
//   w = window.innerWidth;
//   h = window.innerHeight;
//   cnv.width = w;
//   cnv.height = h;
//   renderer.setSize(w, h);
//   camera.aspect = w / h;
//   camera.updateProjectionMatrix();
// };
// resize();
// addEventListener('resize', resize);


// // window.addEventListener('resize', () =>
// // {
// // const w = window.innerWidth;
// // const h = window.innerHeight;
// // renderer.setSize(w, h);
// // camera.aspect = w / h;
// // camera.updateProjectionMatrix();
// // });

// renderer.setClearColor(0x000000);

// camera.position.set(0, 0, 30);
// scene.add(light);
// scene.add(light1);
// const mesh = new THREE.Mesh(geometry, material);
// mesh.scale.set(5, 5, 5);
// scene.add(mesh);


// const loader = new THREE.TextureLoader();
// loader.load('../img/loader/light.jpg', texture =>
// {
//   mesh.material.setValues({
//     map: texture
//   });
//   mesh.material.needsUpdate = true;
// });


// const render = () =>
// {
//   // mesh.position.z += Math.PI / 10
//   mesh.rotation.z += Math.PI / 100;
//   mesh.rotation.x += Math.PI / Math.random() / 1000;
//   renderer.render(scene, camera);
//   requestAnimationFrame(render);
// };
// render();
