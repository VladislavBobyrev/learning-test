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